import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: "category",
    initialState: {
        category: "All",
    },
    reducers: {
        setCategorys: (state, action) => {
            state.category = action.payload;
        },
    },
});

export const { setCategorys } = CategorySlice.actions;
export default CategorySlice.reducer;