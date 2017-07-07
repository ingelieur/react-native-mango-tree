import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class MainApp extends React.Component {
  static navigationOptions = {
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>MainApp</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default MainApp
