import {useRef, useState} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const RegistrationForm = (props) => {
    const [responseData,setResponseData] = useState({})

    const roomDetails = useSelector(state=>state.room.bookingRoom)
    const emailRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()
    const paymentModeRef = useRef()

    const submitHandler = async (e)=>{
        e.preventDefault()
        const email = emailRef.current.value
        const roomType = roomDetails.roomType
        const roomNo = roomDetails.roomNo
        const startTime = startDateRef.current.value
        const endTime = endDateRef.current.value
        const paymentMode = paymentModeRef.current.value
        const dateNow = new Date().toISOString().slice(0,10)

        if(startTime>dateNow && endTime > startTime){
            const bookRoom = await axios.post('http://localhost:3001/user/roomBooking',{
                email,startTime,endTime,roomType,roomNo,paymentMode
            })
            setResponseData(bookRoom.data)
        }else{
            setResponseData({message:"Wrong inputs"})
        }
    }

    return (
        <div>
            <form>
                <input type="email" ref={emailRef} required/><br />
                <input type="text" value={roomDetails.roomType} disabled required/><br />
                <input type="text" value={roomDetails.roomNo} disabled required/><br />
                <input type='date' ref={startDateRef} required /><br/>
                <input type='date' ref={endDateRef} required/><br/>
                <p>Price per room:{roomDetails.price}</p>
                <select ref={paymentModeRef} required>
                    <option value="online">Online</option>
                    <option value="cash">Cash</option>
                </select><br />
                <button onClick={submitHandler}>Room Inquiry</button>
            </form>
            {responseData.message}
            {responseData.user?JSON.stringify(responseData.user):""}
        </div>
    )
}

export default RegistrationForm
