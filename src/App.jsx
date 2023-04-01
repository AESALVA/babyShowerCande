import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import CandelariaLogo from './assets/CandelariaLogo.jpg';

function App() {

  return (
    <div className="App">
      <h1>Baby Shower Candelaria</h1>
      <div className='Logo'>
        <img src={CandelariaLogo} alt="CandelariaLogo"  />
      </div>
    </div>
  )
}

export default App
