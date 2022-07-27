import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class Home extends Component {

    static navigationOptions = {
        header: null
      };

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>
                    Welcome!
                </Text>
                <TouchableOpacity style={styles.button2} onPress={()=> {this.props.navigation.navigate('UserRegisteration')}}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText2}>
                        Login
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
        padding: 20,
    },
    button: {
        height: 50,
        backgroundColor: 'white',
        margin: 10,
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
    heading: {
        fontSize: 40,
        color: 'white'
    },
    button2: {
        height: 50,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        width: 250,
        margin: 10,
        marginTop: 80
    }
});
