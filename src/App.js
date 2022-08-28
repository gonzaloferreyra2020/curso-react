
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Cupones from './components/Cupones/Cupones';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';
import PromoApp from './components/PromoApp/PromoApp';

function App() {

  
  return (
    <div className='fondo_principal'>
      <Navbar />
      <ItemListContainer/>
      <Carrousel />
      <Cupones />
      <PromoApp/>
      <Footer />
    </div>
   
  );
}

export default App;
