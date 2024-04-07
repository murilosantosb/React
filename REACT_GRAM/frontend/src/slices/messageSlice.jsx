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
    }
})


export default messageSlice.reducer;