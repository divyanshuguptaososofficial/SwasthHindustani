import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class Home extends Component {
 
    home() {
		Actions.login()//signup button function for navigating to signup page
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo/>
                <TouchableOpacity onPress={this.home}><Text style={styles.loginButton}> Login</Text></TouchableOpacity>
			</View>	
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent :'center'
  },
  loginTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  loginText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  loginButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});
