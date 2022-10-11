import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import logo from './image/logo.png';

function AppName() {
    return (
      <View style={styles.appName}>
        <Image
         style={{ width:240, height: 40 }}
          source={logo}/>
      </View>
    );
  }

export default AppName

const styles = StyleSheet.create({
  appName: {
    paddingLeft:10,
    position: 'absolute',
    left: 50,
    // top: 65,
    // paddingTop:30
  },
 
})