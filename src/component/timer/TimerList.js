import React from 'react';
import { Text,View, ScrollView,TouchableOpacity} from 'react-native';

const TimerList= ({timerList}) => {

  return (
     <ScrollView>
       {
           timerList.map((item)=>{
               return <Text>Goody</Text>
           })
       }
     </ScrollView>
  );
};



export default TimerList;
