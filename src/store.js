import { createStore, applyMiddleware, compose } from 'redux'
// import reducer from './reducers'
import ReduxThunk from 'redux-thunk'
// import { loadState, saveState } from './localStorage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

// const persistedState = loadState()
const store = createStore( enhancer)

//BELOW IS THE FUNCTION FOR LOCAL STORAGE JWT

// store.subscribe(() => {
//   saveState({
//     user: store.getState().user
//   })
// })

export default store