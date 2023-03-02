import {createSlice} from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name:'room',
    initialState:{
        roomsList:[],
        bookingRoom:{
            roomType:null,
            roomNo:null,
            price:null
        },
    },
    reducers:{
        getBookingRoomDetail(state){

        },
        bookingRoom(state,action){
            state.bookingRoom = action.payload
        },
    }
})

export const roomActions = roomSlice.actions

export default roomSlice;