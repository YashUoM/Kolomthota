/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList, ScrollView, ActivityIndicator, ImageBackground, TouchableHighlight, StyleSheet, Text, List, ListItem, View

} from 'react-native';

import { Button } from 'react-native-elements';

export default class VesselArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      id: this.props.navigation.state.params.id,
      dataSource: [],
      url:''
    }
  }

  componentDidMount() {
    var url = 'http://kolomthota.initiyo.com/api/vessel-arrivals/'
    var str2 = new String(this.state.id)
    const url2 = url.concat(str2)
    fetch(url2)
      .then((response) => response.json())
      .then((responseJson) => {


        this.setState({
          isLoading: false,
          dataSource: responseJson,
          url:url2
         });
        
        })

      .catch((error) => {
        console.error(error);
      });
  }

  render() {


    var eta = this.state.dataSource.eta;
    var dis = this.state.dataSource.dis;
    var load = this.state.dataSource.load;
    var ref_no = this.state.dataSource.ref_no;
    var draft_arrival = this.state.dataSource.draft_arrival;
    var draft_departure = this.state.dataSource.draft_arrival;
    var remarks = this.state.dataSource.remarks;
    var service = this.state.dataSource.service;
    var last_port = this.state.dataSource.last_port;
    var next_port = this.state.dataSource.next_port;
    var vessel_name = this.state.dataSource.vessel_name;

    return (


      this.state.isLoading
        ?
        <View style={{ flex: 1, backgroundColor: '#212121' }}><ActivityIndicator /></View>
        :
        <ImageBackground style={styles.container}>
          <ScrollView>
            <View style={styles.vessel}>
            <Text> Vessel Name: {vessel_name}</Text>
            <Text>Estimated Time of Arrival: {eta}</Text>
            <Text>Discharge: {dis}</Text>
            <Text>Load: {load}</Text>
            <Text>Reference No: {ref_no}</Text>
            <Text>Draft (Arrival): {draft_arrival}</Text>
            <Text>Draft (Departure): {draft_departure}</Text>
            <Text>Remarks: {remarks}</Text>
            <Text>Services: {service}</Text>
            <Text>Last Port: {last_port}</Text>
            <Text>Next Port: {next_port}</Text>
            <Button title="Edit"
              onPress={() => this.props.navigation.navigate('EditVesselSubmissions')}
              buttonStyle={{
                backgroundColor: "#343434",
                width: 150,
                height: 45,
                borderColor: "#9E9E9E",
                borderWidth: 3,
                borderRadius: 5
            }}
            />
            
            </View>
          </ScrollView>

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  vessel: {
    width: '100%',
    padding: 20,
    backgroundColor: '#343434',
    borderRadius: 15,
    borderColor: 'white'
  }
});
