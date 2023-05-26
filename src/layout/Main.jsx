import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/shared/NavBar';
import Footer from '../components/shared/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='min-h-[calc(100vh-136px)]'>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;