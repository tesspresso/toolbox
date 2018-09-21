import axios from 'axios'

// action strings
const GOT_SYMPTOMS = 'GOT_SYMPTOMS'

// action types
const gotSymptoms = (symptoms) => {
  return {
    type: GOT_SYMPTOMS,
    symptoms
  }
}

//thunks
export const fetchSymptomsFromDB = (type) => {
  return async dispatch => {
    try {
      const {data: symptoms} = await axios.get(`/api/symptoms/${type}`)
      dispatch(gotSymptoms(symptoms))
    } catch (error) {
      console.error(error)
    }
  }
}

const symptoms = (state = [], action) => {
  switch (action.type) {
    case GOT_SYMPTOMS: {
      return action.symptoms
    }
    default: {
      return state
    }
  }
}

export default symptoms
