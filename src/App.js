import MainPage from '../src/pages/Main'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from '../src/components/Layout'

function App() {
  return (
    <div>
    <Router>
      <Layout>
     
        <Route exact path="/" component={MainPage} />
      
      </Layout>
    </Router>
    </div>
  );
}

export default App;
