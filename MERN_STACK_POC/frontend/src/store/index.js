import {applyMiddleware, createStore} from 'redux'
import reducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import {personalsaga,projectsaga } from '../sagas'
const sagaMiddleware= createSagaMiddleware()
const store =createStore(
    reducer ,
    applyMiddleware(sagaMiddleware)
)

export default store
sagaMiddleware.run(personalsaga)
sagaMiddleware.run(projectsaga)