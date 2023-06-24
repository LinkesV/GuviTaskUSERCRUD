import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import { createContext } from 'react';
import { useState } from 'react';
import User from './pages/User';
import About from './pages/About'
import Contact from './pages/Contact'


const data = createContext()
function App() {

const [users,setUsers] = useState([])

  return (
    <BrowserRouter>
      <data.Provider value = {[users,setUsers]}>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/user/:id' element={<User/>}/>
        <Route exact path = '/about' element={<About/>}/>
        <Route exact path = '/contact' element={<Contact/>}/>
      </Routes>
      </data.Provider>
    </BrowserRouter>
  );
}

export default App;
export {data};