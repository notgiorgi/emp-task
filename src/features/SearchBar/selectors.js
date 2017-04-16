import { createSelector } from 'reselect'

import { REDUCER_NAME } from './constants'

export const getRowCount = state => state[REDUCER_NAME].ui.rowCount

export const getQuery = state => state[REDUCER_NAME].data.query

export const getLoadingState = (state, { query }) => Boolean(state[REDUCER_NAME].ui.loading[query])

export const getCurrentLoadingState = state => getLoadingState(
  state,
  { query: getQuery(state) },
)

export const getQueryData = (state, { query }) => state[REDUCER_NAME].data.results[query]

export const getCurrentQueryData = state => getQueryData(
  state,
  { query: getQuery(state) },
)

export const isLoadingOrExists = createSelector(
  getLoadingState,
  getQueryData,
  (isLoading, data) => isLoading || (data && !data.error),
)

export default {
  getRowCount,
  getLoadingState,
  getCurrentLoadingState,
  getQuery,
  getQueryData,
  getCurrentQueryData,
  isLoadingOrExists,
}
