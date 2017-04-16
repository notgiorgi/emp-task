import { combineReducers } from 'redux'

import { actions } from '../constants'

export const initial = 1

export function currentPage(state = initial, { type, payload }) {
  switch (type) {
    case actions.ui.SWITCH_PAGE:
      return payload.page
    default:
      return state
  }
}

export default combineReducers({
  currentPage,
})
