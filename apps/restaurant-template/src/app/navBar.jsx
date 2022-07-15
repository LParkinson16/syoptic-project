import { Router, Routes, Route, Link, Switch } from 'react-router-dom';
import Restaurant from './restaurant';
import { AppBar } from '@mui/material';
import { Items } from './items';

function Navigation() {

  return (
    <Router>
      <div>
        <nav>
          <Link to='/'>Home Page</Link>
          <Link to='/items'>Menu</Link>
          <Link to='/items'>Reservations</Link>
          <Link to='/items'>Contact us</Link>

        </nav>

        <Routes>
          <Route path='/items' exact element={<Items />} />
          <Route path='/' exact element={<App />} />
          <Route path='*' exact element={<App />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Navigation;