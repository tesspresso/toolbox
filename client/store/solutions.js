import axios from 'axios'

// action strings
const GOT_SOLUTIONS = 'GOT_SOLUTIONS'

// action types
const gotSolutions = (solutions) => {
  return {
    type: GOT_SOLUTIONS,
    solutions
  }
}

//thunks
export const fetchSolutionsFromDB = (type, id) => {
  return async dispatch => {
    try {
      const {data: solutions} = await axios.get(`/api/symptoms/${type}/${id}`)
      dispatch(gotSolutions(solutions))
    } catch (error) {
      console.error(error)
    }
  }
}

const solutions = (state = [], action) => {
  switch(action.type) {
    case GOT_SOLUTIONS: {
      return action.solutions
    }
    default: {
      return state
    }
  }
}

export default solutions
