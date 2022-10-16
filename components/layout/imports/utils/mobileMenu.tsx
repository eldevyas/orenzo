import React from "react";
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


export default function MobileMenu(props: any) {

    const handleClicked = props.handleClicked;


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
        Current.style.left = TargetData.positionLeft;
        // Current.style.top = TargetData.positionTop;
        setTimeout(() => {Current.style.top = TargetData.positionTop}, 100); // Delayed for smoother effect.
    }

    return (
        <>
            <div className="MobileMenu">
                <div className="Main">
                    <div className="Logo">
                        <Image src="/img/white-black-logo.png" layout="fill" objectFit="cover"/>
                    </div>

                    <Button variant="outlined" className="IconButton White" onClick={handleClicked}>
                        <CloseIcon className="MenuIcon"/>
                    </Button>
                </div>

                <div className="Items">
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

                    <div className="Current" id="Current">

                    </div>
                </div>
            </div>
        </>
    )
}