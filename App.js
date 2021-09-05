import React, {Component, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Watermelon from './app/ui/healhomes'
//import Router from './app/ui/router'
import Cigarette from './app/ui/outbound'

const navigatieFAR = () => {

}

const App = () => {
	const [changeID, useChangeID] = useState("Admin")
	return (<View style={{flex:1}}>
		{/* <Watermelon navigateFAR={navigatieFAR} changeID={changeID} /> */}
		<Cigarette idUser = "AdminSam" />
		</View>
	)
}

export default App

