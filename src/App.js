import RoutesApp from './routes';
import {ToastContainer} from 'react-toastify';
import Footer from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer autoClose="3000"/>
      <RoutesApp/>
      <Footer/>
    </div>
  );
}

export default App;
