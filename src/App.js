import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Novedades from './components/Novedades/Novedades';
import Cupones from './components/Cupones/Cupones';
import Provider from './components/CartContext/CartContext';
import Cart from './components/Cart/Cart';

function App() {  
  return (
    <div className='fondo_principal'>
      <Provider>
        <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Carrousel/>}/>
              <Route path="/cart" element={<Cart/>} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/products" element={<ItemListContainer/>}/> 
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path="/coupons" element={<Cupones/>}/>
              <Route path="/news" element={<Novedades/>}/>
            </Routes>
          <Footer />
        </BrowserRouter> 
      </Provider>
    </div>
  );
}
export default App;
