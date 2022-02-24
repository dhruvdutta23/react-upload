import { applyMiddleware, combineReducers ,createStore} from "redux"
import  reducer from "./reducers"
import reduxthunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import ap2 from './sagas'
const sagaMiddleware=createSagaMiddleware()
const combinedReducers= combineReducers(
    {
        reducer
    }
)

export const store=createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware, reduxthunk)
)

sagaMiddleware.run((ap2))
