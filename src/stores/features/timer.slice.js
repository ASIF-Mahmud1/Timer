
import { createSlice } from '@reduxjs/toolkit'
import {setUniqueId} from '../../utils/helper'
class Timer {
  constructor(title, project) {
    this.id= setUniqueId(),
    this.title = title;
    this.project= project
    this.time = 0;
    this.isRunning = false;
    this.created=null
  }
}
export const timerSlice = createSlice({  
  name: 'timer',
  initialState: {
    timerList:[]
  },
  reducers: {
    addTimer:  (state, action) => {
   
      state.timerList = [...state.timerList, new Timer(action.payload.title, action.payload.project )]
    },


    createTimer: (state,action) =>{
      
      console.log(action.payload.created);
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
       
        state.timerList= [... duplicate]
      },

    deleteTimer: (state,action) =>{
 
        let duplicate= state.timerList.filter((item)=>{ return item.id !== action.payload.id })
       
        state.timerList= [... duplicate]
      },
    
  }
})

export const { addTimer,createTimer ,deleteTimer} = timerSlice.actions

export default timerSlice.reducer