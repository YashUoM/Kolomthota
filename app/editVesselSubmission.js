import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class editVesselSubmission extends Component {

  constructor() {
    super();
    this.state = {
       // url:this.props.navigation.state.params.url,
        dataSource:[],
       // id:this.props.navigation.state.params.id,
      shipping_agent: '',
      eta: '',
      dis: '',
      load: '',
      ref_no: '',
      draft_arrival: '',
      draft_departure: '',
      remarks: '',
      service: '',
      last_port: '',
      next_port: '',
      vessel: ''
    };
  }

  updateValue(text, field) {
    if (field == 'shipping_agent') {
      this.setState({
        shipping_agent: text,
      })
    } else if (field == ' eta') {
      this.setState({
        eta: text,
      })
    } else if (field == 'dis') {
      this.setState({
        dis: text,
      })
    } else if (field == 'load') {
      this.setState({
        load: text,
      })
    } else if (field == 'ref_no') {
      this.setState({
        ref_no: text,
      })
    } else if (field == 'draft_arrival') {
      this.setState({
        draft_arrival: text,
      })
    } else if (field == 'draft_departure') {
      this.setState({
        draft_departure: text,
      })
    } else if (field == 'remarks') {
      this.setState({
        remarks: text,
      })
    } else if (field == 'service') {
      this.setState({
        service: text,
      })
    } else if (field == 'last_port') {
      this.setState({
        last_port: text,
      })
    } else if (field == 'next_port') {
      this.setState({
        next_port: text,
      })
    } else if (field == 'vessel') {
      this.setState({
        vessel: text,
      })
    }
  }

  submit() {
    let collection = {}
    collection.id=this.state.id,
    collection.shipping_agent = this.state.shipping_agent,
      collection.eta = this.state.eta,
      collection.dis = this.state.dis,
      collection.load = this.state.load,
      collection.ref_no = this.state.ref_no,
      collection.draft_arrival = this.state.draft_arrival,
      collection.draft_departure = this.state.draft_departure,
      collection.remarks = this.state.remarks,
      collection.service = this.state.service,
      collection.last_port = this.state.last_port,
      collection.next_port = this.state.next_port,
      collection.vessel = this.state.vessel

    var url = 'http://kolomthota.initiyo.com/api/vessel-arrivals/';

    fetch(this.state.url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(collection), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .then(() => { this.props.navigation.navigate('Vessels') })
      .catch(function (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);

        throw error;
      })
  }

  componentDidMount() {
   
    fetch(this.state.url)
      .then((response) => response.json())
      .then((responseJson) => {


        this.setState({
          isLoading: false,
          dataSource: responseJson,
          
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
      <ScrollView>
        <ImageBackground style={styles.container} >
          <View style={styles.form}>
            <Text style={styles.labl}>shipping_agent:</Text>
            <TextInput placeholder=""
              onChangeText={(text) => this.updateValue(text, 'shipping_agent')}
            />
            <Text style={styles.labl}>ETA:</Text>
            <TextInput placeholder={eta}
              onChangeText={(text) => this.updateValue(text, ' eta')}
            />
            <Text style={styles.labl}>Discharge:</Text>
            <TextInput placeholder={dis}
              onChangeText={(text) => this.updateValue(text, 'dis')}
            />
            <Text style={styles.labl}>Load:</Text>
            <TextInput placeholder={load}
              onChangeText={(text) => this.updateValue(text, 'load')}
            />
            <Text style={styles.labl}>Reference NO:</Text>
            <TextInput placeholder={ref_no}
              onChangeText={(text) => this.updateValue(text, 'ref_no')}
            />
            <Text style={styles.labl}>Draft(Arrival):</Text>
            <TextInput placeholder={draft_arrival}
              onChangeText={(text) => this.updateValue(text, 'draft_arrival')}
            />
            <Text style={styles.labl}>Draft(Departure):</Text>
            <TextInput placeholder={draft_departure}
              onChangeText={(text) => this.updateValue(text, 'draft_departure')}
            />
            
              
                <Text style={styles.labl2}>Remark:</Text>
                <TextInput placeholder={remarks} onChangeText={(text) => this.updateValue(text, 'remarks')} />
              
                <Text style={styles.labl2}>service:</Text>
                <TextInput placeholder={service} onChangeText={(text) => this.updateValue(text, 'service')} />
             
            
            <Text style={styles.labl}>Last Port</Text>
            <TextInput placeholder={last_port} onChangeText={(text) => this.updateValue(text, 'last_port')} />
            <Text style={styles.labl}>Next Port:</Text>
            <TextInput placeholder={next_port} onChangeText={(text) => this.updateValue(text, 'next_port')} />
            
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
      </ScrollView >
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
