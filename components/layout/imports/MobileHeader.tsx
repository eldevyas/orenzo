import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import MobileMenu from './utils/mobileMenu'



export interface IOpenMenu {
    isOpen: boolean;
}



export default function DesktopHeader(props: any) {
    let Links: any = props.Links;

    const [OpenMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setTimeout(() => {setOpenMenu(!OpenMenu)}, 500);
    }


    return (
        <>        
            <div className="NavBar Mobile">
                <div className="Logo">
                    <Image src="/img/logo.png" alt="Logo" layout='fill' objectFit='cover' />
                </div>

                <div className="MenuButton">
                    <Button variant="text" className="IconButton" onClick={handleClick}>
                        <MenuIcon className="MenuIcon"/>
                    </Button>
                </div>
            </div>

            { OpenMenu ? 
            <>
                <MobileMenu handleClicked={handleClick} />
            </>
            :
            <>
            
            </>
            }     
        </>
    );
}