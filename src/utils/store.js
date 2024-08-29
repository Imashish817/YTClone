import { configureStore } from "@reduxjs/toolkit";
import appReducer from './AppSkice'
import mainVideoReducer from './videosSlice'
const store=configureStore({
    reducer:{
        appconfig: appReducer,
        mainvideo: mainVideoReducer
    }
})
export default store;