import { Link, Route,Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './components/Homepage.jsx'


const App = () => {

  return (
    <>

      <h1>Employee Directory V2</h1>

      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>

    </>
  )
}

export default App
