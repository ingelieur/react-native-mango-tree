import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Welcome extends React.Component {
  static navigationOptions = {
  }

  redir () {
    return (
      <View styles={styles.container}>
        <Text>Welcome</Text>
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
