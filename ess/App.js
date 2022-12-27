
import React from 'react';
import Node from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';

import Home from './Components/Aunthentication/Screens/Home';
import Details from './Components/Aunthentication/Screens/Details';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack=createStackNavigator();


const theme = {
  colors: {
    ...DefaultTheme.colors, 
    background: "transparent"
  }
}



const App= () => {



  return (
    <>
      <NavigationContainer theme={theme}>
        <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName="Home">
           <Stack.Screen name="Home" component={Home}/>

           <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
     </>
  );
};



export default App;
