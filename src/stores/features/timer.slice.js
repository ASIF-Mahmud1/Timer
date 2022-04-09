
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
  }
})

export const { addTimer } = timerSlice.actions

export default timerSlice.reducer