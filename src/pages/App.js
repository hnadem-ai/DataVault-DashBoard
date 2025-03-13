import './App.css';
import Header from './Components/Header.js'
import HomeBody from './Components/HomeBody.js'

function HomePage() {

  return (
    <div className="App">
      <Header activeItem = 'home'/>
      <HomeBody />     
    </div>
    
  );
}

export default HomePage;
