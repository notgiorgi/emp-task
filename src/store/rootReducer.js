import { combineReducers } from 'redux'

import { REDUCER_NAME as SearchBarReducerName, reducer as SearchBarReducer } from '../features/SearchBar'

export default combineReducers({
  [SearchBarReducerName]: SearchBarReducer,
})
