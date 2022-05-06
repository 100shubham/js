import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert'
// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>  
      <Fragment>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Landing/>}></Route>
      </Routes>
      <section className='container'>
        <Alert/>
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
        </Routes>
      </section>
      </Fragment>
    </Router>
    </Provider>
    );

export default App;
