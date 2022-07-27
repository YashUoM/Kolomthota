import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';


export default class Registered extends Component {

    static navigationOptions = {
        header:null
      };

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading2}>
                Thank you for submitting. Please wait for your confirmation email.
                </Text>

                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonText2}>
                        Ok
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3D53',
        padding: 30,
    },
    button: {
        height: 50,
        backgroundColor: 'white',
        marginTop: 40,
        justifyContent: 'center',
        borderRadius: 10,
        width: 250,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
    },
    buttonText2: {
        fontSize: 22,
        color: '#2C3D53',
        alignSelf: 'center',
        fontWeight: "bold"

    },
    heading2:{
        fontSize: 15,
        color: 'white',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
