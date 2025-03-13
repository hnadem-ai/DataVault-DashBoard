import './nav.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function NavBar(props){ 

    let homeItemClass = 'item'  
    let statsItemClass = 'item' 
    let todoItemClass = 'item' 
    if (props.activeItem == 'home'){
        homeItemClass = 'item active-item'
    }else if (props.activeItem == 'stats'){
        statsItemClass = 'item active-item'
    }else if (props.activeItem == 'todo'){
        todoItemClass = 'item active-item'
    }

    /* 
    const [ itemClassS, setItemClass ] = useState('item');

    useEffect(() => {
        if(props.itemClass == 'active'){
            setItemClass((prev) => prev === 'item' ? 'item active-item' : 'item')
        }
    },[])
    */
    
    return (
        <div>
            <div className={props.opaque} onClick={props.onOpaqueClick}></div>
            <div className={props.ul}>
                <ul className='items'>
                    <Link to='/'><li className={homeItemClass}>Home</li></Link>
                    <Link to='/stats'><li className={statsItemClass}>Stats</li></Link>
                    <Link to='/todo'><li className={todoItemClass}>Todo</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;