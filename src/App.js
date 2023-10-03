import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import ContactUs from './components/ContactUs';
import BlogDetails from './components/BlogDetails';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'> 
          <Switch>

            <Route exact path="/"> 
              <Home />
            </Route>

            <Route exact path="/create"> 
              <Create />
            </Route>

            <Route exact path="/contact"> 
              <ContactUs />
            </Route>

            <Route exact path="/posts/:id"> 
              <BlogDetails />
            </Route>

          </Switch>
        </div>
      </div>  
    </Router>
    
  );
}

export default App;
