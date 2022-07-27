import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TextInput, Picker } from 'react-native';
import { Button } from 'react-native-elements';

export default class AddVessels extends Component {
    constructor() {
        super();
        this.state = {
            vessel_status: 'M',
            vessel_loa: '',
            vessel_name: '',
            accesstoken: this.props.navigation.state.params.accesstoken
        };
    }

    updateValue(text, field) {
        if (field == 'vessel_status') {
            this.setState({
                vessel_status: text,
            })
        } else if (field == ' vessel_loa') {
            this.setState({
                vessel_loa: text,
            })
        } else if (field == 'vessel_name') {
            this.setState({
                vessel_name: text,
            })
        }
    }

    submit() {
        let collection = {}
        collection.vessel_status = this.state.vessel_status,
            collection.vessel_loa = this.state.vessel_loa,
            collection.vessel_name = this.state.vessel_name


        var url = 'http://kolomthota.initiyo.com/api/vessels/';

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(collection), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'token '+ this.state.accesstoken
              }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .then(console.log(this.state.vessel_status))
            .then(() => { this.props.navigation.navigate('Vessels') })
            .catch(function (error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);

                throw error;
            })
    }

    render() {
        return (

            <ImageBackground style={styles.container} >
                <View style={styles.form}>

                    <Text style={styles.labl}>Vessel Name:</Text>
                    <TextInput placeholder="XXXX"
                        onChangeText={(text) => this.updateValue(text, 'vessel_name')}
                    />
                    <Text style={styles.labl}>Vessel Status:</Text>
                    <Picker
                        selectedValue={this.state.vessel_status}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ vessel_status: itemValue })}>
                        <Picker.Item label="Main Line" value="M" />
                        <Picker.Item label="Feeder Line" value="F" />
                    </Picker>
                    <Text style={styles.labl}>Vessel Loa:</Text>
                    <TextInput placeholder="100.00"
                        onChangeText={(text) => this.updateValue(text, ' vessel_loa')}
                    />


                </View>
                <View style={{ padding: 20, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Button
                        onPress={() => this.submit()}
                        title="Submit"
                        buttonStyle={{
                            backgroundColor: "#343434",
                            width: 100,
                            height: 45,
                            borderColor: "#9E9E9E",
                            borderWidth: 3,
                            borderRadius: 5
                        }}
                    />
                </View>

            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#212121',
        padding: 20,

    },
    labl: {
        color: '#9E9E9E',
        fontSize: 18
    },
    form: {
        width: '100%',
        padding: 20,
        backgroundColor: '#343434',
        borderRadius: 15,
        borderColor: 'white'
    },
    labl2: {
        color: '#9E9E9E',
        fontSize: 18,
        width: '100%'
    },
    cont2: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    cont3: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    Butn: {

    }
})

