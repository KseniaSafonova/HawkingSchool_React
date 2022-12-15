import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './reducers/newsSlice';
import citiesReducer from './reducers/citiesSlice';

export const store = configureStore({
    reducer: {
        news: newsReducer,
        cities: citiesReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch