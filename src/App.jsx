import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tile from '../components/Tile/Tile.jsx';
import { data } from '../data/data';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='home-section'>
      <div className='content'>
        <h2 >Join 2 million+ Australians finding better</h2>
        <p>Finder's team of 40+ experts will help you find the right choices in over 100 categories.</p>
      <div className='tiles-container'>
        <div className='tiles'>
          {data.map((item, index) => {
            return (
              <Tile key={index} title={item.title} image={item.image} />
            )
          })}
        </div>
      </div>
      </div>
    </section>
  )
}

export default App
