import './Header.css'
import { useState } from 'react'
import Slider from './nav.js'
import logo from './images/logo.png'
import men from './images/burger-bar.png';

export default function Header(props){

  const [childClass, setChildClass] = useState('nav')
  const [opaqueClass, setopaqueClass] = useState('opaque')
  
  const handleClick = () => {
    setopaqueClass((prev) => (prev === 'opaque' ? "opaque activate" : "opaque"));
    setChildClass((prev) => {
      prev = prev === "nav" ? "nav activate" : "nav"
      return prev
    })
  }

  return (
      <div>
          <Slider ul = {childClass} opaque = {opaqueClass} onOpaqueClick = {handleClick} activeItem = {props.activeItem}/>
          <nav className="App-header">
              <div className = "logo-heading">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h3 className = "heading">DataVault<span className ="span"> DashBoard</span></h3>
              </div>
              <img src={men} className="menuImg" id='menuBtn' onClick={handleClick}/>
          </nav>
      </div>
  )
}