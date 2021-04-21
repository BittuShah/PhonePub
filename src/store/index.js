import {applyMiddleware, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import reduxReset from 'redux-reset';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import {rootSaga} from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger({predicate: () => __DEV__});

function configureStore(initialState) {
  const middleWare = compose(
    applyMiddleware(loggerMiddleware, sagaMiddleware),
    reduxReset(),
  );
  return createStore(reducers, initialState, middleWare);
}

const store = configureStore({});
sagaMiddleware.run(rootSaga);
export default store;
