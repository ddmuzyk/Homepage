import { useState } from 'react'
import './App.css'
import Tile from '../components/Tile/Tile';
import { data } from '../data/data';
import Button from '../components/Button/Button';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleTiles = () => {
    setIsOpen(!isOpen);
  }

  return (
    <section className='home-section'>
      <div className='content'>
        <h2>Join 2 million+ Australians finding better</h2>
        <p>Finder's team of 40+ experts will help you find the right choices in over 100 categories.</p>
        <div className='tiles-container'>
          <div className={`tiles ${isOpen ? 'open' : ''}`}>
            {data.map((item, index) => {
              return (
                <Tile key={index} title={item.title} image={item.image} />
              )
            })}
          </div>
          <Button isOpen={isOpen} toggleTiles={toggleTiles}
          />
        </div>
      </div>
    </section>
  )
}

export default App
