import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import AppName from "./AppName";



const  openMenu = ()=>{

}

function Bar() {
    return(
        <View style={styles.bar}>
          <AppName />
        </View>
    )
  }

export default Bar

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        backgroundColor: '#A0CE4E',
        height: '40%',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        // marginBottom:20
      },
      icon:{
        marginBottom:5,
      }

})