import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { value: 0 };
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increaseCount: state => {
            state.value += 1;
        },
        decreaseCount: state => {
            state.value -= 1;
        },
        increaseByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        }
    }
})
export default counterSlice.reducer;
export const { increaseCount, decreaseCount, increaseByAmount } = counterSlice.actions;