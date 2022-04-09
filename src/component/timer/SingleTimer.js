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
    const handleCreateTimer = () => {
        console.log(values);
        dispatch(createTimer({ ...values, created: 'create' }))
    }

    // const handleUpdateTimer = () => {
       
    //     dispatch(createTimer({ ...values, created: 'create' }))
    //     handleClick()
    // }

    const handleEditTimer = () => {
     
        dispatch(createTimer({ ...values, created: 'edit' }))
        removeSubsription()
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
        }, 1000);

        setIntervalId(newIntervalId)

       }

    }

    const removeSubsription=()=>{
        clearInterval(intervalId);
        setIntervalId(0)
    }


    const handleCancel=()=>{
        dispatch(createTimer({ ...details, created: 'created' }))
    }

    const hour= Math.floor(count/(60*60))
    const min= Math.floor((count/(60))%60)
    const sec= count%60


    return (
        <View style={{marginVertical:20,padding:30,borderRadius:15, backgroundColor:'white'}}>

            {
                (details.created === null || details.created ==='edit') ?
                    <View>
                        <TextInput placeholder='Enter Title' value={values.title} onChangeText={(val) => { handleChange("title", val) }} />
                        <TextInput placeholder='Enter Project' value={values.project} onChangeText={(val) => { handleChange("project", val) }} />
                      
                        {
                            details.created===null && 
                            <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleCreateTimer} style={{ width: 100, height: 50, borderColor: 'green', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }} >
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
                        }
                        

                        {
                            details.created==="edit" && 
                           
                            <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleCreateTimer} style={{ width: 100, height: 50, borderColor: 'green', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Update
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleCancel} style={{ width: 100, height: 50, borderColor: 'red', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            </View>
                        }

                      
                    </View>
                    :
                    <View>
                        <Text>Project: {details.project}</Text>
                        <Text>Title: {details.title}</Text>
                        <Text style={{textAlign:'center', fontSize:40, fontWeight:'bold'}} >{formatTime(hour)}:{formatTime(min)}:{formatTime(sec)}</Text>
                        <View style={{justifyContent:'center',borderWidth:2}}> 
                   
                        <View style={{ flexDirection: 'row', justifyContent:'flex-end' ,width:300}}>
                            
                            <TouchableOpacity onPress={handleDeleteTimer} style={{ width: 100, height: 50, borderColor: 'blue', borderWidth: 2, marginRight: 0, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleEditTimer} style={{ width: 100, height: 50, borderColor: 'orange', borderWidth: 2, marginLeft: 0, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleClick} style={{ width: "100%", height: 50, borderColor: 'blue', borderWidth: 2, justifyContent: 'center', alignItems: 'center' }} >
                                <Text>
                                    { intervalId===0? "Start" : "Stop"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }



        </View>
    );
};

export default SingleTimer


