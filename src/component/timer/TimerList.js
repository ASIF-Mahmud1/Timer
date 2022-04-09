import React from 'react';
import { Text,View, ScrollView,TouchableOpacity} from 'react-native';
import {setUniqueId} from '../../utils/helper'
const TimerList= ({timerList}) => {

  return (
     <ScrollView>
       {
           timerList.map((item )=>{
               return <Text key={setUniqueId()}>Goody</Text>
           })
       }
     </ScrollView>
  );
};



export default TimerList;
