
import './App.css';
import Carrousel from './components/Carrousel';
import Cupones from './components/Cupones';
import Footer from './components/Footer';
import Header from './components/Header';
import PromoApp from './components/PromoApp';

function App() {

  
  return (
    <div className='fondo_principal'>
      <Header />
      <hr></hr>
      <Carrousel />
      <Cupones />
      <PromoApp/>
      <Footer />
    </div>
   
  );
}

export default App;
