import React, {Component} from 'react';
import { StyleSheet, ImageBackground,Image, FlatList, Text, View, TouchableOpacity} from 'react-native';
import firebase from 'firebase'
import config from '../../config'
import notif1 from "../image/notif1.jpg"
import notif2 from "../image/notif2.jpg"
import notif3 from "../image/notif3.jpg"
import notif4 from "../image/notif4.jpg"
import notif5 from "../image/notif5.jpg"
import notif6 from "../image/notif6.jpg"

const sure;
const jaguar;
const SAFTY_BUILD = "Awkward Stretch";

var MANAGER_HIRE;
var Trip_SAKAI = "Kyoto"
var wcw;
var pcf;
var tfs,
var tfd;

var notes = [{
  name:'Personal Stability',
  image: notif1
}, {
  name:'Growth Security',
  image : notif2
},{
  name:'Fun & Enjoyment',
  image: notif3
},{
  name:'Leisure Investment',
  image: notif4
},{
  name:'Land Ahoy!',
  image: notif5
}]
var photos = [notif1,notif2,notif3,notif4,notif5,notif6]

firebase.initializeApp(config);
var user ={
  name:'Lorem ipsum',
  photos : photos,
  text: ' liked ' + (photos.length + 1) + " photos.",
  time:' 4s'

}

export default class Calc extends Component{
constructor(props) {
	  super(props);
	
	  this.state = {
	  	items:[],
      photos: notes,
      curr_sign: '$'
	  };
	}

componentWillMount(){
		this._listener()
	}

breadon(boxnid, silent){
  console.log(boxnid)
  tally = 0
  var carlos;
    carlos = firebase.database().ref('purchase/' + silent.id)
   carlos.set({
      ibrahim : boxnid.name,
      amount: silent.amount,
      day : silent.date,
      ref : silent.ref,
        })
      

}

 eachRow(x,y){
  
    return(<TouchableOpacity onPress = {() => this.breadon(x,y)}>
      <ImageBackground source={x.image} resizeMode="contain" style={{height:65, width:65,justifyContent:'center', alignItems:'center', borderRadius:5, margin:5}}>
      <Text style={{color:'#fff', fontWeight:'700', justifyContent:'center', margin:5, alignItems:'center', fontSize:10}}>{x.name}</Text>
      </ImageBackground></TouchableOpacity>)
  }

  year_collector(){

  }


_blonds(naira){

  var peso = 0
  pesos = naira * 0.054

  curr_sign = '$'
  pesos = Math.round(pesos * 100) / 100
  var blondes = Math.floor(pesos/10)
  return pesos +' or ' + blondes + " Blondes."
}


  limits(knor){
    console.table(knor)
    return(<View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
        <View style={{flexDirection:'row', height:275}}>
        <Image resizeMode="contain" source={notif2} style={{width:40, height:40, borderRadius:20, margin:5, borderWidth:1, borderColor:'#999' }}/>
          <View style={{height:245, margin:10, borderBottomWidth:1, borderColor:'#e3e3e3', width:280}}>
              <View style={{flexDirection:'row', alignItems:'center', height:30}}>
              <Text style={{fontWeight:'600', color:'#444', fontSize:13}}>{knor.ref}</Text>
              <Text style={{fontSize:12}}> + {knor.date} +  of the</Text>
              <Text style={{fontSize:12, color:'#999'}}
              numberOfLines = {1}
              > {this.state.curr_sign}{this._blonds(knor.amount)}</Text>
        </View>
    <FlatList 
            data={this.state.photos}
            style={{flex:1, marginTop:8}}
            numColumns = {3}
            renderItem = {({item}) => this.eachRow(item,knor)}
          />
          </View>
         
        </View>

      </View>)
  }

async _listener(){
  tally = 0
  var carlos;
    carlos = firebase.database().ref('purchase/')
    await carlos.on('value', (snap) => {
      var items = [];
      snap.forEach((child) => {
        items.push({
          id: child.key,
          ref: child.val().ref,
          amount: child.val().amount,
          date : child.val().day,
        });
    })
      //console.log(items)
      this.setState({
        items: items
      })
    })
}

	render(){
	return(<View style={{flex:1, paddingTop:50, backgroundColor:'#fff'}}><FlatList 
            data={this.state.items}
            style={{flex:1, marginTop:8}}
            renderItem = {({item}) => this.limits(item)}
          /></View>)
	}
}

