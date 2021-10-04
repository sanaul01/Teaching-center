import logo from './logo.svg';
import './App.css';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import NotFound from './Component/NotFound/NotFound';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Service from './Component/Service/Service';
import OurCourse from './Component/Our course/OurCourse';

function App() {
  return (
    <div className="App">
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
         <Route path='/ourcourse'>
           <OurCourse></OurCourse>
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
