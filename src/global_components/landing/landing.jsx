import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import NewsLatter from '../newslatter/newslatter';
function Landing() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Landing