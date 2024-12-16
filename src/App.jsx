import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');

  const handleClick = (event) => {
    const buttonElement = event.currentTarget;
    const audioElement = buttonElement.querySelector('audio');
    audioElement.play();
    const display = buttonElement.id;
    setTitle(display);
  }

  const handleKeyDown = (event) => { 
    const key = event.key.toUpperCase(); 
    const audioElement = document.getElementById(key); 
    if (audioElement) { 
      audioElement.play(); 
    }
    // Find the button element associated with the key
    const buttonElement = document.querySelector(`button .clip[id="${key}"]`);
    if (buttonElement) {
      const display = buttonElement.closest('button').id;
      setTitle(display);
    }
  }

  useEffect(() => { 
    document.addEventListener('keydown', handleKeyDown); 
    return () => { 
      document.removeEventListener('keydown', handleKeyDown); 
    }; 
  }, []);

  return (
    <div id='drum-machine'>
      <h1>Drum Machine</h1>
      <div id='display'>{title}</div>
      <div id='drum-container'>
        <button className='drum-pad' id='Heater-1' onClick={handleClick}>
          Q
          <audio className='clip' id='Q' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Heater-2' onClick={handleClick}>
          W
          <audio className='clip' id='W' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Heater-3' onClick={handleClick}>
          E
          <audio className='clip' id='E' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Heater-4' onClick={handleClick}>
          A
          <audio className='clip' id='A' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Clap' onClick={handleClick}>
          S
          <audio className='clip' id='S' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Open-HH' onClick={handleClick}>
          D
          <audio className='clip' id='D' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Kick-n-Hat' onClick={handleClick}>
          Z
          <audio className='clip' id='Z' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Kick' onClick={handleClick}>
          X
          <audio className='clip' id='X' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' type='audio/mpeg' />
        </button>
        <button className='drum-pad' id='Closed-HH' onClick={handleClick}>
          C
          <audio className='clip' id='C' src='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' type='audio/mpeg' />
        </button>
      </div>
    </div>
  );
}

export default App;
