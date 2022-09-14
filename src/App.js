import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';
import Novedades from './components/Novedades/Novedades';
import Cupones from './components/Cupones/Cupones';

function App() {  
  return (
    <div className='fondo_principal'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Carrousel/>}/>
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer/>}/>
          <Route path="/cupones" element={<Cupones/>}/>
          <Route path="/novedades" element={<Novedades/>}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}
export default App;
