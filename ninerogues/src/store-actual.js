import { applyMiddleware } from 'redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {};

const middleware = [thunk];

const reducer = combineReducers({
  reducers: rootReducer
})

const store = configureStore({
  reducer
},
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store