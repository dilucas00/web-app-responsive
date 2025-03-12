import "../App.css"
import React from 'react';
import SideBarM  from './SideBarM';
import CardBalance from './CardBalance';
import FinanceManager from './FinanceManager';
import 'antd/dist/reset.css'; 

function Home(){
    return(

        <>
            <SideBarM></SideBarM>
            <CardBalance></CardBalance>
            <FinanceManager></FinanceManager>
        </>

    )
}

export default Home;