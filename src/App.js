import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;
