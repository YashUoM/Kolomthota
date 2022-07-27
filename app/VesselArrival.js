/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  FlatList, ScrollView, ActivityIndicator, TouchableOpacity, StyleSheet, Text, View

} from 'react-native';


import ActionButton from 'react-native-action-button';
import { List, ListItem } from 'react-native-elements';

export default class VesselArrival extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      numberOfArrivals: 0,
      dataSource: [],
      active: false,
      accesstoken: this.props.navigation.state.params.accesstoken

    }
  }




  renderSeperator = () => {
    return (
      <View
        style={{ height: 1, width: '100%', backgroundColor: 'black', marginBottom: 10, marginTop: 10 }}>

      </View>
    )
  }

  componentDidMount() {
    console.log(this.state.accesstoken)
    const url = 'http://kolomthota.initiyo.com/api/vessel-arrivals/'
    fetch(url,{
      method: 'GET', // or 'PUT'
     
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'token '+ this.state.accesstoken
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,

          dataSource: responseJson,
        });



        console.log(responseJson.length);
        console.log(this.state.accesstoken);
      })


      .catch((error) => {
        console.error(error);
      });
  }






  render() {



    return (

      this.state.isLoading
        ?
        <View style={{ flex: 1, backgroundColor: '#212121' }}><ActivityIndicator /></View>
        :
        <View style={styles.container}>
          <ScrollView>
            <List>
              <FlatList
                data={this.state.dataSource}

                keyExtractor={({ ref_no }, index) => ref_no}
                
                renderItem={({ item }) =>
                  <ListItem
                    title={`${item.vessel_name}`}
                    chevron
                    onPress={() => this.props.navigation.navigate('ViewVesselSubmissions', { id: item.id })}
                  >
                    
                  </ListItem>
                }
              />
            </List>
          </ScrollView>

          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="Vessel Arrival" onPress={() => this.props.navigation.navigate('AddVesselArrivals',{accesstoken:this.state.accesstoken})}>
              <Text>Add</Text>
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#3498db' title="Vessel" onPress={() => this.props.navigation.navigate('AddVessels',{accesstoken:this.state.accesstoken})}>
              <Text>Add</Text>
            </ActionButton.Item>
          </ActionButton>




        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

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
    margin: 10,
    width: 350,
    height: 150,
    backgroundColor: '#343434',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    fontSize: 18,
    color: 'black'
  },
  /* form: {
     flex: 1,
      flexDirection: 'row',
       alignItems:'center',
     width: '100%',
     padding: 20,
     backgroundColor: '#343434',
     borderRadius: 15,
     borderColor: 'white'
   }*/
});
