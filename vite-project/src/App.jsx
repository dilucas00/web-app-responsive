import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SideBarM  from './components/SideBarM';
import CardBalance from './components/CardBalance';
import FinanceManager from './components/FinanceManager';
import 'antd/dist/reset.css'; 


function App() {


  return (
    <>
      <SideBarM></SideBarM>
      <CardBalance></CardBalance>
      <FinanceManager></FinanceManager>
    </>
  )
}

export default App
