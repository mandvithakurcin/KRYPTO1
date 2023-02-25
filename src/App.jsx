import react from 'react'

import './App.css'
import { Navbar, Welcome, Footer, Service, Transactions, } from "./components";

import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <div className="min-h-screen">
    <div className="gradient-bg-welcome">  
    <Router>
      <Routes>
        <Route path ="/" element={<Navbar/>}/>
        </Routes>
    </Router>
    <Router>
      <Routes>
    <Route path = "/" element={<Welcome/>}/>
    </Routes>
    </Router>
    </div>
    <Router>
      <Routes>
        <Route path ="/" element={<Service/>}/>
        
        </Routes>
    </Router>
    <Router>
      <Routes>
        <Route path ="/" element={<Transactions/>}/>
        
        </Routes>
    </Router>
    <Router>
      <Routes>
        <Route path ="/" element={<Footer/>}/>
        
        </Routes>
    </Router>
    </div>
    </div>
  );
}

export default App;
