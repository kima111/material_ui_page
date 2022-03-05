import { BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from '../src/components/Layout'
import MainPage from '../src/pages/Main'

function App() {
  return (
    <div>
    {/* <Router>
      <Layout>
     
        <Route exact path="/" component={MainPage} />
      
      </Layout>
    </Router> */}
    <MainPage/>
    </div>
  );
}

export default App;
