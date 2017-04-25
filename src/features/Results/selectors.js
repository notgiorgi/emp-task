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
  getSortColumn,
  getSortOrder,
  getSortFn,
  (rows, sortCol, sortOrder, sortFn) => {
    if (!sortCol) return rows

    const rowsCopy = [...rows]
    switch (sortOrder) {
      case ORDERINGS.ASC:
        return rowsCopy.sort(sortFn)
      case ORDERINGS.DESC:
        return rowsCopy.sort(reverseCompareFn(sortFn))
      default:
        return rows
    }
  },
)
