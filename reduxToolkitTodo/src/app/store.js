import {configureStore} from '@reduxjs/toolkit'; //comes from core redux
import todoReducer  from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})