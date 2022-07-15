// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { BrowserRouter, Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Restaurant from './restaurant';
import { AppBar } from '@mui/material';
import { Items } from './items';
import { HomePage } from './homePage';
import {Typography} from '@mui/material'

function App() {

  return (
    <BrowserRouter>
      <AppBar id='navigation' >
        <li>
        <Link className='navLinks' to='/'>Home Page</Link>
        <Link className='navLinks' to='/items'>Menu</Link>
        <Link className='navLinks' to='/items'>Reservations</Link>
        <Link className='navLinks' to='/items'>Contact us</Link>
        <Link className='navLinks' to='/items'>Our story</Link>
        </li>
      </AppBar>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/items' element={<Items />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;