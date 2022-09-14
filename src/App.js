import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Cupones from './components/Cupones/Cupones';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import PromoApp from './components/PromoApp/PromoApp';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {  
  return (
    <div className='fondo_principal'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/todos' element={<Cupones />}/>
      </Routes>
      <ItemDetailContainer/>
      <ItemListContainer greeting="Saludos y bienvenidos" />
      <Carrousel />
      <Cupones />
      <PromoApp/>
      <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
