import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificatonsScreen';
import BasicInformationScreen from './BasicInformationScreen';
import IncomeDetailsScreen from './IncomeDetailsScreen';
import OtherDetailsScreen from './OtherDetails';
import UploadDocumentScreen from './UploadDocumentScreen';

const Tab = createMaterialTopTabNavigator();

const ProfileScreen = () => (
    
      <Tab.Navigator
      initialRouteName="Basic Information"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 10 },
        style: { backgroundColor: '#000000' },
      }}
    >
      <Tab.Screen
        name="Basic Information"
        component={BasicInformationScreen}
        options={{ tabBarLabel: 'Basic Information' }}
      />
      <Tab.Screen
        name="Income Details"
        component={IncomeDetailsScreen}
        options={{ tabBarLabel: 'Income Details' }}
      />
       <Tab.Screen
        name="Other Details"
        component={OtherDetailsScreen}
        options={{ tabBarLabel:'Other Details' }}
      />
       <Tab.Screen
        name="Upload Documents"
        component={UploadDocumentScreen}
        options={{ tabBarLabel:'Upload Documents' }}
      />
    
    </Tab.Navigator>
    
);

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
