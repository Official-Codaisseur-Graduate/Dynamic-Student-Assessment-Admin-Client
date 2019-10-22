const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(ReduxThunk)
)

const persistedState = loadState()
const store = createStore(reducer, persistedState, enhancer)

//BELOW IS THE FUNCTION FOR LOCAL STORAGE JWT

// store.subscribe(() => {
//   saveState({
//     user: store.getState().user
//   })
// })

export default store