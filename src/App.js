import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import { Template } from './components/MainComponents';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Routes from './Routes';

const Page = () =>{
  // const email = useSelector(state=> state.email);
  // const dispath = useDispatch({});

  return(
    <BrowserRouter>
      <Template>
        <Header />
        <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
    
  )
}
export default Page