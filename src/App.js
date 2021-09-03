import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Social from './components/social/Social';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="row">
        <div className="col-lg-6 col-md-12">
          <Switch>
            <Route 
              exact path="/"
              component={Home}
            />

            <Route 
              path="/social"
              component={Social}
            />
          </Switch>
        </div>
        <div className="col-lg-6 col-md-12">
          <Profile/>
        </div>
      </div>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
