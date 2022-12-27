import React from 'react';
import { useState } from 'react';

import {COLORS, NFTData}  from '../../../constants';
import { View, SafeArea, FlatList, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FocusStatusbar from '../../FocusStatusbar';
import Homeheader from '../../Homeheader';
import NftCards from '../../nftCads';


const Home = () => {
  return (
    <>
     <SafeAreaView style={{flex:1}}>
         <FocusStatusbar backgroundColor={"black"} />
         <View style={{flex:1}}>
           <View style={{zIndex:0}}>
            <FlatList  data={NFTData}
               renderItem={({item})=> <NftCards data={item} />}
               keyExtractor={(item)=>item.id}
               showsVerticalScrollIndicator={false}
              ListHeaderComponent ={<Homeheader />}
            />
           </View>
        <View style={{
            position: "absolute", 
            top:0, 
            bottom:0,
            right:0, 
            left:0,
            zIndex:-1
        }}>
        <View style={{height:300, backgroundColor: COLORS.primary}}></View>
        <View style={{flex:1, backgroundColor:COLORS.white}}></View>
        </View>
         </View>
     </SafeAreaView>
    </>
  )
}

export default Home