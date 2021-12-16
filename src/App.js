import React from 'react';
import {Route , Switch , Redirect} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import Pizzas from './pages/Pizzas';
import Pastas from './pages/Pastas';
import Desserts from './pages/Desserts';
import Drinks from './pages/Drinks';
import LegalMention from './pages/LegalMention';

const App = () => {
  return (
    <Switch>
      <Route exact path = "/" component={Home} />
      <Route exact path = "/Pizzas" component={Pizzas} />
      <Route exact path = "/Pastas" component={Pastas} />
      <Route exact path = "/Desserts" component={Desserts} />
      <Route exact path = "/Drinks" component={Drinks} />
      <Route exact path = "/FindUs" component={Contact} />
      <Route exact path = "/LegalMention" component={LegalMention} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;