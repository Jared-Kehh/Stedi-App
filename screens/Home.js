import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView,  View, ScrollView, Linking} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import quotes from '../data/quote.json';
import { Card, CardTitle, CardContent} from 'react-native-material-cards';
import { LineChart} from 'react-native-chart-kit';



const Home = (props) => {
  const token = useRef("");
  const [score, setScore] = useState(0);
  useEffect(()=>{ todayScore();},[]);

//today score
const todayScore = async() =>{
  let scoreObject ={};
  try{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "rom19010@byui.edu",
    password:"Patricia2596@"
  })
});

 token.current = await tokenResponse.text();
    const scoreResponse = await fetch('https://dev.stedi.me/riskscore/rom19010@byui.edu',{
    method:'GET',
    headers:{
      'Content-Type': 'application/json',
     'suresteps.session.token': token.current
    }
  })
  console.log('token:', token.current);
  scoreObject = await scoreResponse.json();
  setScore(scoreObject.score);
  console.log(scoreObject.score);
  }catch(error){
    console.log('error', error);
   }
}

//Weekly average time

//monthly average time

// color
let backgroundColors = ['#0c5d8f', '#e7a740', '#e63653', '#6554a3', '#6bcad0', '#e17f93', '#fee227'];
let colors = ['#b4cfec', '#f7dcb0', '#fa96a6', '#b0a0eb', '#adecf0','#ffe6ee','#fcf4a3'];

var day =new Date();

const backgroundColorsToday = backgroundColors[day.getDay()];
const colorsToday = colors[day.getDay()];

  //date
  const date = new Date();   
  const time = date.getTime(); // the timestamp, not neccessarely using UTC as current time
  const julian_day = Math.floor((time / 86400000) - (date.getTimezoneOffset()/1440) + 2440587.5);
  const dayQuoteIndex = julian_day - 2459778;
  const quote = quotes[dayQuoteIndex].text;
  const author = quotes[dayQuoteIndex].author;


  return (
    <ScrollView>
    <SafeAreaView style={{alignItems:'center'}}>
      <View style={{width:'90%', backgroundColor:backgroundColorsToday, borderRadius:20, padding:20, marginTop:15 }}>
      <FontAwesome5 name="quote-left" style={{fontSize:30, marginBottom:1, color:colorsToday}}/>
      <Text style={{fontSize:16, lineHeight:26, color:'white' ,textAlign:'center',fontWeight:'400', marginBottom:10, letterSpacing:1.1, paddingHorizontal:27}}>{quote}</Text>
      <Text style={{textAlign:'right', fontStyle:'italic', fontSize:13, fontWeight:'300', color:colorsToday}}>― {author}</Text>
      </View> 
      <Text style={{marginTop:12, fontSize:20, marginRight:230, color:'#B4B4B4'}}>Activity</Text>
      <View style={{ flexDirection:'row', flexWrap: 'wrap', paddingLeft:15, paddingRight:15 }}> 
      <Card style={{width:'50%',borderRadius:20, marginTop:10, shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle   titleStyle={{fontSize:17}}
        title='Today'
       />
       <Text style={{fontSize:35,fontWeight:'bold', color:'black'}}>{score}</Text>
        <FontAwesome5 name="arrow-down"/>
        <CardContent>
        </CardContent>
      </Card>
      <Card style={{ width:'50%', height:'135%', borderRadius:20, marginTop:10,shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle  titleStyle={{fontSize:17}}
        subtitleStyle={{fontSize:35,fontWeight:'bold', color:'black'}}
        title='Weekly'
        subtitle={20}
       />
        <CardContent>
        </CardContent>
      </Card>
      </View>
      <View style={{ flexDirection:'row', paddingLeft:15, paddingRight:15 }}>
      <Card style={{ width:'-10%',height:'70%', borderRadius:20, marginTop:85,shadowColor: "#000",shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4}}>
        <CardTitle  
         titleStyle={{fontSize:17}}
         subtitleStyle={{fontSize:35,fontWeight:'bold', color:'black'}}
         subtitle={20}
        title='Monthly'

        //average score
       />
        <CardContent style={{paddingLeft:5}}> 
        <LineChart 
    data={{
      labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
      datasets: [
        {
          data:[3615, 1165, 756, 309, 200, 172, 166, 171, 166, 172, 171, 186, 172, 180, 165, 179, 192, 172, 178, 173]
        }
      ]
    }}
    width={270} // from react-native
    height={150}
    yAxisSuffix="ms"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#f4f4f4",
      backgroundGradientFrom: "#fb8c00",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
    />
        </CardContent>
      </Card>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container:{


  }
});

