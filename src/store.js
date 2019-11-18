import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

//BELOW IS THE FUNCTION FOR LOCAL STORAGE JWT
const store = createStore(reducer, enhancer)

export default store