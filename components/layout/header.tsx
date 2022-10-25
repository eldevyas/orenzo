import React, { useState, useEffect } from 'react'
import DesktopHeader from './imports/DesktopHeader';
import MobileHeader from './imports/MobileHeader';

import { useTranslation } from 'react-i18next'



const NavigationLogo = "";
const NavigationLinks = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Services",
        href: "/services"
    },
    {
        title: "Portfolio",
        href: "/portfolio"
    },
    {
        title: "About us",
        href: "/about"
    }
]

class ResponsiveHeader extends React.Component<{}, { isDesktop: boolean }>  {
    constructor(props: any) {
        super(props);
        this.state = {
            isDesktop: false,
        };
    
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }
  
    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }
  
    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1000 });
    }
  
    render() {
        const isDesktop = this.state.isDesktop;
            
        return (
            <>            
                {isDesktop ? <DesktopHeader Links={ NavigationLinks }/> : <MobileHeader Links={ NavigationLinks }/>}
            </>
        );
    }
}

export default function Header() {
    return (
        <>
            <ResponsiveHeader/>
        </>
    )
}