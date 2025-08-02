
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Setting from './Components/Setting';
import Career from './Components/Career';
import Craving from './Components/Craving';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Subcraving from './Components/Subcraving';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sevkin" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/craving" element={<Craving />} />
        <Route path="/subcraving" element={<Subcraving />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;  
