import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';
import { Icon } from 'react-native-elements'
import Registered from './Registered';

const ACCESS_TOKEN = 'access_token';

export default class Login extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#3d5068',
        },
        headerTintColor: '#fff'
      };

    constructor() {
        super();

        this.state = {
            uname: "",
            pword: "",
            errors: "",
            accesstoken:""
        }
    }

    async storeToken(accessToken) {
        try {
            await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
           // this.getToken();
        } catch (error) {
            console.log("Something went wrong")
        }
    }

    async getToken() {
        try {
            let token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is: " + token);
        } catch (error) {
            console.log("Something went wrong")
        }
    }

    async removeToken() {
        try {
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            this.getToken();
        } catch (error) {
            console.log("Something went wrong")
        }
    }

    async onLoginPressed() {
        try {
            let response = await fetch('http://kolomthota.initiyo.com/api/auth/token', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.uname,
                    password: this.state.pword,

                })
            });
            let res = await response.text();
            if (response.status == 200) {
                this.setState({ error: "" });
                let accessToken = res;
                this.storeToken(accessToken);
                this.setState({accesstoken:accessToken})
                console.log("res token: " + this.state.accesstoken);
                this.props.navigation.navigate('Tabs', {accessToken:this.state.accesstoken});
                
                //then(()=>{this.props.navigation.navigate(Registered)});
            } else {
                let error = "error";
                
                throw error;
            }
        } catch (error) {
            this.removeToken();
            this.setState({ errors: "Invalid username or password" });
            console.log("error: " + error);
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.container2}>
                    <View style={styles.passwordContainer}>
                        <Icon
                            name="perm-identity"
                            color='white' />
                        <TextInput style={styles.input}
                            onChangeText={(val) => this.setState({ uname: val })}
                            placeholder="Username"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <Icon
                            name='lock'
                            color='white' />
                        <TextInput style={styles.input}
                            onChangeText={(val) => this.setState({ pword: val })}
                            placeholder="Password"
                            placeholderTextColor="white"
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <Text style={styles.error}>
                    {this.state.errors}

                </Text>
                <TouchableOpacity style={styles.button} onPress={this.onLoginPressed.bind(this)}>
                    <Text style={styles.buttonText}>
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
        padding: 30,
    },
    input: {
        height: 50,
        width: 350,
        marginTop: 10,
        fontSize: 22,
        borderRadius: 5,
        color: 'white'
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
        color: '#2C3D53',
        alignSelf: 'center',
        fontWeight: "bold"

    },
    heading: {
        fontSize: 30,
    },
    error: {
        color: 'red',
        paddingTop: 10
    },
    passwordContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'white',
        width: 280
    },
    inputStyle: {
        flex: 1,
    },
    container2: {
        marginBottom: 30
    }
});
