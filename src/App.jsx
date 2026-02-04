import {HomePage} from './pages/HomePage';
import {TestingPage} from './pages/TestingPage';
import { Routes, Route } from 'react-router-dom';

import './App.css'

function App() {
  

  return (
    <>
      <title>Home</title>

      <Routes>
        <Route
        path="/"
        element={<HomePage/>}
        >  
        </Route>

        <Route
        path="/Testing"
        element={<TestingPage/>}
        ></Route>
        
      </Routes>
     
    
    </>
  )
}

export default App
