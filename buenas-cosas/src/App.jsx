import './App.css'

import {BrowserRouter, Routes,Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home';
import Error from './components/Error';
import Nosotros from './components/Nosotros';
import DetalleProd from './components/DetalleProd';
import Productos from './components/Productos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/productos' element={<Productos/>}/>
            <Route path='/productos/:id' element={<DetalleProd/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/*' element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
