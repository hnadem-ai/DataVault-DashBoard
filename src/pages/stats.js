import './stats.css'
import revenue from './Components/images/revenue.png'
import profit from './Components/images/profit.png'
import piechart from './Components/images/piechart.png'
import Header from './Components/Header.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Stats(){

    return (
        <div>
            <Header activeItem = 'stats'/>
            <h1 className = 'stats-heading'>STATS</h1>
            <div className='cards-container'>
                <div className='stats-card card1'>
                    <div className='img-heading'>
                        <img className='img' src={revenue}/>
                        <h1 className='stats-card-heading'>Revenue</h1>
                    </div>
                    <p className='stats-paragraph'>70%</p>
                </div>
                <div className='stats-card card2'>
                    <div className='img-heading'>
                        <img className='img' src={profit}/>
                        <h1 className='stats-card-heading'>Annual Profits</h1>
                    </div>
                    <p className='stats-paragraph'>29,58,598 Rs./-</p>
                </div>
            </div>
            <div className='piechart-container'>
                <h2>How many platforms do we use for marketing?</h2>
                <img src={piechart}/>
            </div>
        </div>
    )
}