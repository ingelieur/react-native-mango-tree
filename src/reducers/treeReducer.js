const initialState = {
  personName: 'Your name',
  treeName: 'Give your tree a name',
  age: 0,
  fruits: 0,
  harvestAge: null,
  stopGrowingAge: null,
  deadAge: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_PERSON_NAME":
      return {...state, personName: action.payload}
    case "HANDLE_TREE_NAME":
      return {...state, treeName: action.payload}
    case "START_TREE":
      return {...state, harvestAge: 4, stopGrowingAge: 10, deadAge: 13}
    case "AGE_TREE":
      let age = this.state.age + 1
      return {...state, age: age}
    default:
      return {...state}
  }
}
