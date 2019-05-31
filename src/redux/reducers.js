// Import Middleware e Redux
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import InitialState
import { initialState } from './store';

// Import Tipos de Actions
import { actionTypes } from './actions';

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADER_STATUS:
      return Object.assign({}, state, {
        loaderStatus: true,
        formStatus: false,
        imageStatus: false,
      })
    case actionTypes.SHOW_QRCODE:
      return Object.assign({}, state, {
        loaderStatus: false,
        imageStatus: true,
        imageUrl: action.imageUrl,
      })
    default:
      return state
  }
}

// Inicializa a Store
export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}