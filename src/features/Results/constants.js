import { integerComp, stringComp, stringedDateComp } from '../../helpers/sort'

export const REDUCER_NAME = 'ResultsTable'

export const actions = {
  ui: {
    SWITCH_PAGE: 'ResultsTable/SWITCH_PAGE',

    SORT_BY: 'ResultsTable/SORT_BY',
  },
}

export const ORDERINGS = {
  ASC: 1,
  NONE: 0,
  DESC: 2,
}

export const columnSortFns = {
  id: integerComp('id'),
  name: stringComp('name'),
  owner: stringComp('owner'),
  stargazers_count: integerComp('stargazers_count'),
  created_at: stringedDateComp('created_at'),
}
