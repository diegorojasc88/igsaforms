import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FC01 from './forms/FC01';
import MainScreen from './screens/MainScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={MainScreen} />
      <Route path="/edit/:id" component={FC01} />
      <Route path="/create" component={FC01} />
      <Route path="/FC01" component={FC01} />

      <ToastContainer />
    </Router>
  );
}

export default App;
