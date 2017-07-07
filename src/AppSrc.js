import React from 'react'
import { StackNavigator } from 'react-navigation'

import Welcome from './components/Welcome'
import MainApp from './components/MainApp'
//import GameOver from './components/GameOver'

export default App = StackNavigator({
  Home: { screen: Welcome, },
  MainApp: { screen: MainApp, },
  //GameOver: { screen: GameOver, },
})
