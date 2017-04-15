import { Github } from '../../WebAPI'
import { actions } from './constants'
import { createAction } from '../../helpers'

export const setRowCount = count => createAction(
  actions.ui.SET_ROW_COUNT,
  { count },
)

export const startSearch = query => createAction(
  actions.data.SEARCH,
  { query },
)

export const searchSuccess = (query, response) => createAction(
  actions.data.SEARCH_SUCCESS,
  { query, ...response },
)

export const searchFailure = (query, response) => createAction(
  actions.data.SEARCH_FAILURE,
  { query, ...response },
)

export const setQuery = query => createAction(
  actions.data.SET_QUERY,
  { query },
)

export const fetchQueryData = query => async (dispatch) => {
  dispatch(startSearch(query))
  try {
    const response = await Github.respository.search(query)
    dispatch(searchSuccess(query, response))
  } catch (e) {
    dispatch(searchFailure(query, e))
  }
}
