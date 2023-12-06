import React from 'react'
import logo from'../assets/nba-logo.png'
import "../App.css"
const Header = ({handleChange}) => {


  return (
    <div className='header'>
      <img src={logo} alt=""  className='logo'/>
      <h1 className='title'>NBA Legends</h1>
      <input type="text" placeholder='Search Player' onChange={handleChange}/>
    </div>
  )
}

export default Header
