import React, {useState} from 'react';
import { Text,View, ScrollView,TouchableOpacity, TextInput} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { editTimer } from '../../stores/features/timer.slice'

const SingleTimer= ({details}) => {
  const [values, setValues]=useState({
   ...details
})
const dispatch = useDispatch()

  const handleChange=(key,value)=>{
    setValues({...values, [key]: value})
  }
  const handleEditTimer=()=>{
   dispatch(editTimer(values))
  }
  return (
     <View>
       <TextInput placeholder='Enter Title' value= {values.title}  onChangeText={(val)=>{ handleChange("title", val)}} />
       <TextInput  placeholder='Enter Project' value= {values.project}  onChangeText={(val)=>{ handleChange("project", val)}} />
       <TouchableOpacity onPress={handleEditTimer} style={{width:100, height:50, borderColor:'green', borderWidth:2}} >
           <Text>
               Create
           </Text>
       </TouchableOpacity>

       <TouchableOpacity>
           <Text>
               Cancel
           </Text>
       </TouchableOpacity>
     </View>
  );
};



export default SingleTimer;
