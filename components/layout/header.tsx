import React, { useState, useEffect } from 'react'
import DesktopHeader from './imports/DesktopHeader';


const NavigationLogo = "";
const NavigationLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Services",
        href: "/"
    },
    {
        title: "Portfolio",
        href: "/"
    },
    {
        title: "About us",
        href: "/"
    }
]

export default function Header() {
    return (
        <>
            <DesktopHeader Links={ NavigationLinks } />
        </>
    )
}