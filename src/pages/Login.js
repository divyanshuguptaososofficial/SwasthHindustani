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

export default class Login extends Component {
 
	signup() {
		Actions.signup()//signup button function for navigating to signup page
	}

 
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Login"/>
				<View style={styles.loginTextCont}>
					<Text style={styles.loginText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.loginButton}> Signup</Text></TouchableOpacity>
				</View>
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
