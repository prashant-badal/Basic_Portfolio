import './App.css';
 

import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
import PageNotFound from './Pages/PageNotFound';
const App=() =>{
  return (
   <>
   <Routes>
   {/*  Root directory= "/" */}
   <Route  path='/' element={<Home/>}/>
   <Route  path='/about' element={<About/>}/>
   <Route  path='/contact' element={<Contact/>}/>
   <Route  path='/menu' element={<Menu/>}/>

   <Route  path='/*' element={<PageNotFound/>}/>
   
   </Routes>
   
   
   </>
  );
}

export default App;
