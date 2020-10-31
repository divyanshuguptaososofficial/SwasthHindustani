import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificatonsScreen';
import BasicInformationScreen from './BasicInformationScreen';
import IncomeDetailsScreen from './IncomeDetailsScreen';
import OtherDetailsScreen from './OtherDetails';
import UploadDocumentScreen from './UploadDocumentScreen';
import { createStackNavigator } from '@react-navigation/stack';

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
        component={BasicInforationStackScreen}
        options={{ tabBarLabel: 'Basic Information' }}
      />
      <Tab.Screen
        name="Income Details"
        component={IncomeDetailsStackScreen}
        options={{ tabBarLabel: 'Income Details' }}
      />
       <Tab.Screen
        name="Other Details"
        component={OtherDetailsStackScreen}
        options={{ tabBarLabel:'Other Details' }}
      />
       <Tab.Screen
        name="Upload Documents"
        component={UploadDocumentStackScreen}
        options={{ tabBarLabel:'Upload Documents' }}
      />
    
    </Tab.Navigator>
    
);

export default ProfileScreen;
const BasicInforationsStack = createStackNavigator();
const IncomeDetailsStack = createStackNavigator();
const OtherDetailsStack = createStackNavigator();
const UploadDocumentStack = createStackNavigator();

const BasicInforationStackScreen = ({navigation}) => (
  
  <BasicInforationsStack.Navigator screenOptions={{
    headerStyle: {
    backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold'
    }
  }}>
  
          <BasicInforationsStack.Screen name="Basic Information" component={BasicInformationScreen} options={{
            title:'Basic Information'
        
  
          }} />
  
        </BasicInforationsStack.Navigator>
  );

  const IncomeDetailsStackScreen = ({navigation}) => (
  <IncomeDetailsStack.Navigator screenOptions={{
    headerStyle: {
    backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold'
    }
  }}>
  
          <BasicInforationsStack.Screen name="Home" component={IncomeDetailsScreen} options={{
            title:'Income Details'
        
  
          }} />
  
        </IncomeDetailsStack.Navigator>
  );


  const OtherDetailsStackScreen = ({navigation}) => (
    <OtherDetailsStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>
    
            <OtherDetailsStack.Screen name="Home" component={OtherDetailsScreen} options={{
              title:'Other Details'
          
    
            }} />
    
          </OtherDetailsStack.Navigator>
    );

    
  const UploadDocumentStackScreen = ({navigation}) => (
    <UploadDocumentStack.Navigator screenOptions={{
      headerStyle: {
      backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      fontWeight: 'bold'
      }
    }}>
    
            <UploadDocumentStack.Screen name="Upload Document" component={UploadDocumentScreen} options={{
              title:'Upload Document'
          
    
            }} />
    
          </UploadDocumentStack.Navigator>
    );
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
