import React, { useState, useEffect } from 'react'
import DesktopHeader from './imports/DesktopHeader';
import MobileHeader from './imports/MobileHeader';

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