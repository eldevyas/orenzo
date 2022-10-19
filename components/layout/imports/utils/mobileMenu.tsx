import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PublicIcon from '@mui/icons-material/Public';
import Image from 'next/image';
// Items Icons
import HomeIcon from '@mui/icons-material/Home';

import { motion } from "framer-motion";


export default function MobileMenu(props: any) {

    const handleClicked = props.handleClicked;
    const [positionX, setPositionX] = useState("");
    const [positionY, setPositionY] = useState("");

    const Container = useRef<HTMLDivElement>(null);


    const Items: {icon: any, title: string, positionLeft: string, positionTop: string}[] = [
        {"icon": <HomeIcon/>, "title": 'Home', "positionLeft": '0%', "positionTop": '0%'},
        {"icon": <DesignServicesIcon/>, "title": 'Services', "positionLeft": '50%', "positionTop": '0%'},
        {"icon": <AutoStoriesIcon/>, "title": 'About us', "positionLeft": '0%', "positionTop": 'calc(100%/3 * 1)'},
        {"icon": <FolderOpenIcon/>, "title": "Portfolio", "positionLeft": '50%', "positionTop": 'calc(100%/3 * 1)'},
        {"icon":<LocalPostOfficeIcon/>, "title": "Contacts", "positionLeft": '0%', "positionTop": 'calc(100%/3 * 2)'},
        {"icon": <PublicIcon/>, "title": 'Language', "positionLeft": '50%', "positionTop": 'calc(100%/3 * 2)'}
    ]


    const handleClickItem = (e: any) => {
        const TargetData: {id: string, positionLeft: string, positionTop: string} = {
            id: e.target.id,
            positionLeft: e.target.getAttribute('data-positionleft'),
            positionTop: e.target.getAttribute('data-positiontop')
        }

        // Get all the Items and remove their red color
        const itemDivs = document.querySelectorAll(".Items .Item");

        for (let i = 0; i < itemDivs.length; i++) {
            const item: any = itemDivs[i];

            item.style.color = "#fff";
        }

        // Add the red color to the current item
        setTimeout(() => {e.target.style.color = "#fff"}, 100);

        // Get the element of the Current Item
        let Current: any = document.getElementById("Current");
        
        // Give it the positions of the current item
        // Current.style.left = TargetData.positionLeft;
        // Current.style.top = TargetData.positionTop;
        // setTimeout(() => {Current.style.top = TargetData.positionTop}, 0); // Delayed for smoother effect.

        let X = TargetData.positionLeft;
        let Y = TargetData.positionTop;
        
        if (Container.current != null) {
            // 👉️ TypeScript knows that ref is not null here
            let Width = Container.current.offsetWidth
            let Height = Container.current.offsetHeight

            switch (X) {
                case '0%':
                    setPositionX("0px");
                    break;
                case '50%':
                    setPositionX(String(Width / 2) + "px");
                    break;
            }
    
            switch (Y) {
                case '0%':
                    setPositionY("0px");
                    break;
                case 'calc(100%/3 * 1)':
                    setPositionY(String(Height / 3 * 1) + "px");
                    break;
                case "calc(100%/3 * 2)":
                    setPositionY(String(Height / 3 * 2) + "px");
                    break;
            }
        }

    }

    return (
        <>
            <div key="modal" className="MobileMenu">
                <div className="Main">
                    <div className="Logo">
                        <Image src="/img/full-white.png" layout="fill" objectFit="cover"/>
                    </div>

                    <Button variant="outlined" className="IconButton White" onClick={handleClicked}>
                        <CloseIcon className="MenuIcon"/>
                    </Button>
                </div>

                <div className="Items" ref={Container}>
                    {
                        Items.map((Item, index) => {
                            return (
                                <div key={index} className="Item" id={`${index}`} onClick={(e: any) => {handleClickItem(e)}} data-positionleft={Item.positionLeft} data-positiontop={Item.positionTop}>
                                    {Item.icon}
                                    {Item.title}
                                </div>
                            )
                        })
                    }

                    <motion.div className="Current" id="Current" initial="false" animate={{ x: positionX, y: positionY }}></motion.div>
                </div>
            </div>
        </>
    )
}