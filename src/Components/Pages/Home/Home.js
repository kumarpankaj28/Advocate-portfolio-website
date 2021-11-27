import "../../../App.css"

import React from 'react'
import Banner from './Banner'
import About from './About'
import Service from './Services'
import Testimonials from './Testimonials'
import Contact from './Contacts'

export default function Home() {
    return (
        <div>
            <Banner/>
            <About/>
            <Service/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}
