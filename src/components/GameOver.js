import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class GameOver extends React.Component {
  static navigationOptions = {
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>GameOver</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default GameOver
