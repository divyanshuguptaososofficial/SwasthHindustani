import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ManageDrawer from './pages/ManageDrawer';
import OnBoarding from './pages/OnBoarding';
import Hospital from './pages/SelectedHospital';
import All from './pages/NotificatonsScreen';
export default class Routes extends Component {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" />
			      <Scene key="signup" component={Signup} title="Register" />
				  <Scene key="Hospital" component={Hospital} title="Register" />
				  <Scene key="All" component={All} title="Register" />

				  <Scene key="OnBoarding" component={OnBoarding} options={{ headerShown: false }} initial={true}/>
				  <Scene key="home" component={ManageDrawer} title="ManageDrawer"  />
			    </Stack>
			 </Router>
			)
	}
}