import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Services from './Component/Services';
import About from './Component/About';
import Navbar from './Component/Navbar';
import {Switch, Route, Redirect} from 'react-router-dom';


const App = () => {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/about' component={About} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
export {Switch, Route}