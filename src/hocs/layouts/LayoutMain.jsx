// import { connect } from "react-redux";
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/navigation/Navbar'
import Footer from 'components/navigation/Footer'


const Layout = () => (
    <React.Fragment>
        
        <Navbar/>
        <main className="py-2 px-2 lg:mx-14  xs:mx-0">
            <Outlet /> {/* Aquí se renderiza Home, Cases, etc. */}
        </main>
        
        <Footer/>
    </React.Fragment>
)

export default Layout

