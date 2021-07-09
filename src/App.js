import './App.css';
import Header from './Container/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProductListing from './Container/ProductListing';
import ProductDetail from './Container/ProductDetail';

function App() {
  return (
    <div className="App">
    <Router>
      <Header />
        <Switch>
          <Route path="/"  exact component={ProductListing} />
          <Route path="/product/:productId"  exact component={ProductDetail} />
          <Route> 404 Not Found </Route>
        </Switch>
      </Router>
      </div>
  );
}

export default App;
