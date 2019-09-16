import React, {Component} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';

export default class Reciept extends Component{
constructor(props) {
	  super(props);
	
	  this.state = {
	  	items:[]
	  };
	}

componentWillMount(){
		
	}

	render(){
		return(<View style = {{flex:1, alignItems:'center', justifyContent:'center'}}>
			<Text>PURCHASE</Text>
			</View>)
	}

}
