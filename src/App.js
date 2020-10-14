import React from 'react';
import './assets/css/style.css';

import { Header } from './components/header';
import { Summary } from './components/summary';
import { ExperienceList } from './components/experience';

function App() {
  return (
    <div className="App">
      <div className='paper'>
        <Header />
        <div className='container'>
          <Summary />
          <ExperienceList />
        </div>

      </div>
    </div>
  );
}

export default App;
