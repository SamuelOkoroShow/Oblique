import React, {Component} from 'react';
import { StyleSheet, FlatList, Image, KeyboardAvoidingView, ScrollView, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Cache, AsyncStorage } from "react-native-cache";
import firebase from 'firebase'
import ball from '../image/soft2.png'
import date from '../../date'
import config from '../../config'
import kawa from '../image/kawa.jpg'
import triad from './widget/osun'

var curve = 0;
let counter = 0
var consolid = "dnd"
var redTotal = false;
var dayIncrementor = [];
var tallyArr = [];
let stars;

firebase.initializeApp(config);

var triangle1 = 0;
var triangle2 = 0;
var triangle3 = 0;
var triangle4 = 0;
var triangle5 = 0;


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
      triangle1: 0,
      triangle2: 0,
      triangle3: 0,
      triangle4: 0,
      triangle5: 0,
      items: [],
      triangles : [],
      authenticated: false
    }
}
componentDidMount(){
  this._listener()
//   var cache = new Cache({
//     namespace: "myapp",
//     policy: {
//         maxEntries: 100
//     },
//     backend: AsyncStorage
// });

//   cache.setItem("angelo", "hello world", function(err) {
//     // key 'hello' is 'world' in cache
// });

//   cache.getItem("angelo", function(err, value) {
//     console.log(value);
//     // 'hello'
// });
}

mascular(x){
  if(x > curve){
    curve = x
  }

  return this._perHigh(x)
}

_perHigh(x){
  if(x != 0){
    var perHigh = x/curve
    perHigh = perHigh * 100
    console.log(perHigh)
    return perHigh}else{
      return 0
    } 
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

booyaka(){
  if(this.state.text == consolid){
    alert('Logging In')
    this.setState({
      authenticated : true
    })
  }
}


altUI(){
  return(<View style={{flex:1, alignItems:'center', backgroundColor:'#61dafb', paddingTop:240}}>
    <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text} placeholder="Enter Password" secureTextEntry={true} style={{height:60, padding:10, fontSize:15, width:"80%", backgroundColor:'rgba(0,0,0,0.4)', borderRadius:5}} />
    <TouchableOpacity onPress={() => this.booyaka()} style={{backgroundColor:'rgba(0,0,0,0.4)', padding:10, margin:10}}><Text style={{fontSize:11, color:'#fff'}}>SIGN IN!</Text></TouchableOpacity>
    <Text style={{backgroundColor:'#fff', padding:5, marginTop:10}}>Tip: Cache me in.</Text>
    </View>)
}

logWires(){
  //console.log(this.state.items)
  var total = 0
  for(var i = 0; i<this.state.items.length; i++){
      total = parseInt(this.state.items[i].amount) + total

  }
}

_secretCurrency(naira){
  let dollars = 0
  dollars = naira/362

  curr_sign = 'us $'
  dollars = Math.round(dollars * 100) / 100
  var blondes = dollars * 1.8
  return dollars + " o " + Math.floor(blondes) + " rubio(s)";
}

_submit(){
   ryan = firebase.database().ref('purchase/')
   if(this.state.val != "" && this.state.amount != ""){
      ryan.push({
       ref: this.state.val,
       amount: this.state.amount,
       date : sam.toString(),
       day : date
      })
    }

   this.setState({
    val:"",
    amount:""
   })

}

_edit(value){
  // Edit can update
  // tally = 0
  // var nina;
  //   nina = firebase.database().ref('purchase/'+ value.id )
  //    nina.on('value', (snap) => {
  //     var items = [];
  //     snap.forEach((child) => {
  //       console.log(child)
  //   })
      
  //   })


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
          date : child.val().day,
          ibrahim: child.val().ibrahim
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

_expenseBrackets(){
  var model1 = { lower : 0, high : 200}
  var model2 = { lower : 200, high : 500}
  var model3 = { lower : 500, high : 1000}
  var model4 = { lower : 1000, high : 5000}
  var model5 = { lower : 5000, high : 600000}
}

_randomColor(){
 var ranVal;
  ranVal = Math.floor(Math.random() * 6) + 1;

  switch (ranVal) {
  case 1:
    return "#347398";
    break;
  case 2:
    return "#f9924c";
    break;
  case 3:
    return "#ebe93d";
    break;
  case 4:
    return "#72b694";
    break;
  case 5:
    return "#c14b46";
    break;
  case 6:
    return "#285428";
    break;
  }
}

 format(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

_debitCard(item){
  counter++
  var hudson;
  hudson = item.ibrahim

    switch (hudson) {
  case "Leisure Investment":
    this.setState({
      triangle3: this.state.triangle3 + parseInt(item.amount)
    })
    break;
  case "Growth Security":
    this.setState({
      triangle2: this.state.triangle2 + parseInt(item.amount)
    })
    break;
  case "Personal Stability":
    this.setState({
      triangle1: this.state.triangle1 + parseInt(item.amount)
    })
    break;
  case "Fun & Enjoyment":
        this.setState({
      triangle4: this.state.triangle4 + parseInt(item.amount)
    })
    break;
  case "Land Ahoy!":
       this.setState({
      triangle5: this.state.triangle5 + parseInt(item.amount)
    })
    break;
  }



  // if(counter % 5){
  //    return(<TouchableOpacity onPress = {() => this._edit(item)} style={{flex:1, justifyContent:'center', alignItems:'center', borderTopWidth:1, borderColor:this._randomColor(), backgroundColor: "#111", height:50, width:100}}>
  //     <Text style={{fontSize:14, color:'#c6dec1'}}>{item.ref}</Text>
  //     <Text style={{fontSize:6, fontWeight:'600', color:"#c6dec1"}}>${this._secretCurrency(item.amount)} us</Text>
  //     <Text style={{fontSize:6, fontWeight:'600', color:"#c6dec1"}}>{item.date}</Text>
  //     </TouchableOpacity>)
  // }

    return(<TouchableOpacity onPress = {() => this._edit(item)} style={{flex:1, justifyContent:'center', alignItems:'center', borderTopWidth:1, borderColor:this._randomColor(), backgroundColor: "#111", height:50, width:100}}>
      <Text style={{fontSize:15, color:'#c6dec1'}}>{item.ref}</Text>
      <Text style={{fontSize:7, fontWeight:'600', color:"#c6dec1"}}>${this._secretCurrency(item.amount)} us</Text>
      <Text style={{fontSize:6, fontWeight:'600', color:"#c6dec1",  transform: [{ rotate: '19deg'}]}}>{item.date}</Text>
      </TouchableOpacity>)

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
      
      <View style={{borderLeftWidth:4, borderColor:"#285428", height:80, width:'100%', padding:10, backgroundColor:'#111'}}>
      <Text style = {{color:'#fff'}}>Purchase Ref:</Text>
      <TextInput style = {{width:'100%', color:this._randomColor(), fontSize:30 }}
      onChangeText={(text) => this.setState({val : text})}
       value={this.state.val} placeholder = "Ex: Crab!" />
      </View>
          <KeyboardAvoidingView style={{}} behavior="padding" enabled>
          <View style={{}}>
      <View style={{borderLeftWidth:4, borderColor:"#111", height:80, width:'100%', padding:10, backgroundColor:'#111'}}>
      <Text style = {{color:'#fff'}}>Amount:</Text>
      <TextInput keyboardType="numeric" style = {{width:'100%',color:this._randomColor(), fontSize:30 }} value={this.state.amount}  onChangeText={(text) => this.setState({amount : text})} placeholder = "Ex: N600" />
      </View>
      <View style={{borderLeftWidth:4, borderColor:"#f9924c", height:80, width:'100%', padding:10, backgroundColor:'#111'}}>
      <Text style = {{color:'#fff'}}>Serial Number:</Text>
      <TextInput style = {{width:'100%', fontSize:30, color:this._randomColor()}} value={this.state.color}  onChangeText={(text) => this.setState({amount : text})} placeholder = "Ex: Orange" />
      </View>
      </View>
      </KeyboardAvoidingView>
      <View style= {{flex:1}}>
      <FlatList
  data={this.state.items}
  numColumns = {3}
  renderItem={({item}) => this._debitCard(item)}
/>
<View style={{flexDirection:'row', marginTop:30, alignItems:'flex-end', justifyContent:'space-between', height:100}}>
    <View style={{backgroundColor:'#347398', height:this.mascular(this.state.triangle1), width:50}} />
    <View style={{backgroundColor:'#f9924c', height:this.mascular(this.state.triangle2), width:50}} />
    <View style={{backgroundColor:'#72b694', height:this.mascular(this.state.triangle3), width:50}} />
    <View style={{backgroundColor:'#c14b46', height:this.mascular(this.state.triangle4), width:50}} />
    <View style={{backgroundColor:'#fff', height:this.mascular(this.state.triangle5), width:50}} />
  </View>
</View>
      </ScrollView>
      <TouchableOpacity onPress = {()=> this._submit()} style={{borderColor:this._randomColor(), alignItems:'center', flexDirection:'row', borderTopWidth:2, backgroundColor:'rgba(0,0,0,0.8)', height:50}}>
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text style={{color:"#fff", fontSize:15}}>Buy</Text>
      <Text style={{color:"#fff", fontSize:9}}>{date}</Text>
      </View>
      <Image source = {kawa} resizeMode="stretch" style={{height:'100%', width:30}} />
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
    backgroundColor:'#111'
  },
});
