import React from 'react';
import { Provider } from 'react-redux'
//import { Text, View } from 'react-native';

import store from './src/store/configureStore'
import AppSrc from './src/AppSrc.js'

class App extends React.Component {
  render() {
    return (
      //<View style={{flex: 1}}>
      //  <AppSrc />
      //</View>
      <Provider store={store}>
        <AppSrc />
      </Provider>
    )
  }
}

export default App
