
import { configureStore } from '@reduxjs/toolkit'
import timerReducer from "./features/timer.slice.js";

export const store = configureStore({
    reducer: {
      timer: timerReducer,
    },
  });
