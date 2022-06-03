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
import Research from './pages/Research';
import ResearchSubpage1 from './pages/ResearchSubPage1';
import ResearchSub2 from './pages/ResearchSub2';
import ResearchSub3 from './pages/ResearchSub3';
import ResearchSub4 from './pages/ResearchSub4';
import LabNews from './pages/LabNews';
import ResearchClip1 from './pages/ResearchClip1';

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
            <Route path='/research' component={Research}/>
            <Route path='/careers' component={SignUp} />
            <Route path='/photos' component={SignUp} />
            <Route path='/sub1' component={ResearchSubpage1} />
            <Route path='/sub2' component={ResearchSub2} />
            <Route path='/sub3' component={ResearchSub3} />
            <Route path='/sub4' component={ResearchSub4} />
            <Route path='/labnews' component={LabNews} />
            <Route path='/labnews_clip1' component={ResearchClip1}></Route>
            <Route path='/labnews_clip2' component={LabNews}></Route>
            <Route path='/labnews_clip3' component={LabNews}></Route>

          </Switch>
      </Router>
        
    
  );
}

export default App;
