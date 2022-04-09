import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { createTimer, editTimer, deleteTimer } from '../../stores/features/timer.slice'
import {formatTime} from '../../utils/helper'
const  SingleTimer = ({ details }) => {
    const [values, setValues] = useState({
        ...details
    })

    const [count, setCount]= useState(0)
    const [intervalId, setIntervalId]= useState(0)

    const dispatch = useDispatch()

    const handleChange = (key, value) => {
        setValues({ ...values, [key]: value })
    }
    const handleEditTimer = () => {
        dispatch(createTimer({ ...values, created: true }))
    }

    const handleDeleteTimer = () => {
        dispatch(deleteTimer(values))
        removeSubsription()
    }

   const  handleClick = () => {
       if(intervalId)  // clear interval 
       {
         removeSubsription()
       }
       else   // crete setInterval
       {
        const newIntervalId = setInterval(() => {

            setCount((count)=> count+1)
        }, 1);

        setIntervalId(newIntervalId)

       }

    }

    const removeSubsription=()=>{
        clearInterval(intervalId);
        setIntervalId(0)
    }

    const hour= Math.floor(count/(60*60))
    const min= Math.floor((count/(60))%60)
    const sec= count%60


    return (
        <View>

            {
                details.created === false ?
                    <View>
                        <TextInput placeholder='Enter Title' value={values.title} onChangeText={(val) => { handleChange("title", val) }} />
                        <TextInput placeholder='Enter Project' value={values.project} onChangeText={(val) => { handleChange("project", val) }} />

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleEditTimer} style={{ width: 100, height: 50, borderColor: 'green', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Create
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleDeleteTimer} style={{ width: 100, height: 50, borderColor: 'red', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View>
                        <Text>Project: {details.project}</Text>
                        <Text>Title: {details.title}</Text>
                        <Text style={{textAlign:'center', fontSize:40, fontWeight:'bold'}} >{formatTime(hour)}:{formatTime(min)}:{formatTime(sec)}</Text>
                        <View style={{justifyContent:'center',borderWidth:2}}> 
                        <TouchableOpacity onPress={handleClick} style={{ width: "100%", height: 50, borderColor: 'blue', borderWidth: 2, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    { intervalId===0? "Start" : "Stop"}
                                </Text>
                            </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent:'center' }}>
                            
                            <TouchableOpacity onPress={handleDeleteTimer} style={{ width: 100, height: 50, borderColor: 'blue', borderWidth: 2, marginRight: 10, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 100, height: 50, borderColor: 'orange', borderWidth: 2, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </View>
            }



        </View>
    );
};

export default SingleTimer


