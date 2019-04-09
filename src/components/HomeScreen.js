import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../styles/styles.js'

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.containerForm}>
          <Text style={styles.formTitle}>Demo form</Text>
          <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.passwordInput.focus()} 
            autoCorrect={false} 
            keyboardType='default'
            returnKeyType='next'
            placeholder='First name'
            placeholderTextColor='#8d8d8d'
          />
        
          <TextInput
            style={styles.input}
            onChangeText={password => this.setState({ password })}
            ref={(input)=> this.passwordInput = input} 
            returnKeyType='go'
            keyboardType='default'
            placeholder='Last name' 
            placeholderTextColor='#8d8d8d' 
          />
        </View>
      );
    }
  }

export default HomeScreen;