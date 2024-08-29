import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"mainvideo",
    initialState:{
        videos:null,
        playingVideo:{}
    },
    reducers: {
        addVideos:(state,action)=>{
            state.videos=action.payload;
        },
        addplayingVideo:(state,action)=>{
            state.playingVideo=action.payload
        }
    }
})
export const {addVideos,addplayingVideo}=videoSlice.actions;
export default videoSlice.reducer