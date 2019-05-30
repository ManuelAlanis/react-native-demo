import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, RefreshControl } from 'react-native';
import DatePicker from 'react-native-datepicker'
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from '../styles/styles.js';
import { Database, Firebase } from '../firebase.js';
import { CardEcomOne, CardEcomTwo, CardEcomFour, CardNine } from 'react-native-card-ui';

const DELAY_TIME_OUT = 3000;


class HomeScreen extends React.Component {
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
        userCart: []
      }
      this.initBinds();
      let userCart = [];
    }

    
    componentDidMount(){ 
      this.getProducts();
    }

    async getProducts() {
      var products = await Database.collection("products").get()
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
      await this.setState({
        products
      })
      console.log('this.state.products finally', this.state.products);
    }

    initBinds(){
      this.handleSubmit = this.handleSubmit.bind(this);
      this.showAlert = this.showAlert.bind(this);
      this.hideAlert = this.hideAlert.bind(this);
      this.addToCart =  this.addToCart.bind(this);
      this.renderCartItem =  this.renderCartItem.bind(this);
      this.buyCartNow = this.buyCartNow.bind(this);
      this.onRefresh = this.onRefresh.bind(this);
    }

    async onRefresh() {
      this.setState({refreshing: true});
      await this.getProducts();
      this.setState({refreshing: false});
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
      return(
        <CardEcomFour
            title={item.name}
            subTitle={item.description}
            price={item.price}
            image={{uri:"https://st.depositphotos.com/1796303/4940/i/950/depositphotos_49400471-stock-photo-woolen-sweater-black-background.jpg"}}
            buttonText={"ADD TO CART"}
            buttonColor={"#4383FF"}
            onClickButton={() => this.addToCart(item)}
          />
      );
    }

    renderCartItem(item){
      return(
        <CardEcomTwo
            title={item.name}
            subTitle={item.description}
            price={item.price}
            image={{uri:"https://st.depositphotos.com/1796303/4940/i/950/depositphotos_49400471-stock-photo-woolen-sweater-black-background.jpg"}}
            buttonText={"ADD TO CART"}
            buttonColor={"#4383FF"}
            onClickButton={() => this.addToCart(item)}
          />
      );
    }

    async buyCartNow() {
      this.setState({
        userCart: []
      });
      const client_id = Firebase.auth().currentUser.uid;
      await Database.collection("purchases").add({
        items: this.state.userCart,
        create_at: new Date(),
        client_id
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      });
    }

    render() {
      // const { userCart } = this.state
      return (
        <ScrollView
          refreshControl={
            <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}/>
          }
        >
        <View style={styles.containerForm}>

          <FlatList
            data={this.state.products}
            renderItem={({item}) => this.renderCard(item)}
          />

          <Text style={{fontSize: 30, marginTop: 10 }}>
            My cart
          </Text>

          <FlatList
              keyExtractor={(item) => item.id}
              extraData={this.state}
              data={this.state.userCart}
              renderItem={({item}) => this.renderCartItem(item)}
          />

          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={this.buyCartNow}
            disabled={this.state.isLoginDisabled}
          >
            <Text
              style={styles.buttonText} 
            >
              BUY CART NOW
            </Text>
          </TouchableOpacity>

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

export default HomeScreen;