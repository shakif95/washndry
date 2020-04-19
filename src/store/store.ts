import { RouterState, LocationChangeAction, connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import authReducer, { AuthState } from './slices/authSlice';
import bookingReducer, { BookingState } from './slices/bookingSlice';

export const history = createBrowserHistory();

export interface AppState {
  router: RouterState;
  auth: AuthState;
  bookings: BookingState;
}

const store = configureStore<AppState, LocationChangeAction>({
  reducer: {
    router: connectRouter(history),
    auth: authReducer,
    bookings: bookingReducer
  },
  middleware: [...getDefaultMiddleware(), routerMiddleware(history)] as any
});

export default store;


