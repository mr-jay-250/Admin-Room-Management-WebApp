import axios from 'axios'
import React, {useRef, useState} from 'react'
import {useSelector} from 'react-redux'

function EditForm() {
    const [responseData,setResponseData]=useState({})
    const _id = useSelector(state=>state.room.updatingId)
    console.log("id",_id)
    const emailRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const roomTypeRef = useRef()
    const roomNoRef = useRef()

    const submitHandler = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value
        // const roomType = roomDetails.roomType
        // const roomNo = roomDetails.roomNo
        const startTime = startDateRef.current.value
        const endTime = endDateRef.current.value
        const dateNow = new Date().toISOString().slice(0,10)
        const roomNo = roomNoRef.current.value
        const roomType = roomTypeRef.current.value

        if(startTime>dateNow && endTime > startTime){
            const bookRoom = await axios.put('http://localhost:3001/user/updateUser',{
                email,startTime,endTime,roomType,roomNo,_id
            })
            setResponseData(bookRoom.data)
        }else{
            setResponseData({message:"Wrong inputs"})
        }
    }

  return (
    <div>
        <form>
            <input type="email" ref={emailRef} placeholder="email" required/><br />
            <input type="text" ref={roomTypeRef} placeholder="room-type(A,B,C)" required/><br />
            <input type="text" ref={roomNoRef} placeholder="room-no" required/><br />
            <input type='date' ref={startDateRef} required /><br/>
            <input type='date' ref={endDateRef} required/><br/>
            <button onClick={submitHandler}>Update Detail</button>
        </form>
        {responseData.message}
    </div>

  )
}

export default EditForm