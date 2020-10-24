import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
const NotificationsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Notification Screen</Text>
       
        <Button
            title="Go to home"
            color= '#000000'
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go back"
            color= '#000000'
            onPress={() => navigation.goBack()}
        />
      </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});