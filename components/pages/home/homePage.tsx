import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Image from "next/image"
import LandingSection from './content/1- LandingSection'
import TrustedPartners from './content/2- Partners'

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="Background"></div>
            <Header/>
            <LandingSection/>
            <TrustedPartners/>
        </div>
    )
}