import React from 'react'
import Header from './Header'
import Footer from './Footer'
import RegForm from './registration/RegForm'

export default function PageLayout() {
    return (
        <div>
            <Header></Header>
            <RegForm></RegForm>
            <Footer></Footer>
        </div>
    )
}
