import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../root';
import { getThreads, postThread as postThreadClient, ThreadType } from '@flotsam/flotsam-shared';

export const fetchThreads = createAsyncThunk(
    'forum/fetchThreads',
    async () => {
        return getThreads();
    }
)

export const postThread = createAsyncThunk(
    'forum/postThread',
    async (arg, thunkAPI) => {
        const state = thunkAPI.getState() as RootState;
        return postThreadClient(state.forum.formData);
    }
)

interface CatFactState {
    status: "pending" | "failed" | "success",
    threads: ThreadType[],
    formData: {
        title: string,
        content: string,
        createdBy: string
    }
}

const initialState: CatFactState = {
    status: "pending",
    threads: [],
    formData: { title: "", content: "", createdBy: "admin" }
}

const forumSlice = createSlice({
    name: "forum",
    initialState,
    reducers: {
        setTitle: (state, action: PayloadAction<string>) => {
            state.formData.title = action.payload;
        },
        setContent: (state, action: PayloadAction<string>) => {
            state.formData.content = action.payload;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchThreads.fulfilled, (state, action) => {
            // Add user to the state array
            state.threads = action.payload;
            state.status = "success"
        })
        builder.addCase(fetchThreads.rejected, (state, action) => {
            // Add user to the state array
            state.status = "failed";
        })
        builder.addCase(postThread.fulfilled, (state, action) => {
            state.formData.content = '';
            state.formData.title = '';
            state.threads.push(action.payload);
        })
    }
})
export default forumSlice.reducer;
export const { setTitle, setContent } = forumSlice.actions;