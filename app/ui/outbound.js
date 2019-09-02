import React, {Component} from 'react';
import { StyleSheet, FlatList, Image, KeyboardAvoidingView, ScrollView, Text, View, TouchableOpacity, TextInput } from 'react-native';
//import { Cache, AsyncStorage } from "react-native-cache";
import firebase from 'firebase'
import ball from '../image/soft2.png'
import date from '../../date'
import config from '../../config'

var consolid = "dousen"
var redTotal = false;
var dayIncrementor = [];
var tallyArr = [];


firebase.initializeApp(config);
var ryan;
var sam = new Date()
var tally = 0
var curr_sign = "N";

export default class Outbound extends Component{

constructor() {
  super();
    this.state = {
      val : '',
      amount :'',
      color:'',
      text:"",
      dice : 3,
      ren:"amount",
      items: [],
      authenticated: false
    }
}
componentDidMount(){
  this._listener()
//   var cache = new Cache({
//     namespace: "myapp",
//     policy: {
//         maxEntries: 50
//     },
//     backend: AsyncStorage
// });

//   cache.setItem("hello", "hello world", function(err) {
//     // key 'hello' is 'world' in cache
// });

//   cache.getItem("hello", function(err, value) {
//     console.log(value);
//     // 'hello'
// });
}

_sumbit(secret){
  
  this.setState({
    text: secret
  })
  console.log(secret)
  if(secret == passcode){
    this.setState({
      authenticated: true
    })
  }
}


altUI(){
  return(<View style={{flex:1, alignItems:'center', backgroundColor:'#61dafb', paddingTop:240}}>
    <TextInput onChangeText={(text) => (this.state.text == consolid)?this.setState({authenticated:true, text: text}):this.setState({text})} value={this.state.text} placeholder="Enter Password" secureTextEntry={true} style={{height:60, padding:10, fontSize:15, width:"80%", backgroundColor:'rgba(0,0,0,0.4)', borderRadius:5}} />
    <Text style={{backgroundColor:'#fff', padding:5, marginTop:10}}>Tip: Drake and fucking future dude.</Text>
    </View>)
}

logWires(){
  //console.log(this.state.items)
  var total = 0
  for(var i = 0; i<this.state.items.length; i++){
      total = parseInt(this.state.items[i].amount) + total

  }
}

_inDollars(naira){
  let dollars = 0
  dollars = naira/362

  curr_sign = 'us $'
  dollars = Math.round(dollars * 100) / 100
  return dollars
}

_sumbit(){
   ryan = firebase.database().ref('purchase/')
   ryan.push({
    ref: this.state.val,
    amount: this.state.amount,
    date : sam.toString(),
    day : date
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

_rollDice(){
    var ranVal;
  ranVal = Math.floor(Math.random() * 6) + 1;
  this.setState({
    dice : ranVal
  })
}

_randomColor(){
 var ranVal;
  ranVal = Math.floor(Math.random() * 6) + 1;

  switch (ranVal) {
  case 6:
   return "#3deb8f";
    break;
  case 1:
    return "#eb9f3d";
    break;
  case 2:
    return "#3deb45";
    break;
  case 3:
    return "#ebe93d";
    break;
  case 4:
    return "#c185d5";
    break;
  case 5:
    return "#d5858a";
    break;
}
}

 format(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

_debitCard(item){


  if(!redTotal){
    return(<TouchableOpacity style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor: this._randomColor(), height:50, width:100}}>
      <Text style={{fontSize:15}}>{item.ref}</Text>
      <Text style={{fontSize:8, fontWeight:'600'}}>${this._inDollars(item.amount)} us</Text>
      </TouchableOpacity>)
    }

    if(redTotal){
    return(<TouchableOpacity onPress={()=> this.setState({ren:'amount'})} style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#b93535', height:50, width:100}}>
      <Text style={{color:'#fff'}}>{tallyArr[tallyArr.length-3].day} Total</Text>
      <Text style={{color:'#fff', fontSize:11}}>{tallyArr[tallyArr.length-3].tally}</Text>
      </TouchableOpacity>)
    }

      this.setState({
        items : this.state.items
      })
}

dice(){

 switch (this.state.dice){
  case 1:
    return(<View style={{justifyContent:'center', alignItems:'center'}}>
    <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View>)
    break;
  case 2:
    return(<View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}} >
    <View style={{}}>
      <View style={{width:40, height:40, borderRadius:20, }} />
      <View style={{width:40, height:40, borderRadius:20, }} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View><View style={{}}>
            <View style={{width:40, height:40, borderRadius:20, }} />
            <View style={{width:40, height:40, borderRadius:20, }} />
            <View style={{width:40, height:40, borderRadius:20, }} />
    </View><View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20}} />
      <View style={{width:40, height:40, borderRadius:20}} />
    </View>
    </View>)
    break;
  case 3:
     return(<View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}} >
    <View style={{}}>
      <View style={{width:40, height:40, borderRadius:20, }} />
      <View style={{width:40, height:40, borderRadius:20, }} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View><View style={{}}>
            <View style={{width:40, height:40, borderRadius:20, }} />
            <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
            <View style={{width:40, height:40, borderRadius:20, }} />
    </View><View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20}} />
      <View style={{width:40, height:40, borderRadius:20}} />
    </View>
    </View>)
    break;
  case 4:
     return(<View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}} >
    <View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20, }} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View><View style={{}}>
            <View style={{width:40, height:40, borderRadius:20, }} />
            <View style={{width:40, height:40, borderRadius:20}} />
            <View style={{width:40, height:40, borderRadius:20, }} />
    </View><View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View>
    </View>)
    break;
  case 5:
     return(<View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}} >
    <View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20, }} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View><View style={{}}>
            <View style={{width:40, height:40, borderRadius:20, }} />
            <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
            <View style={{width:40, height:40, borderRadius:20, }} />
    </View><View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <View style={{width:40, height:40, borderRadius:20}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View>
    </View>)
    break;
  case  6:
    return(<View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}} >
    <View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View><View style={{}}>
            <View style={{width:10, height:40, borderRadius:20, }} />
            <View style={{width:10, height:40, borderRadius:20}} />
            <View style={{width:10, height:40, borderRadius:20, }} />
    </View><View style={{}}>
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
      <Image source = {ball} resizeMode = "contain" style={{width:40, height:40}} />
    </View>
    </View>)
    break;
}
}

render(){
  if(this.state.authenticated){
  return(<View style={styles.container}>
    <ScrollView style={{}}>
    <TouchableOpacity onPress={()=> this._rollDice()} style={{height:300, justifyContent:'center', alignItems:'center', width:'100%'}}>
      {this.dice()}
      </TouchableOpacity>
      
      <View style={{height:80, width:'100%', padding:10, backgroundColor:'#333'}}>
      <Text style = {{color:'#fff'}}>Purchase Ref:</Text>
      <TextInput style = {{width:'100%', fontSize:30 }}
      onChangeText={(text) => this.setState({val : text})}
       value={this.state.val.ref} placeholder = "Ex: Coffee" />
      </View>
          <KeyboardAvoidingView style={{}} behavior="padding" enabled>
          <View style={{}}>
      <View style={{height:80, width:'100%', padding:10, backgroundColor:'#333'}}>
      <Text style = {{color:'#fff'}}>Amount:</Text>
      <TextInput keyboardType="numeric" style = {{width:'100%', fontSize:30 }} value={this.state.amount}  onChangeText={(text) => this.setState({amount : text})} placeholder = "Ex: N600" />
      </View>
      <View style={{height:80, width:'100%', padding:10, backgroundColor:'#333'}}>
      <Text style = {{color:'#fff'}}>Serial Number:</Text>
      <TextInput style = {{width:'100%', fontSize:30 }} value={this.state.color}  onChangeText={(text) => this.setState({amount : text})} placeholder = "Ex: Orange" />
      </View>
      </View>
      </KeyboardAvoidingView>
      <View style= {{flex:1}}>
      <FlatList
  data={this.state.items}
  numColumns = {3}
  renderItem={({item}) => this._debitCard(item)}
/></View>
      </ScrollView>
      <TouchableOpacity onPress = {()=> this._sumbit()} style={{height:50, alignItems:'center', justifyContent:'center', width:'100%', padding:10, borderTopWidth:3, backgroundColor:'#eb9f3d'}}>
      <Text style={{color:'#fff', fontSize:15}}>Buy</Text>
      </TouchableOpacity>
    </View>
  )
}else{
    return(<View style={{flex:1}}>{this.altUI()}</View>)
  }
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#333'
  },
});
