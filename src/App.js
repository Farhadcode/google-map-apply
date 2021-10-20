import logo from './logo.svg';
import './App.css';
import Map from './Components/GoogleMap/Map';
import Direction from './Components/GoogleMap/Direction';
import { useRef, useState } from 'react';

function App() {

  const [origin, setOrigin] = useState('')
  const [destination, setDestrination] = useState('');

  const originRef = useRef('')
  const destinationRef = useRef('')


  const handelDirection = (event) => {
    event.preventDefault();
  }
  return (
    <div className="App">

      <form onSubmit={handelDirection} action="">

        <input type="text" ref={originRef} placeholder="Staret your location" />
        <br />
        <input type="text" ref={destinationRef} placeholder="How to go" />
        <br />
        <input type="submit" value=" Get direction" />

      </form>
      <Direction origin={origin} destination={destination}></Direction>
    </div>
  );
}

export default App;
