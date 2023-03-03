import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom'
import React from 'react'
import RoomDetailCard from './RoomDetailCard'
import AdminView from '../admin/AdminView'

function Header() {
  return (
    <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/admin">Admin View</NavLink>
    </div>
  )
}

export default Header