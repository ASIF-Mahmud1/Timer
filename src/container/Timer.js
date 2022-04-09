import React from 'react';
import { Text,View, } from 'react-native';
import { useSelector } from 'react-redux'
import { addTimer} from '../stores/features/timer.slice'


const Timer= () => {
 const timerList = useSelector(state =>  state.timer.timerList)
 console.log(timerList);
  return (
    <View>
      <Text>Good</Text>
    </View>
  
  );
};



export default Timer;
