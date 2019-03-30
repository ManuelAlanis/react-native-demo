// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>HEADER</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
      backgroundColor: '#ececec',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 5,
      shadowColor: '#8989ff',
      shadowOffset: { width: 0, height: 20 },
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    }
};

// make the component available to other part of the app
export default Header;
