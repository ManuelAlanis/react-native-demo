import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import DatePicker from 'react-native-datepicker'
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from '../styles/styles.js';
import { Database } from '../firebase.js';

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
        barCode: '',
        products: {}
      }
      this.initBinds();
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

    render() {
      return (
        <View style={styles.containerForm}>
          <Text style={styles.formTitle}>Demo form</Text>
          <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            onChangeText={productName => this.setState({ productName })}
            onSubmitEditing={() => this.passwordInput.focus()} 
            autoCorrect={false} 
            keyboardType='default'
            returnKeyType='next'
            placeholder='Product name'
            placeholderTextColor='#8d8d8d'
          />
        
          <TextInput
            style={styles.input}
            onChangeText={productPrice => this.setState({ productPrice })}
            ref={(input)=> this.passwordInput = input} 
            returnKeyType='go'
            keyboardType='default'
            placeholder='Price' 
            placeholderTextColor='#8d8d8d' 
          />

          <TextInput
            style={styles.input}
            onChangeText={barCode => this.setState({ barCode })}
            ref={(input)=> this.passwordInput = input} 
            returnKeyType='go'
            keyboardType='default'
            placeholder='Barcode' 
            placeholderTextColor='#8d8d8d' 
          />

          {/* <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            androidMode='default'
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36
              }
            }}
            onDateChange={(date) => {this.setState({date: date})}}
          /> */}

          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={this.handleSubmit}
            disabled={this.state.isLoginDisabled}
          >
            <Text
              style={styles.buttonText} 
            >
              ADD NEW PRODUCT
            </Text>
          </TouchableOpacity>

          <FlatList
            data={this.state.products}
            renderItem={({item}) => <Text>{item.name}</Text>}
          />

          <AwesomeAlert
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
      );
    }
  }

export default HomeScreen;