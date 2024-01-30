import { configureStore } from '@reduxjs/toolkit'
import Cartslice from './slice/Cartslice';
import CategorySlice from './slice/CategorySlice';
import SearchSlice from './slice/SearchSlice';

const store = configureStore({
    reducer : { 
        cart : Cartslice,
        category : CategorySlice,
        search : SearchSlice,

    }
});
export default store;