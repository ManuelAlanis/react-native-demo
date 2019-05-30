import React from 'react';
import { View, Text, TextInput, RefreshControl, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from '../styles/styles.js';
import { Database, Firebase } from '../firebase.js';
import { CardEcomOne, CardEcomTwo, CardEcomFour, CardNine } from 'react-native-card-ui';

const DELAY_TIME_OUT = 3000;


class Purchases extends React.Component {
    constructor() {
      super();
      this.state = {
        date:'2016-05-15',
        showAlert: false,
        message: '',
        confirmText: '',
        showConfirmButton: false,
        isLoginDisabled: false,
        productName: '',
        productPrice: '',
        barCode: '234234',
        products: {},
        userCart: [],
        myPurchases: '',
        refreshing: false
      }
      this.initBinds();
      let userCart = [];
    }

    
    componentDidMount(){ 
      this.getProducts();
    }

    async getProducts() {
        const client_id = Firebase.auth().currentUser.uid;
        const myPurchases = await Database.collection("purchases").where("client_id", "==", client_id)
        .get()
        .then(function(querySnapshot) {
          const array = [];
          querySnapshot.forEach(function(doc) {
            array.push(doc.data())
          });
          return array;
        })
        .catch(function(error) {
          console.log("Error getting documents: ", error);
        });

      console.log('myPurchases', myPurchases);
      await this.setState({
        myPurchases
      })
    }

    initBinds(){
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showAlert = this.showAlert.bind(this);
      this.hideAlert = this.hideAlert.bind(this);
      this.addToCart =  this.addToCart.bind(this);
      this.onRefresh = this.onRefresh.bind(this);
    }

    clearState() {
      this.setState({
        productName: '',
        productPrice: '',
        barCode: ''
      });
    }

    async handleSubmit() {
      await Database.collection("products").add({
          name: this.state.productName,
          price: this.state.productPrice,
          barCode: this.state.barCode,
          create_at: new Date()
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
      this.clearState();
      this.showAlert(null, true, 'Wait',
      'Adding this product to catalog', 'OK', false);
      setTimeout(() => {
        this.hideAlert();
      }, DELAY_TIME_OUT)
    }

    showAlert(callback, showProgress, title, message, confirmText, showConfirmButton) {
      this.setState({
          showAlert: true,
          showProgress,
          title,
          message,
          confirmText,
          showConfirmButton,
      }, () => {
          if (callback) {
              callback();
          }
      });
    }

    hideAlert(callback) {
        this.setState({
            showAlert: false
        }, () => {
            if (callback) {
                callback();
            }
        });
    }

    addToCart(item) {
      const newCart = this.state.userCart
      newCart.push(item);
      this.setState({
        userCart: newCart
      });

      console.log('addToCart this.state.userCart', this.state.userCart);
      this.showAlert(null, true, 'Wait',
      'Adding to cart...', 'OK', false);
      setTimeout(() => {
        this.hideAlert();
      }, 500)
    }

    renderCard(item){
      const totalItems = 'Compraste ' + item.items.length + ' articulo(s)'
      return(
        <CardEcomOne
            title={totalItems}
            nbStar={item.items.length}
            subTitle={item.description}
            price={item.price}
            image={{uri:"https://st.depositphotos.com/1796303/4940/i/950/depositphotos_49400471-stock-photo-woolen-sweater-black-background.jpg"}}
            buttonText={"ADD TO CART"}
            buttonColor={"#4383FF"}
            onClickButton={() => this.addToCart(item)}
          />
      );
    }

    async onRefresh() {
        this.setState({refreshing: true});
        await this.getProducts();
        this.setState({refreshing: false});
    }    

    render() {
      return (
        <ScrollView
            refreshControl={
                <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}/>
            }
        >
            <View style={styles.containerForm}>
        
            <Text style={{fontSize: 30, marginTop: 10 }}>
                My purchases
            </Text>

            <FlatList
                data={this.state.myPurchases}
                renderItem={({item}) => this.renderCard(item)}
            />

            <AwesomeAlert
                style={{alignItems: 'center',
                justifyContent: 'center'}}
                show={this.state.showAlert}
                showProgress={this.state.showProgress}
                title={this.state.title}
                message={this.state.message}
                confirmText={this.state.confirmText}
                showConfirmButton={this.state.showConfirmButton}
                closeOnTouchOutside={false}
                confirmButtonColor="#e20021"
                closeOnHardwareBackPress={false}
                onCancelPressed={() => {
                    this.hideAlert();
                }}
                onConfirmPressed={() => {
                    this.hideAlert();
                }}
                overlayStyle={styles.alertOverlayStyle}
                contentContainerStyle={styles.alertContentContainerStyle}
            />
            </View>
        </ScrollView> 
      );
    }
  }

export default Purchases;