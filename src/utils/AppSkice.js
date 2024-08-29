import { createSlice } from "@reduxjs/toolkit";

const AppSlice= createSlice({
    name: "appconfig",
    initialState:{
        hambugerToggle: true,
    },
    reducers:{
        ToggleHamburger: (state)=>{
            state.hambugerToggle= !state.hambugerToggle
        },
        OffHamburger:(state)=>{
            state.hambugerToggle=false;
        }
    }
})

export const {ToggleHamburger,OffHamburger}=AppSlice.actions;
export default AppSlice.reducer;