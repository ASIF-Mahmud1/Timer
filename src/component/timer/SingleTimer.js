import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput,StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { createTimer, deleteTimer } from '../../stores/features/timer.slice'
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
        <View style={styles.container}>

            {
                (details.created === null || details.created ==='edit') ?
                    <View>
                        <View style={{flexDirection:'row',alignItems:'center' }}> 
                            <Text  style={{fontSize:18, fontWeight:'bold'}}>Project : </Text>
                            <TextInput  style={{fontSize:18}} placeholder='Enter Project' value={values.project} onChangeText={(val) => { handleChange("project", val) }} />
                        </View>
                        <View style={{flexDirection:'row',alignItems:'center' }}>  
                        <Text  style={{fontSize:18, fontWeight:'bold'}}>Title : </Text>
                        <TextInput style={{fontSize:18}} placeholder='Enter Title' value={values.title} onChangeText={(val) => { handleChange("title", val) }} />

                        </View>
                      
                        {
                            details.created===null && 
                            <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleCreateTimer} style={styles.create} >
                                <Text>
                                    Create
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleDeleteTimer} style={styles.cancel}>
                                <Text>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            </View>
                        }
                        

                        {
                            details.created==="edit" && 
                           
                            <View style={{ flexDirection: 'row',marginVertical:15 }}>
                            <TouchableOpacity onPress={handleCreateTimer} style={styles.update} >
                                <Text>
                                    Update
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={handleCancel} style={styles.cancel}>
                                <Text>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                            </View>
                        }

                      
                    </View>
                    :
                    <View>
                        <Text style={{fontSize:18, fontWeight:'bold'}} >Project: {details.project}</Text>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Title: {details.title}</Text>
                        <Text style={{textAlign:'center', fontSize:40, fontWeight:'bold'}} >{formatTime(hour)}:{formatTime(min)}:{formatTime(sec)}</Text>
                        <View style={{justifyContent:'center'}}> 
                   
                        <View style={{ flexDirection: 'row', justifyContent:'flex-end' ,width:300,marginVertical:15}}>
                            
                            <TouchableOpacity onPress={handleDeleteTimer} style={[styles.cancel,{marginHorizontal:0}]} >
                                <Text>
                                    Delete
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleEditTimer} style={[styles.create,{marginRight:0}]} >
                                <Text>
                                    Edit
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={handleClick} style={ intervalId===0? styles.start: styles.stop} >
                                <Text style={{   color: intervalId===0? 'green':'red', fontSize:18}}>
                                    { intervalId===0? "Start" : "Stop"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            }



        </View>
    );
};

const styles = StyleSheet.create({
   container:{marginVertical:20,padding:30,borderRadius:15, backgroundColor:'white'} ,
   create:{ width: 100, height: 50, borderColor: 'green', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center',borderRadius:20 }  ,
   cancel:{ width: 100, height: 50, borderColor: 'red', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center',borderRadius:20, }  ,
   update:{ width: 100, height: 50, borderColor: 'blue', borderWidth: 2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center',borderRadius:20, }  ,
   start:{ width: "100%", height: 50, borderColor:'green', borderWidth: 2, justifyContent: 'center', alignItems: 'center' , borderRadius:20,marginTop:20} ,
   stop:{ width: "100%", height: 50, borderColor:'red', borderWidth: 2, justifyContent: 'center', alignItems: 'center' , borderRadius:20,marginTop:20} 

})    

export default SingleTimer


