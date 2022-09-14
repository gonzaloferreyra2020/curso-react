import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import PromoApp from './components/PromoApp/PromoApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartWidget from './components/CartWidget/CartWidget';

function App() {  
  return (
    <div className='fondo_principal'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Carrousel/>}/>
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path='/productos' element={<ItemListContainer/>}/>
        </Routes>
        <PromoApp/>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}
export default App;
