import React from 'react';
import { Text,View, ScrollView,TouchableOpacity} from 'react-native';
import {setUniqueId} from '../../utils/helper'
import SingleTimer from './SingleTimer';
const TimerList= ({timerList}) => {

  return (
     <ScrollView>
       {
           timerList.map((item )=>{
               return <SingleTimer key ={item.id } details={item} />
           })
       }
     </ScrollView>
  );
};



export default TimerList;
