import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <h1>Educational site</h1>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
