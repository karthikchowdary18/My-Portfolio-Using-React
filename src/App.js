
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Hireme from './Hireme';

const App=()=> {
  return (
    <div >
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     
     <Route path='/About' element={<About/>} />
     <Route path='/Contact' element={<Contact/>}/>
     <Route path='/Hireme' element={<Hireme/>} />
     </Routes>
     </BrowserRouter>  
      </div>
  );
}

export default App;
