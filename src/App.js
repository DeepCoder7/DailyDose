import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const apiKey = process.env.REACT_APP_APIKEY;

  const [progress, setProgress] = useState(0);

    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar color="#f11946" height={3} progress={progress}/>
          <Routes>
            <Route exact path='/' element={<News key="general" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='general'/>}/>
            <Route exact path='/business' element={<News key="business" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='business'/>}/>
            <Route exact path='/entertainment' element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='entertainment'/>}/>
            <Route exact path='/general' element={<News key="general1" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='general'/>}/>
            <Route exact path='/health' element={<News key="health" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='health'/>}/>
            <Route exact path='/science' element={<News key="science" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='science'/>}/>
            <Route exact path='/sports' element={<News key="sports" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='sports'/>}/>
            <Route exact path='/technology' element={<News key="technology" apiKey={apiKey} setProgress={setProgress} pageSize={8} country='in' category='technology'/>}/>
          </Routes>
        </Router>
      </div>
    )
}

export default App