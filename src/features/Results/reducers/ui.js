import { combineReducers } from 'redux'

import { actions, ORDERINGS } from '../constants'

export const initial = {
  currentPage: 1,
  sort: {
    column: '',
    order: ORDERINGS.NONE,
  },
}

export function currentPage(state = initial.currentPage, { type, payload }) {
  switch (type) {
    case actions.ui.SWITCH_PAGE:
      return payload.page
    default:
      return state
  }
}

export function sort(state = initial, { type, payload }) {
  switch (type) {
    case actions.COLUMN_BY: {
      if (state.column !== payload.column) {
        return {
          column: payload.column,
          order: ORDERINGS.ASC,
        }
      }

      return {
        column: payload.column,
        order: (state.order + 1) % 3,
      }
    }
    default:
      return state
  }
}

export default combineReducers({
  currentPage,
  sort,
})
