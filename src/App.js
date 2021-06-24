import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FC01 from './forms/FC01';
import MainScreen from './screens/MainScreen';
import NavBar from './components/NavBar';
import { FormProvider } from './contexts/FormContext';

function App() {
  const [form, setForm] = useState({});
  return (
    <Router>
      <FormProvider value={{ form }}>
        <NavBar />
        <Route path="/" exact render={(props) => (<MainScreen {...props} setForm={setForm} />)} />
        <Route path="/edit/:id" render={(props) => (<FC01 {...props} setForm={setForm} />)} />
        <Route path="/create" render={(props) => (<FC01 {...props} setForm={setForm} />)} />
        <Route path="/FC01" render={(props) => (<FC01 {...props} setForm={setForm} />)} />

        <ToastContainer />
      </FormProvider>
    </Router>
  );
}

export default App;
