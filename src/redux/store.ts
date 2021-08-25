import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import reducers from './reducers';

const middlewares: any = [];

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const rootReducers = combineReducers({
  ...reducers,
});
const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export { store };
export type AppState = ReturnType<typeof rootReducers>;
