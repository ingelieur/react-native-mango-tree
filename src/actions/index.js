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
  return({
    type: "START_TREE",
  })
}

export const ageTree = () => {
  return({
    type: "AGE_TREE",
  })
}


