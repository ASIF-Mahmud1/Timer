import React from 'react';
import { Text,View, } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './src/stores/store'

// import { useSelector } from 'react-redux'
// import { addTimer} from './src/stores/features/timer.slice'
// const timerList = useSelector(state => {return } )
//  console.log(useSelector);



const App= () => {
  return (
    <Provider store={store}>
    <View>
      <Text>Good</Text>
    </View>
    </Provider>
  );
};



export default App;
