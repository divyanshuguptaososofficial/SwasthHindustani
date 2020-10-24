import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AboutusScreen = () => {
    return (
      <View style={styles.container}>
        <Text>About us Screen</Text>
        <Button
          title="Click Here"
          color= '#000000'
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default AboutusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});