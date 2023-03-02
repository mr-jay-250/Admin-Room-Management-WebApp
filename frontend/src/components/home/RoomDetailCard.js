import React from 'react'
import {useDispatch} from 'react-redux'
import { roomActions } from '../../store/room-slice';
import {useNavigate} from 'react-router-dom'

function RoomDetailCard(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitHandler = (e)=>{
      e.preventDefault();
      
      dispatch(roomActions.bookingRoom({
        roomType:props.item.roomType,
        roomNo:props.item.roomNo,
        price:props.item.price
      }))
      navigate('/booking')
    }

    return (
    <div>
        <h1>Room Type:{props.item.roomType}</h1>
        <h1>Room No:{props.item.roomNo}</h1>
        <h1>Price:{props.item.price}</h1>
        <button onClick={submitHandler}>Book Room</button>
    </div>
  )
}

export default RoomDetailCard