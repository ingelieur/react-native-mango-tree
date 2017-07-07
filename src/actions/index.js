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

export const ageTree = () => {
  dispatch({
    type: "AGE_TREE",
  })
}


