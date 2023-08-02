import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        vid: [],
        color: [],
        size: [],
        page: 1,
    },
    reducers: {
        changeVids: (state, action) => {
            if (state.vid.includes(action.payload)) {
                state.vid = [...state.vid].filter((item) => item !== action.payload)
            }
            else {
                state.vid = [...state.vid, action.payload]
            }
        },
        changeColors: (state, action) => {
            if (state.color.includes(action.payload)) {
                state.color = [...state.color].filter((item) => item !== action.payload)
            }
            else {
                state.color = [...state.color, action.payload]
            }
        },
        changeSizes: (state, action) => {
            if (state.size.includes(action.payload)) {
                state.size = [...state.size].filter((item) => item !== action.payload)
            }
            else {
                state.size = [...state.size, action.payload]
            }
        },
        changePages: (state, action) => {
            state.page = action.payload
        },
        clearAll: (state) => {
            state.vid = []
            state.color = []
            state.size = []
            state.page = 1
        },
    },
})

export const { changeVids, changeColors, changeSizes, changePages, clearAll } = filterSlice.actions

export default filterSlice.reducer