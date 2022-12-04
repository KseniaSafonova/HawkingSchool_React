import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface CounterState {
//     value: number
// }

// const initialState: CounterState = {
//     value: 10,
// }

// export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: { //ф-и изменяющие store
//         increment: (state) => {
//             state.value += 1
//         },
//         decrement: (state) => {
//             state.value -= 1
//         },
//         incrementByAmount: (state, action: PayloadAction<number>) => {
//             state.value += action.payload
//         },
//     },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export default counterSlice.reducer

export interface NewsState {
    value: object[]
}

const initialState: NewsState = {
    value: [
        { id: '1', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '2', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '3', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '4', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '5', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '6', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '7', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '8', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' },
        { id: '9', image: '/image.png', bigImage: '/bigImage.png', title: 'Линия Сталина: суровый отдых в усадьбах на сутки', descriptionShort: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...', description: ['Итак, утром вы выезжаете в путь по Молодеченской трассе. Если автомобиля у вас нет - садитесь на маршрутку в сторону Молодечно от железнодорожного вокзала. Остановка называется «Линия Сталина» - да-да, именно здесь вы и проведёте ближайшие несколько часов, а вероятнее всего – останетесь до самого вечера.', '«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом.Поэтому желательно приезжать сюда в хорошую погоду.Его территория поистине огромна: целых 26 га.Такое название дано музею неспроста: «Линией Сталина» в 20е - 30е гг.XX века именовали цепь укреплений, созданную для защиты государственной границы СССР.Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.', 'Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день.Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке.Проголодались ? Загляните в кафе и насладитесь сытным домашним обедом.', 'Посетить «Линию Сталина» будет интересно как взрослым, так и детям.Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже.На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант.Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!', 'Отличная усадьба в 10 км от "Линии Сталина".'], date: '14 Января 2008' }
    ]
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: { //ф-и изменяющие store
    },
})

// export const { increment, decrement } = newsSlice.actions

export default newsSlice.reducer