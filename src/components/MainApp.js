import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { ageTree, startTree } from '../actions'

class MainApp extends React.Component {
  static navigationOptions = {
    title: 'Main App'
  }

  constructor (props) {
    super(props)
    this.state = {
      age: props.tree.age,
      isHarvested: props.tree.age > props.tree.harvestAge && props.tree.age < props.tree.stopGrowingAge
    }
  }

  componentDidMount () {
    this.props.startTree()
  }

  emulate () {
    //this.props.ageTree()
  }

  render () {
    const tree = this.props.tree
    console.log('AGEEEEE', tree.age)
    if(tree.age === tree.deadAge - 1) {
      return (
        <View style={styles.container}>
          <Text>Hi {tree.personName}!</Text>
          <Text>Your tree is dying</Text>
          <Button
            onPress={() => this.emulate()}
            title="Emulate"
            color="#3CB371"
          >
          </Button>
        </View>
      )
    }
    else if(tree.age > tree.stopGrowingAge) {
      return (
        <View>
          <Text>Hi {tree.personName}!</Text>
          <Text>{tree.treeName} is growing old. He can't produce anymore.</Text>
        </View>
      )
    }
    else if(tree.age > tree.harvestAge) {
      return (
        <View>
          <Text>Hi {tree.personName}!</Text>
          <Text>Now you can harvest {tree.treeName}.</Text>
          <Text>Let's celebrate his {tree.age}th birthday!</Text>
        </View>
      )
    }
    else if(tree.age > tree.harvestAge - 1) {
      return (
        <View>
          <Text>Hi {tree.personName}!</Text>
          <Text>{tree.treeName} is getting older.</Text>
          <Text>She is now {tree.age} years old.</Text>
        </View>
      )
    }
    else if(tree.age > 0) {
      return (
        <View>
          <Text>Hi {tree.personName}!</Text>
          <Text>{tree.treeName} has grown.</Text>
          <Text>She is now {tree.age} years old.</Text>
        </View>
      )
    }
    else {
      return (
        <View>
          <Text>Hi {tree.personName}!</Text>
          <Text>This is {tree.treeName}.</Text>
          <Text>She is {tree.age} year old.</Text>
          <Button
            onPress={() => this.emulate()}
            title="Emulate"
            color="#3CB371"
          >
          </Button>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    tree: state.tree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ageTree: () => dispatch(ageTree()),
    startTree: () => dispatch(startTree()),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MainApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
