import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './ducks'

const middleWares = []

// const sagaMonitor =
//   process.env.NODE_ENV === 'development'
//     ? console.tron.createSagaMonitor()
//     : null

const sagaMiddleware = createSagaMiddleware()

middleWares.push(sagaMiddleware)

// const createAppropriateStore =
//   process.env.NODE_ENV === 'development'
//     ? console.tron.createStore()
//     : createStore()

// const store = createAppropriateStore(
//   reducers,
//   compose(applyMiddleware(...middleWares))
// )

const store = createStore(reducers, applyMiddleware(...middleWares))

sagaMiddleware.run(sagas)

export default store
