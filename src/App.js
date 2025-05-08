import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { Provider, useSelector } from 'react-redux';
import store from './store';

import Layout from './components/Shared/layout';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dashboard from './pages/Dashobard/dashboard';
import Category from './pages/Category';
import SubCategory from './pages/SubCategory';
import Items from './pages/Items';
import Login from './pages/Login/login';
import Payslip from './components/Payslip';
import { Toaster } from 'react-hot-toast';
import OTPLogin from './pages/Login/check';


function App() {

  return (
    <Provider store={store}>
      <Router>
        {/* <Header /> */}
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard & Main Layout Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="subcategory" element={<SubCategory />} />
            <Route path="items" element={<Items />} />
            <Route path="payslip" element={<Payslip />} />
          </Route>

          {/* Catch-all Route (404) */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        {/* <Footer /> */}
      </Router>
     
      <Toaster position='top-center' />
    </Provider>
  );
}

export default App;