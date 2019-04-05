import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './login.js';
import SignUp from './signUp.js';

const LoginNavigator = createStackNavigator(
  {
    Login: { 
      screen: Login 
    },
    SignUp: { 
      screen: SignUp 
    }
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(LoginNavigator);
