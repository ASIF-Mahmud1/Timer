import React from 'react';
import { Text,View, } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/stores/store'
import Timer  from './src/container/Timer';

const App= () => {
  return (
    <Provider store={store}>
       <Timer />
    </Provider>
  );
};



export default App;
