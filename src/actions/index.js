export const handlePersonName = (personName) => {
  return {
    type: "HANDLE_PERSON_NAME",
    payload: personName,
  }
}

export const handleTreeName = (treeName) => {
  return {
    type: "HANDLE_TREE_NAME",
    payload: treeName,
  }
}

export const startTree = () => {
  let deadAge = Math.floor((Math.random() * 3) + 15)
  let stopGrowingAge = deadAge - 3
  let harvestAge = Math.floor(deadAge/3 + 1)
  return({
    type: "START_TREE",
    payload: {deadAge, stopGrowingAge, harvestAge}
  })
}

export const ageTree = () => {
  return({
    type: "AGE_TREE",
  })
}


