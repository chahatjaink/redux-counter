import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) { state.counter = state.counter + 1 },
        decrement(state) { state.counter = state.counter - 1 },
        increase(state, action) { state.counter = state.counter + action.payload },
        toggle(state) { state.showCounter = !state.showCounter },
    }
})

const store = configureStore({ reducer: counterSlice.reducer })

export const counterActions = counterSlice.actions

export default store;