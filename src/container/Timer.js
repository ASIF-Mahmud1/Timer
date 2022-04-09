import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux'
import { addTimer } from '../stores/features/timer.slice'
import TimerList from '../component/timer/TimerList';

const Timer = () => {
    const timerList = useSelector(state => state.timer.timerList)
    console.log(timerList);
    const handleAddTimer = () => {
        console.log();
    }
    return (
        <View style={{ alignItems: 'center' }}>
            <TimerList timerList={timerList} />

            <TouchableOpacity onPress={handleAddTimer} style={{borderColor:'crimson', borderWidth:2,width:100,height:50, alignItems:'center', justifyContent:'center' , borderRadius:15 }}>
                <Text style={{fontSize:30}} >+</Text>
            </TouchableOpacity>
        </View>


    );
};



export default Timer;
