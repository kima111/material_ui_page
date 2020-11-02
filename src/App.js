import './App.css';
import MainPage from '../src/pages/Main'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from '../src/components/Layout'

function App() {
  return (
    <Router>
      <Layout>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      </Layout>
    </Router>
    
  );
}

export default App;
