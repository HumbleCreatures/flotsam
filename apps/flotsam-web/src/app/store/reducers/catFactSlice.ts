import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


type CatFactType = {
    id?: number;
    fact: string,
    length: number
}

export const fetchCatFacts = createAsyncThunk(
    'catfact/fetchCatFacts',
    async () => {
        const response = await fetch('https://catfact.ninja/facts');
        const catFactList = await response.json();
        const catFactsWithId = catFactList.data.map((catFact: CatFactType, index: number) => ({ ...catFact, id: index }));
        return catFactsWithId;
    }
)

interface CatFactState {
    status: "pending" | "failed" | "success",
    facts: CatFactType[]
}

const initialState: CatFactState = {
    status: "pending",
    facts: [],
}


const counterSlice = createSlice({
    name: "catFact",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchCatFacts.fulfilled, (state, action) => {
            // Add user to the state array
            state.facts = action.payload;
            state.status = "success"
        })
        builder.addCase(fetchCatFacts.rejected, (state, action) => {
            // Add user to the state array
            state.status = "failed";
        })
    }
})

export default counterSlice.reducer;
//export const { increaseCount, decreaseCount, increaseByAmount } = counterSlice.actions;
