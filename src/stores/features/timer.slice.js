
import { createSlice } from '@reduxjs/toolkit'
import {setUniqueId} from '../../utils/helper'
class Timer {
  constructor(title, project) {
    this.id= setUniqueId(),
    this.title = title;
    this.project= project
    this.time = 0;
    this.isRunning = false;
  }
}
export const timerSlice = createSlice({  
  name: 'timer',
  initialState: {
    timerList:[]
  },
  reducers: {
    addTimer:  (state, action) => {
      console.log("slice",action.payload);
      state.timerList = [...state.timerList, new Timer(action.payload.title, action.payload.project )]
    },
    editTimer: (state,action) =>{
    //  console.log(action.payload);
      let duplicate= state.timerList.map((item)=>{
        if(item.id===action.payload.id)
        {
             return {
               ...action.payload
             }
        }
        else 
        {
          return item
        }
      })
     
    //  const timer= [...state.timerList.splice((item)=>item.id= action.payload.id )]
      state.timerList= [... duplicate]
    }
  }
})

export const { addTimer, editTimer } = timerSlice.actions

export default timerSlice.reducer