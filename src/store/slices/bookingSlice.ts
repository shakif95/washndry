import { createSlice } from '@reduxjs/toolkit'

export interface Booking {
  id?: number;
  userId?: string | number;
  startDateTime: Date | string;
  endDateTime: Date | string;
  additionalNotes?: string;
}

export interface BookingState {
  all: Booking[];
}

const initialState: BookingState = {
  all: []
}

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    createBooking: (state: BookingState, action: any) => {
      if(action.payload){
        state.all.push(action.payload);
      }
    },
    deleteBooking: (state: BookingState, action: any) => {
      // TODO implement it later
    },
    allBookings: (state: BookingState) => {
      // TODO implement it later
    }
  }
});

const { actions, reducer } = bookingSlice;

export const { createBooking, deleteBooking, allBookings } = actions;

export default reducer;