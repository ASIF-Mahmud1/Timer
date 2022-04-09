import React from 'react';
import { Text, View, TouchableOpacity,ScrollView } from 'react-native';
import { useSelector } from 'react-redux'
import { addTimer } from '../stores/features/timer.slice'
import TimerList from '../component/timer/TimerList';
import AddTimer from '../component/timer/AddTimer';
const Timer = () => {
    const timerList = useSelector(state => state.timer.timerList)
    console.log("TimerList is ",timerList);

    return (
        <ScrollView contentContainerStyle= {{ alignItems: 'center' }}>
            <TimerList timerList={timerList} />
             <AddTimer /> 

        </ScrollView>


    );
};



export default Timer;
