import { Platform } from 'react-native'
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import RootReducer from './reducers'

const middleware = applyMiddleware(thunk, promise, logger)

const Store = createStore(
  RootReducer,
  middleware
)

export default Store