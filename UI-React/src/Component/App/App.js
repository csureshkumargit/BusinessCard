import './App.css';
import Nav from '../Nav/Nav';
import BusinesscardCreate from '../BusinesscardCreate/BusinesscardCreate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import BusinesscardViewByBrand from '../BusinesscardViewByBrand/BusinesscardViewByBrand';
import BusinesscardDelete from '../BusinesscardDelete/BusinesscardDelete';
import BusinesscardUpdate from '../BusinesscardUpdate/BusinesscardUpdate';
import UserSignUp from '../UserSignUp/UserSignUp';
import UserLogin from '../UserLogin/UserLogin';
import Footer from '../Footer/Footer';
import UserLogout from '../UserLogout/UserLogout';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
      </div>
      <div className='content-container'>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/login'>
            <UserLogin />
          </Route>
          <Route path='/register'>
            <UserSignUp />
          </Route>
          <Route path='/logout'>
            <UserLogout />
          </Route>
          <Route path='/create'>
            <BusinesscardCreate />
          </Route>
          <Route path='/view'>
            <BusinesscardViewByBrand />
          </Route>
          <Route path='/delete/:bsnsid'>
            <BusinesscardDelete />
          </Route>
          <Route path='/update/:bsnsid'>
            <BusinesscardUpdate />
          </Route>
        </Switch>
      </div>
      <div className='footer-container'>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
