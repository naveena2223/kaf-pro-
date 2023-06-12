// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './components/navigation';
import Login from './components/login';
import Order from './components/order';
import Product from './components/product';
import User from './components/user';
import Header from './components/header';
// import { Router } from 'react-router-dom';
import Router from './components/router';
import LoginButton from './components/loginButton';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <LoginButton />
      <div className="navigation"><Navigation /></div>
      <div className="login"><Login /></div>
      <div className="order"><Order /></div>
      <div className="product"><Product /></div>
      <div className="user"><User /></div>
    </div>
  );
}

export default App;
