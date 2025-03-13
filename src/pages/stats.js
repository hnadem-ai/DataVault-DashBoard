import './stats.css'
import revenue from './Components/images/revenue.png'
import Header from './Components/Header.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Stats(){

    return (
        <div>
            <Header activeItem = 'stats'/>
            <h1 className = 'container stats-heading'>STATS:</h1>
            <div className='cards-container'>
                <div className='stats-card card1'>
                    <div className='img-heading'>
                        <img className='img' src={revenue}/>
                        <h1 className='stats-card-heading'>Revenue</h1>
                    </div>
                    <p className='stats-paragraph'>70%</p>
                </div>
                <div className='stats-card card2'>
                    <h1 className='stats-card-heading'>Heading</h1>
                    <p className='stats-paragraph'>lorem ipsum dolor amit. This is a dummy text</p>
                </div>
                <div className='stats-card card3'>
                    <h1 className='stats-card-heading'>Heading</h1>
                    <p className='stats-paragraph'>lorem ipsum dolor amit. This is a dummy text</p>
                </div>
                <div className='stats-card card4'>
                    <h1 className='stats-card-heading'>Heading</h1>
                    <p className='stats-paragraph'>lorem ipsum dolor amit. This is a dummy text</p>
                </div>
            </div>
        </div>
    )
}