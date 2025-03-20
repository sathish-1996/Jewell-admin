import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer/footer';
import Dashboard from './pages/Dashobard/dashboard';
import store from './store';
import { Provider, useSelector } from 'react-redux';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import Items from './pages/Items';
import Login from './pages/Login/login';

import Layout from './components/Shared/layout';

function App() {

  return (
    <div className="App">

      <Provider store={store}>



        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
           
          </Routes>
          <Layout />
        </BrowserRouter>

      </Provider >

    </div>
  );
}

export default App;
