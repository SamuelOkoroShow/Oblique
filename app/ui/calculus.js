import React, {Component} from 'react';
import { StyleSheet, FlatList, Text, View, TouchableOpacity} from 'react-native';
import firebase from 'firebase'



firebase.initializeApp(config);

export default class Calc extends Component{
constructor(props) {
	  super(props);
	
	  this.state = {
	  	items:[]
	  };
	}

componentWillMount(){
		this._listener()
	}

ibrahim(item){
    return(<View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: this._randomColor(), height:50, width:100}}>
      <View>
      <Text style={{fontSize:15}}>{item.ref}</Text>
      <Text style={{fontSize:8, fontWeight:'600'}}>${this._inDollars(item.amount)} us</Text>
      </View>
      <TouchableOpacity onPress = {() => {let userRef = this.database.ref('purchase/' + item.id); console.log(userRef)}}>
      <Text style={{color:'#fff'}}>X</Text>
      </TouchableOpacity>
      </View>)

      this.setState({
        items : this.state.items
      })
}

async _listener(){
  tally = 0
  var valmet;
    valmet = firebase.database().ref('purchase/')
    await valmet.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          ref: child.val().ref,
          amount: child.val().amount,
          date : child.val().day
        });
    })
      //console.log(items)
      this.setState({
        items: items
      })
      this.logWires()
    })
}

	render(){
	return(<View style={{flex:1, backgroundColor:'#000'}}></View>)
	}
}

