import { combineReducers } from 'redux'

import { REDUCER_NAME as SearchBarReducerName, reducer as SearchBarReducer } from '../features/SearchBar'
import { REDUCER_NAME as ResultsReducerName, reducer as ResultsReducer } from '../features/Results'

export default combineReducers({
  [SearchBarReducerName]: SearchBarReducer,
  [ResultsReducerName]: ResultsReducer,
})
