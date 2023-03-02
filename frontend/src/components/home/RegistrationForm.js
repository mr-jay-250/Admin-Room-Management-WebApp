import {useRef} from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import DatePicker from 'react-datetime'
import moment from "moment";

const RegistrationForm = (props) => {
    const roomDetails = useSelector(state=>state.room.bookingRoom)
    console.log(roomDetails)
    const emailRef = useRef()
    const startDateRef = useRef()
    const endDateRef = useRef()

    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
        return current.isAfter(yesterday);
    };
    const submitHandler = async (e)=>{
        e.preventDefault()
        const email = emailRef.current.value
        const roomType = roomDetails.roomType
        const roomNo = roomDetails.roomNo
        const startTime = startDateRef.current.value
        const endTime = endDateRef.current.value
        const bookRoom = await axios.post('http://localhost:3001/user/roomBooking',{
            email,startTime,endTime,roomType,roomNo
        })
        console.log(bookRoom)
    }

    return (
        <div>
            <form>
                <input type="email" ref={emailRef}/><br />
                <input type="text" value={roomDetails.roomType} disabled/><br />
                <input type="text" value={roomDetails.roomNo} disabled/><br />
                <input type="date" ref={startDateRef}/><br />
                <DatePicker
                    
                        isValidDate = {disablePastDt}
                    />
                    <br/>
                <h>Price per room:{roomDetails.price}</h><br/>
                <button onClick={submitHandler}>Book Room</button>
            </form>
        </div>
    )
}

export default RegistrationForm
