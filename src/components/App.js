import React from 'react';
import useDarkMode from 'use-dark-mode';

import { config } from '../config';
import Header from './Header';
import { About } from './About';

function App() {
  const darkMode = useDarkMode(true);
  document.title = config.title;
  if (!config.github) return <p className="text-black">Edit src/config.js</p>;
  return (
    <div className="App">
      <Header {...config} darkMode={darkMode} />
      <About name={config.name} />
      
    </div>
  );
}

export default App;
