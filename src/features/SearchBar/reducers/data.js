import { combineReducers } from 'redux'
import { actions } from '../constants'

export const initial = {
  results: {},
  query: '',
}

export function results(state = initial.results, { type, payload }) {
  switch (type) {
    case actions.data.SEARCH_SUCCESS:
      return {
        ...state,
        [payload.query]: payload.data,
      }
    case actions.data.SEARCH_FAILURE:
      return {
        ...state,
        [payload.query]: {
          error: true,
          message: payload.message,
        },
      }
    default:
      return state
  }
}

export function query(state = initial.query, { type, payload }) {
  switch (type) {
    case actions.data.SET_QUERY:
      return payload.query
    default:
      return state
  }
}

export default combineReducers({
  results,
  query,
})
