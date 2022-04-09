import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { addTimer } from '../../stores/features/timer.slice'
import SingleTimer from './SingleTimer';
const AddTimer = () => {
    const timerList = useSelector(state => state.timer.timerList)
    const dispatch = useDispatch()

    //console.log(timerList);
    const handleAddTimer = () => {
       
        let temp ={
            title:'', project:''
        }
        dispatch(addTimer(temp))
      // 
    }
    return (

            <TouchableOpacity onPress={handleAddTimer} style={{marginTop:40, borderColor:'crimson', borderWidth:2,width:100,height:50, alignItems:'center', justifyContent:'center' , borderRadius:15 }}>
                <Text style={{fontSize:30}} >+</Text>
            </TouchableOpacity>

    );
};



export default AddTimer;
