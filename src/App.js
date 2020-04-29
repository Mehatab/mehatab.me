import React from 'react';
import useDarkMode from 'use-dark-mode';

import { config } from './config';
import Header from './components/Header';
import { About } from './components/About';
import { Medium } from './components/Medium';
import { Repository } from './components/Repository/';

function App() {
  const darkMode = useDarkMode(true);
  document.title = config.title;
  if (!config.github) return <p className="text-black">Edit src/config.js</p>;
  return (
    <div className="App">
      <Header {...config} darkMode={darkMode} />
      <About name={config.name} />
      {config.blog === 'Medium' && <Medium username={config.medium} />}
	  <Repository />		
    </div>
  );
}

export default App;
