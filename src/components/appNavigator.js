import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainApplication from './MainApplication.js';

const AppNavigator = createStackNavigator(
  {
    MainApplication: { 
      navigationOptions: {
        title: 'Application'
      },
      screen: MainApplication,
    },
  },
  {
    headerMode: 'float'
  }
);

export default createAppContainer(AppNavigator);
