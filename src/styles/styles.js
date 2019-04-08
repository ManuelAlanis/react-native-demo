import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
     padding: 20
    },
    imageLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250, 
        height: 250,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    buttonContainer: {
        backgroundColor: '#e20021',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    signUpButton: {
        color: '#e20021',
        fontSize: 20,
        marginTop: 10,
        textDecorationLine: 'underline'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    settingOption: {
        marginLeft: 25,
        fontSize: 17,
        color: '#000',
        marginTop: 10,
        marginBottom: 10,
    },
    settingOptionActive: {
        marginLeft: 25,
        fontSize: 17,
        marginTop: 10,
        marginBottom: 10,
        color: '#3366ff',
    },
    alertOverlayStyle:{
        opacity: 0
    },
    alertContentContainerStyle: {
        borderColor: '#b1b1b1',
        borderWidth: 0.5
    }
});
