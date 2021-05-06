import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StatusBar, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RoutesStack from './src/pages/Stacks/RoutesStack';
//import Picker from '.src/picker';
//import { render } from 'react-dom';
import RoutesDrawer from './src/pages/Stacks/RoutesDrawer';

import Menu from './src/pages/Menu'

export default () => {

  return (
    
    <NavigationContainer>
    <StatusBar hidden={true}/>
    <RoutesStack />
    </NavigationContainer>

    
    
  
  ) 
}


//<Picker />

/*),
    <ScrollView style={{width:'100%'}}
    >
      
    </ScrollView>*/