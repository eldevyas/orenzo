import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import SelectLocal from './utils/SelectLocal';



function ActiveButton({ children, href }: {children: string; href: string}) {
    const router = useRouter()

    const currentLink = router.asPath;
    const indexOfSlash = currentLink.indexOf('/', 2);

    const Link = indexOfSlash === -1 ? currentLink : currentLink.substring(0, indexOfSlash);

    const currentClass = Link === href ? 'Active' : 'Inactive'  
    const handleClick = (e: any) => {
      e.preventDefault()
      router.push(href)
    }
  
    return (
      <Button variant="text" className={"NavButton" + " " + currentClass} href={href} onClick={handleClick}>
        { children }
      </Button>
    )
}

export default function DesktopHeader(props: any) {
    let Links: any = props.Links;

    return (
        <div className="NavBar Desktop">
            <div className="Logo">
                <Image src="/img/logo.png" alt="Logo" layout='fill' objectFit='cover' />
            </div>
            <div className="Navigation">
                {
                    Links.map((link: any, index: number) => (
                        <ActiveButton key={index} href={link.href}>
                            {link.title}
                        </ActiveButton>
                    ))
                }

                <SelectLocal/>

                <Button variant="contained" className="ActionButton">
                    Contact
                </Button>
            </div>
        </div>
    );
}
