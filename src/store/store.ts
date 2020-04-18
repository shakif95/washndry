import { RouterState, LocationChangeAction, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer, { AuthState } from './slices/authSlice';

export const history = createBrowserHistory();

export interface AppState {
  router: RouterState;
  auth: AuthState;
}

const store = configureStore<AppState, LocationChangeAction>({
  reducer: {
    router: connectRouter(history),
    auth: authReducer
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)] as any
});

export default store;


