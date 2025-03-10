import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedEvent: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
  },
});

export const { setSelectedEvent } = eventSlice.actions;

const store = configureStore({
  reducer: {
    event: eventSlice.reducer,
  },
});

export default store;
