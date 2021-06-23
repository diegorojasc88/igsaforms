import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import FC01 from './forms/FC01';
import MainScreen from './screens/MainScreen';

function App() {
  return (
    <div className="App">
      <MainScreen />
      {/*<FC01 />*/}

      <ToastContainer />
    </div>
  );
}

export default App;
