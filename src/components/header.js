// import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// make a component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>HEADER</Text>;
};

const styles = {
    textStyle: {
        fontSize: 40,
    }
};

// make the component available to other part of the app
export default Header;
