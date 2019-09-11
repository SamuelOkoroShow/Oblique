import React, {Component} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';

export default class RightSideUp extends Component{
constructor(props) {
	  super(props);
	
	  this.state = {
	  	items:[]
	  };
	}

componentWillMount(){
		this._listener()
	}

	render(){
		return(<View style = {{height:30, width:'100%', flexDirection:'row'}}>
			<View style={{width:5, height:this.props.stima}} />
			<View style={{width:5, height:this.props.stima}} />
			<View style={{width:5, height:this.props.stima}} />
			<View style={{width:5, height:this.props.stima}} />
			</View>)
	}

}
