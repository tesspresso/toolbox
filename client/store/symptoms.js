import axios from 'axios'

// action strings
const GOT_SYMPTOMS = 'GOT_SYMPTOMS'
const ADDED_SYMPTOM = 'ADDED_SYMPTOM'

// action types
const gotSymptoms = (symptoms) => {
  return {
    type: GOT_SYMPTOMS,
    symptoms
  }
}

const addedSymptom = (symptom) => {
  return {
    type: ADDED_SYMPTOM,
    symptom
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

export const addNewSymptom = (type, symptom) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/symptoms/${type}/`, {type, symptom})
      dispatch(addedSymptom(data))
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
    case ADDED_SYMPTOM:
      return [...state, action.symptom];
    default: {
      return state
    }
  }
}

export default symptoms
