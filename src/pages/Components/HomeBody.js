import './HomeBody.css';
import HouseIcon from './images/home.png'
import todoIcon from './images/checklist.png'
import statIcon from './images/stats.png'
import Card from './Card.js'
import {Outlet, Link } from 'react-router-dom';

function Home(){
    return(
    <div className = "Home">
        <h1 className = "Heading">Hello World,</h1>
        <p className = "paragraph">This is a dashboard designed for DataVault by Hani Nadeem</p>
        <h1 className = 'componentsHead'>KEY COMPONENTS</h1>
        <div className = "Cards">
            <Card Heading = 'Home Page' paragraph = 'This site contains a home page which tells you everything you need to know about it.' src={HouseIcon}/>
            <Card Heading = 'Stats' paragraph = 'This site contains a Stats page which will show you everyday stats to keep track of progress.' src={statIcon}/>
            <Card Heading = 'Todo List' paragraph = 'It also contains a To do List app through which you can follow your tasks.' src={todoIcon}/>
        </div>
        
    </div>
    )
}

export default Home;