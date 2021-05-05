import React, { useEffect, useState } from 'react';
import Header from './components/Header/'
import Main from './components/Main/'

import './App.css';

function App() {
  

  return (
    <section className="App">

    <Header/>

      {/*            ^^HEADER                              MAIN|||||           */}

<Main/>


      </section>
  );
}

export default App;
