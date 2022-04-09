
import { createSlice } from '@reduxjs/toolkit'

export const timerSlice = createSlice({  
  name: 'timer',
  initialState: {
    timerList:[]
  },
  reducers: {

    addTimer:  (state, action) => {
      console.log("slice");
    
       state.timerList =[...state.timerList,action.payload]  },
  }
})

export const { addTimer } = timerSlice.actions

export default timerSlice.reducer