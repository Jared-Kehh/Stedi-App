import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import {FontAwesome5} from '@expo/vector-icons';
import{ Ionicons} from '@expo/vector-icons';



import Help from '../screens/Help';
import Counter from '../screens/Counter';
import About from '../screens/About';
import Home from '../screens/Home';
import Profile from '../screens/Profile';


//Stack Navigator 


const Stack = createNativeStackNavigator();

const HomeStackScreen = (props) =>{

    return(
    

     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white',
      }}
     >
        <Stack.Screen name="Home" component={Home} options={{
             headerTitleAlign: "center",
             headerTitleStyle:{
              fontWeight:'bold', 
              fontSize:22
             }
         }}>
        </Stack.Screen>
     </Stack.Navigator>

    );
}


const CounterStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}
     >
        <Stack.Screen name="Counter" component={Counter} options={{
             headerTitleAlign: "center",
             headerTitleStyle:{
               fontWeight:'bold', 
               fontSize:22
              }
              }}>
        </Stack.Screen>
     </Stack.Navigator>
    );
}

const ProfileStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}>

        <Stack.Screen name="Profile" component={Profile} options={{
             headerTitleAlign: "center",
             headerTitleStyle:{
               fontWeight:'bold', 
               fontSize:22
              }
             }} >
        </Stack.Screen>
     </Stack.Navigator>
    );
}


const AboutStackScreen = () =>{
    return(
     <Stack.Navigator
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white'}}
     >
        <Stack.Screen name="About" component={About} options={{
             headerTitleAlign: "center",
             headerTitleStyle:{
               fontWeight:'bold', 
               fontSize:22
              }
             }}>
        </Stack.Screen>
     </Stack.Navigator>
    );
}


const helpStackScreen = () =>{
    return(
     <Stack.Navigator
     
     screenOptions= {{
        headerStyle:{backgroundColor:'#A0CE4E'},
        headerTintColor:'white',  }}
     >
        <Stack.Screen name="Help" component={Help} options={{
             headerTitleAlign: "center",
             headerTitleStyle:{
               fontWeight:'bold', 
               fontSize:22
              }
            }}
             >
        </Stack.Screen>
     </Stack.Navigator>
    );
}



//Tab Navigator

const Tab = createMaterialBottomTabNavigator();

export default function Navigation (props) {
    return(
  
        <NavigationContainer>
        <Tab.Navigator
        initialRouteName='Home'
        activeColor='#A0CE4E'
        screenOptions={{
            showLabel: 'false',
            activeTintColor: 'Black',

        }}
        
         barStyle={{ backgroundColor: 'white',
        
         }}>
             
            <Tab.Screen  name="TabHome"
            // component={HomeStackScreen} 
            children={()=><HomeStackScreen homeTodayScore={props.homeTodayScore}/>}
            options={{
               // tabBarColor:'pink',
                  tabBarLabel: 'Home',
                  
                tabBarIcon: ({ color }) => (
                 <Ionicons name='home-sharp' color={color} size={28} style={{ width: 30,  height: 30, marginTop: -3 }} />
                 ),
                 }}
            />
            <Tab.Screen name="TabCounter" 
            // component={counterStackScreen}
            children={()=><CounterStackScreen setHomeTodayScore={props.setHomeTodayScore}/>}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Counter',
                 tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name='gauge' color={color} size={28} style={{ width: 30,  height: 30, marginTop: -3 }} />
                  ),
                  }}
            />
            <Tab.Screen name="TabProfile" 
            component={ProfileStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Profile',
                 tabBarIcon: ({ color }) => (
                  <FontAwesome5 name='user-alt' color={color} size={28}  style={{ width: 30,  height: 30, marginTop: -3 }}/>
                  ),
                  }}
            />
            <Tab.Screen name="TabAbout" 
            component={AboutStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'About',
                 tabBarIcon: ({ color }) => (
                  <Ionicons name='md-information-circle-sharp' color={color} size={30} style={{ width: 30,  height: 30, marginTop: -3}}/>
                  ),
                  }}
            />
            <Tab.Screen name="TabHelp" 
            component={helpStackScreen}
            options={{
                // tabBarColor:'pink',
                   tabBarLabel: 'Help',
                 tabBarIcon: ({ color }) => (
                  <Ionicons name='help-circle' color={color} size={32} style={{ width: 30, height: 30, marginTop: -5 }} />
                  ),
                  }}
            />
        </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  
 
});
