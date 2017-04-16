import { combineReducers } from 'redux'

import { actions } from '../constants'

export const initial = {
  rowCount: 10,
  loading: {},
}

export function loading(state = initial.loading, { type, payload }) {
  switch (type) {
    case actions.data.SEARCH:
      return {
        ...state,
        [payload.query]: true,
      }
    case actions.data.SEARCH_SUCCESS:
    case actions.data.SEARCH_FAILURE:
      return {
        ...state,
        [payload.query]: false,
      }
    default:
      return state
  }
}

export function rowCount(state = initial.rowCount, { type, payload }) {
  switch (type) {
    case actions.ui.SET_ROW_COUNT:
      return payload.count
    default:
      return state
  }
}

export default combineReducers({
  loading,
  rowCount,
})
