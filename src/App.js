import React from 'react';
import './assets/css/style.css';

import { Header } from './components/header';
import { Summary } from './components/summary';
import { ExperienceList } from './components/experience';
import { Skills, GeneralSkills } from './components/skills';
import { EducationList } from './components/education';
import { Consent } from './components/consent';
import { Copyright } from './components/copyright';

function App() {
  return (
    <div className="App">
      <div className='paper'>
        <Header />
        <div className='container'>
          <Summary />
          <Skills />
          <GeneralSkills />
          <ExperienceList />
          <EducationList />
          <Consent />
        </div>

      </div>
      <Copyright />
    </div>
  );
}

export default App;
