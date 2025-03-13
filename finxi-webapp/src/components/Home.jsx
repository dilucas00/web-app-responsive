import "../App.css"
import React from 'react';
import SideBarM  from './SideBarM';
import FinanceManager from './FinanceManager';
import 'antd/dist/reset.css'; 

function Home(){
    return(

        <>
            <SideBarM></SideBarM>
            <FinanceManager></FinanceManager>
        </>

    )
}

export default Home;