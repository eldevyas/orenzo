import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Image from "next/image"
import LandingSection from './content/LandingSection'

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="Background">
                <Image src="/img/assets/Grid.png" alt="Grid" layout="fill" objectFit='cover'/>
            </div>
            <Header/>
            <LandingSection/>
        </div>
    )
}