// import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import thunk from 'redux-thunk'
// import rootReducer from '../reducer'

// export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

import { legacy_createStore as createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducer'
import thunk from 'redux-thunk'


// const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store