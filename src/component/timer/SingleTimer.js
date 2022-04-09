import React, {useState} from 'react';
import { Text,View, ScrollView,TouchableOpacity, TextInput} from 'react-native';

const SingleTimer= ({details}) => {
  const [values, setValues]=useState({
    title: details.title,
    project:details.project
})

  const handleChange=(key,value)=>{
    setValues({...values, [key]: value})
  }
  return (
     <View>
       <TextInput placeholder='Enter Title' value= {values.title}  onChangeText={(val)=>{ handleChange("title", val)}} />
       <TextInput  placeholder='Enter Project' value= {values.project}  onChangeText={(val)=>{ handleChange("project", val)}} />
     </View>
  );
};



export default SingleTimer;
