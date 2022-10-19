import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Image from "next/image"
import LandingSection from './content/1- LandingSection'
import TrustedPartners from './content/2- Partners'
import AboutUs from './content/3- About us'
import BusinessPerformance from './content/4- Business Perfomance'
import Services from './content/5- Services'

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="Background"></div>
            <Header/>
            <LandingSection/>
            <TrustedPartners/>
            <AboutUs/>
            <BusinessPerformance/>
            <Services/>
        </div>
    )
}