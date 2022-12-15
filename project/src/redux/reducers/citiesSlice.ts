import { createSlice } from '@reduxjs/toolkit'

export interface CitiesState {
    value: object[]
}

const initialState: CitiesState = {
    value: [
        { id: '1', city: 'Минск' },
        { id: '2', city: 'Витебск' },
        { id: '3', city: 'Гомель' },
        { id: '4', city: 'Гродно' },
        { id: '5', city: 'Брест' },
        { id: '6', city: 'Могилев' }
    ]
}

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: { //ф-и изменяющие store
    },
})

export default citiesSlice.reducer