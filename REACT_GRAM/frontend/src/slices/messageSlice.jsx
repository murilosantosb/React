import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import messageService from "../services/messageService";

const initialState = {
    messages: [],
    contacts: [],
    message: {},
    error: false,
    success: false,
    loading: false,
}

export const getAllContacts = createAsyncThunk(
    "message/contacts",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await messageService.getAllContacts(id,token)

        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const getMessageId = createAsyncThunk(
    "message/chat",
    async (id, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token

        const data = await messageService.getMessageId(id, token)

        if(data.errors){
            return thunkAPI.rejectWithValue(data.errors[0])
        }

        return data
    }
)

export const messageSlice = createSlice({
    name: "message",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getAllContacts.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getAllContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.contacts = action.payload,
                state.error = null;
            })
            .addCase(getAllContacts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
            })
            .addCase(getMessageId.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getMessageId.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.error = null;
                state.messages = action.payload;
            })
            .addCase(getMessageId.rejected, (state, action) => {
                state.loading = false ;
                state.error = action.payload;
                state.messages = []
            })
    }
})


export default messageSlice.reducer;