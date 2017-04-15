import { compose, applyMiddleware, createStore } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'

import reducer from './rootReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // eslint-disable-line

const store = createStore(
  reducer,
  undefined,
  composeEnhancers(
    applyMiddleware(thunk),
    autoRehydrate(),
  ),
)

// begin periodically persisting the store
persistStore(store)

export default store
