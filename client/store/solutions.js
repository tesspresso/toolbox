import axios from 'axios'

// action strings
const GOT_SOLUTIONS = 'GOT_SOLUTIONS'
const GOT_SINGLE_SOLUTION = 'GOT_SINGLE_SOLUTION'
const ADDED_SOLUTION = 'ADDED_SOLUTION'

// action types
const gotSolutions = solutions => {
  return {
    type: GOT_SOLUTIONS,
    solutions
  }
}

const gotUpdatedSolution = solution => {
  return {
    type: GOT_SINGLE_SOLUTION,
    solution
  }
}

const addedSolution = solution => {
  return {
    type: ADDED_SOLUTION,
    solution
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

export const updateLikeCount = (type, sympId, solId, likeCount) => {
  return async dispatch => {
    try {
      const {data: solution} = await axios.put(
        `/api/symptoms/${type}/${sympId}`,
        {solId, likeCount}
      )
      dispatch(gotUpdatedSolution(solution))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addNewSolution = (type, sympId, name, description) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/symptoms/${type}/${sympId}`, {
        name,
        description
      })
      dispatch(addedSolution(data))
    } catch (error) {
      console.error(error)
    }
  }
}

const solutions = (state = [], action) => {
  switch (action.type) {
    case GOT_SOLUTIONS: {
      return action.solutions
    }
    case GOT_SINGLE_SOLUTION: {
      const newState = [...state].filter(sol => sol.id !== action.solution.id)
      newState.push(action.solution)
      return newState
    }
    case ADDED_SOLUTION:
      return [...state, action.solution]
    default: {
      return state
    }
  }
}

export default solutions
