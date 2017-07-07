const initialState = {
  name: '',
  age: 0,
  fruits: 0,
  stopGrowingAge: null,
  harvestAge: null,
  deadAge: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "AGE_TREE":
      let age = this.state.age + 1
      return {...state, age: age}
    default:
      return {...state}
  }
}
