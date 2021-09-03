import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Watermelon from './app/ui/healhomes'
//import Router from './app/ui/router'
import Cigarette from './app/ui/outbound'


export default class App extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {

	  };
	}


	render(){
		return(<View style={{flex:1}}><Watermelon navigateFAR={} changeID={} /></View>)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
