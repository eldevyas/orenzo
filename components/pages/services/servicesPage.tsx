import React, {useState, useEffect} from 'react'
import Header from '../../layout/header'
import Image from "next/image"
import Footer from '../../layout/footer'
import { useRouter } from 'next/router'
import { DefaultButton } from "./../../core/buttons"
import Stack from '@mui/material/Stack';


export default function ServicesPage() {
    const router = useRouter()

    return (
        <div className="ServicesPage">
            <div className="Background"></div>
            <Header/>

            <Stack spacing={2} justifyContent="center" alignItems="center">
                <Stack spacing={1}  justifyContent="center" alignItems="center">
                    <h1>Put the title here</h1>
                    <p>And the Description here</p>
                </Stack>



                <Stack direction="row" spacing={2}>
                    <DefaultButton color="Red" onClick={ () => { router.push('/services', '/services', { locale: 'en' }) } }>
                        English Locale
                    </DefaultButton>
                    <DefaultButton color="Blue" onClick={ () => { router.push('/services', '/services', { locale: 'fr' }) } }>
                        French Locale
                    </DefaultButton>
                </Stack>
            </Stack>

            <Footer/>
        </div>
    )
}