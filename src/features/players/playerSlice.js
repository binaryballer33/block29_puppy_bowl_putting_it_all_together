import {createSlice} from "@reduxjs/toolkit";
import { puppyBowlApi } from "../../api/puppyBowlApi";

const playerSlice = createSlice({
    name:"player",
    initialState:[],
    extraReducers: (builder) => { // apart of removing the dispatching and exporting actions
         // this is why we need " reducerPath: "puppyBowlApi" inside of the reducer store.js 
         // puppyBowlApi.endpoints.getPlayers.matchFulfilled
        builder.addMatcher(puppyBowlApi.endpoints.getPlayers.matchFulfilled, (state, { payload }) => {
            return payload.data.players 
        })
    }
})
console.log("Player Slice: ", playerSlice);
console.log("Player Slice Reducer: ", playerSlice.reducer);
export default playerSlice.reducer;