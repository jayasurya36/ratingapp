import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

//Creating separate costant for baseURL
const api = axios.create({
    baseURL: "https://ratingsserver.onrender.com/"
})

// createAsyncThunk is a function that delays the execution of a function or block of code until it is called again

export const postRatings = createAsyncThunk(
    'postRating', async (ratings) => {
        try {
            console.log(ratings)
            const response = await api.post('/postRatings', ratings, {
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "application/json"
                }
            })
            console.log(response?.data)
            return response?.data
        } catch (err) {
            return err
        }
    }
)

export const getRatings = createAsyncThunk(
    'getRatings', async () => {
        try {
            const response = await api.get('/ratings', {
                headers: {
                    'Content-Type': 'application/json',
                    "accept": "application/json"
                }
            })
            return response?.data
        } catch (err) {
            return err
        }
    }
)

//creating initial states to add data

const ratingSlice = createSlice({
    name: "rating",
    initialState: {
        loading: false,
        ratings: [],
        error: "",
        postRating: []
    },
    //extra reducers to handle promises 
    extraReducers: (builder) => {
        builder
            .addCase(getRatings.pending, (state) => {
                state.loading = true;
            })
            .addCase(getRatings.fulfilled, (state, action) => {
                state.ratings = action.payload;
                state.loading = false;
            })
            .addCase(getRatings.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(postRatings.pending, (state) => {
                state.loading = true
            })
            .addCase(postRatings.fulfilled, (state, action) => {
                state.postRating = action.payload
                state.loading = false
            })
            .addCase(postRatings.rejected, (state, action) => {
                state.error = action.error.message
                state.loading = false
            })
    }
})

export default ratingSlice.reducer;