
import './App.css';
import Carrousel from './components/Carrousel/Carrousel';
import Cupones from './components/Cupones/Cupones';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import PromoApp from './components/PromoApp/PromoApp';

function App() {

  
  return (
    <div className='fondo_principal'>
      <Navbar />
      <Carrousel />
      <Cupones />
      <PromoApp/>
      <Footer />
    </div>
   
  );
}

export default App;
