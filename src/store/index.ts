import { configureStore } from "@reduxjs/toolkit";
import { TodoSlice } from "./todo/Todo.Slice";

export const store = configureStore({
    reducer: {
        [TodoSlice.name]: TodoSlice.reducer
    }

})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>