import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainApplication from './MainApplication.js';

const AppNavigator = createStackNavigator(
  {
    MainApplication: { 
      screen: MainApplication 
    },
  },
  {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
