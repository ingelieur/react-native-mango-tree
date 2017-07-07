import React from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux'

import { handlePersonName, handleTreeName, startTree } from '../actions'

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  constructor (props) {
    super(props)
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <TextInput
          onChangeText={(text) => this.props.handlePersonName({text})}
          value={this.props.personName}
        >
        </TextInput>
        <TextInput
          onChangeText={(text) => this.props.handleTreeName({text})}
          value={this.props.treeName}
        >
        </TextInput>
        <Button
          onPress={() => navigate('MainApp')}
          title="Start"
          color="#3CB371"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let tree = state.tree
  return {
    personName: tree.personName,
    treeName: tree.treeName,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlePersonName: () => dispatch(handlePersonName()),
    handleTreeName: () => dispatch(handleTreeName()),
    startTree: () => dispatch(startTree()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
