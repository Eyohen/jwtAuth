import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './Header'
import AuthBox from './AuthBox'


function Layout() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<AuthBox/>} />
            <Route path="/register" element={<AuthBox register/>} />
        </Routes>
       
    </BrowserRouter>
  )
}

export default Layout