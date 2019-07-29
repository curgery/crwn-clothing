import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
<<<<<<< HEAD
import createSagaMiddleware from 'redux-saga';
=======
import thunk from 'redux-thunk';
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132

// import rootSaga from './root-saga';
import rootReducer from './root-reducer';
import rootSaga  from './root-saga';

const sagaMiddleware = createSagaMiddleware();

<<<<<<< HEAD

const middlewares = [sagaMiddleware];
=======
const middlewares = [thunk];
>>>>>>> 2bf3feee947c93878e5953e04695ccc91034a132

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);


export default { store, persistor };