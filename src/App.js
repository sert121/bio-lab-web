import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Publications from './pages/Publications/Publications';
import Scientists from './pages/Scientists/Scientists';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Gallery from './pages/Gallery/Gallery';
import ContactUs from './pages/ContactUs/ContactUs';
function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/publications' component={Publications} />
            <Route path='/scientists' component={Scientists} />
            <Route path='/gallery' component={Gallery} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/careers' component={SignUp} />
            <Route path='/photos' component={SignUp} />
          </Switch>
      </Router>
        
    
  );
}

export default App;
