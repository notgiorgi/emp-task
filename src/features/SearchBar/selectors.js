import { createSelector } from 'reselect'

import { REDUCER_NAME } from './constants'

export const getRowCount = state => state[REDUCER_NAME].ui.rowCount

export const getLoadingState = (state, { query }) => Boolean(state[REDUCER_NAME].ui.loading[query])

export const getQuery = state => state[REDUCER_NAME].data.query

export const getQueryData = (state, { query }) => state[REDUCER_NAME].data.results[query]

export const isLoadingOrExists = createSelector(
  getLoadingState,
  getQueryData,
  (isLoading, data) => isLoading || (data && !data.error),
)
