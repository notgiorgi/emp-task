import { createSelector } from 'reselect'

import { reverseCompareFn } from '../../helpers/sort'
import { REDUCER_NAME, ORDERINGS, columnSortFns } from './constants'

import { selectors } from '../SearchBar'

export const getCurrentPage = state => state[REDUCER_NAME].ui.currentPage

export const getRows = createSelector(
  selectors.getCurrentQueryData,
  getCurrentPage,
  selectors.getRowCount,
  (data, currentPage, rowCount) =>
    data.items
      .slice(
        (rowCount * currentPage) - rowCount,
        rowCount * currentPage,
      ),
)

export const getSortColumn = state => state[REDUCER_NAME].ui.sort.column
export const getSortOrder = state => state[REDUCER_NAME].ui.sort.order

export const getSortFn = createSelector(
  getSortColumn,
  column => columnSortFns[column],
)

export const getSortedRows = createSelector(
  getRows,
  getSortOrder,
  getSortFn,
  (rows, order, sortFn) => {
    switch (order) {
      case ORDERINGS.ASC:
        return rows.sort(sortFn)
      case ORDERINGS.DESC:
        return rows.sort(reverseCompareFn(sortFn))
      default:
        return rows
    }
  },
)
