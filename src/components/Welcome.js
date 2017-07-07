import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { handlePersonName, handleTreeName } from '../actions'

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  render () {
    return (
      <View>
        <Text>Welcome!</Text>
        <TextInput
        value="YourName">
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default Welcome
