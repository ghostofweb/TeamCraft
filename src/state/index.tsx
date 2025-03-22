import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface initialStateType {isSideBarCollapsed: boolean;
    isDarkMode: boolean;
}
const initialState:initialStateType = {
    isSideBarCollapsed: false,
    isDarkMode: false
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSideBarCollapsed: (state,action:PayloadAction<boolean>) => {
            state.isSideBarCollapsed = action.payload
        }
    }
})

export const {} = globalSlice.actions
export default globalSlice.reducer