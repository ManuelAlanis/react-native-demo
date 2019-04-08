import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from '../styles/styles.js'
import firebase  from '../firebase.js'

class Settings extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        isShowAlert: false,
        isShowProgress: false,
        title: '',
        message: '',
        confirmText: '',
        isShowConfirmButton: false,
      }
      this.initBinds();
    }

    initBinds() {
      this.handleSignOut = this.handleSignOut.bind(this);
      this.emptyOption = this.emptyOption.bind(this);
    }

    handleSignOut() {
      firebase.auth().signOut().then(function() {
        console.log('process login Sign-out successful.');
      }).catch(function(error) {
        console.log('process login Sign-out An error happened.');
      });
    }

    handleDestroyUser() {
      const user = firebase.auth().currentUser;
      user.delete().then(function() {
        console.log('process login Sign-out successful.');
      }).catch(function(error) {
        console.log('process login An error happened.');
      });
    }
    
    emptyOption() {

    }

    resetPassword() {
        // var auth = firebase.auth();
    // var emailAddress = "user@example.com";

    // auth.sendPasswordResetEmail(emailAddress).then(function() {
    // // Email sent.
    // }).catch(function(error) {
    // // An error happened.
    // });
    }

    showAlert(callback, isShowProgress, title, message, confirmText, isShowConfirmButton) {
      this.setState({
          isShowAlert: true,
          isShowProgress,
          title,
          message,
          confirmText,
          isShowConfirmButton,
      }, () => {
          if (callback) {
              callback();
          }
      });
    }

    hideAlert(callback) {
      this.setState({
          isShowAlert: false
      }, () => {
          if (callback) {
              callback();
          }
      });
    }

    render() {
      return (
        <View style={{ flex: 1, flexDirection: 'column', marginTop: 15 }}>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.emptyOption}>
            <View>
              <Text style={styles.settingOption}>
                Empty option
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={this.handleSignOut}>
            <View>
              <Text style={styles.settingOptionActive}>
                Log out
              </Text>
            </View>
          </TouchableHighlight> 
          <TouchableHighlight underlayColor={'#e2e2e2'} onPress={() => this.showAlert(null, false, 'Destroy user',
                'Are you sure to destroy your user? \n ...you can not enter again', 'Yes, sure', true)}>
            <View>
              <Text style={styles.settingOptionActive}>
                  Destroy user and logout
                </Text>
              </View>
          </TouchableHighlight>
          <AwesomeAlert
              show={this.state.isShowAlert}
              showProgress={this.state.isShowProgress}
              title={this.state.title}
              message={this.state.message}
              confirmText={this.state.confirmText}
              showCancelButton
              showConfirmButton={this.state.isShowConfirmButton}
              closeOnTouchOutside={false}
              confirmButtonColor="#e20021"
              onCancelPressed={() => {
                  this.hideAlert();
              }}
              onConfirmPressed={this.handleDestroyUser}
          />
        </View>
      );
    }
  }

export default Settings;