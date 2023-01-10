import { createSlice } from '@reduxjs/toolkit'

export interface ApartmentsState {
    value: object[]
}

const initialState: ApartmentsState = {
    value: [
        { id: '1', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '65.00', notExpensive: true, persons: '4 (2+2)', rooms: 5, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' },
        { id: '2', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '65.00', notExpensive: true, persons: '4 (2+2)', rooms: 5, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' },
        { id: '3', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '65.00', notExpensive: true, persons: '4 (2+2)', rooms: 4, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' },
        { id: '4', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '75.00', persons: '4 (2+2)', rooms: 3, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' },
        { id: '5', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '85.00', persons: '4 (2+2)', rooms: 3, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' },
        { id: '6', images: ['/image1.jpg', '/image2.jpg', '/image3.jpg'], title: '4-комн. апартаменты на Грушевке ', price: '85.00', persons: '4 (2+2)', rooms: 2, city: 'Минск', address: 'б-р Мулявина, д. 10', subway: 'Грушевка', location: 'Шабаны', description: 'Большая четырехкомнатная студия! Большая джкакузи на двоих, на теливизоре есть приложение Megogo, YouTube, Smart TV, сможете выбрать фильм по вкусу!) Цена зависит от количества проживающих, уточняйте, пожалуйста, по телефону! В пяти минутах ходьбы Минск-Арена' }
    ]
}

export const apartmentsSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: { //ф-и изменяющие store
    },
})

export default apartmentsSlice.reducer