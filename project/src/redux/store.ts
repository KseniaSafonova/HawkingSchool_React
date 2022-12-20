import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsSlice';
import citiesReducer from './reducers/citiesSlice';
import apartmentsReducer from './reducers/apartmentsSlice';

export const store = configureStore({
    reducer: {
        news: newsReducer,
        cities: citiesReducer,
        apartments: apartmentsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch