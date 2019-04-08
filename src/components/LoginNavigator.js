import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './Login.js';
import SignUp from './SignUp.js';

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
