import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { Router, useRouter } from 'next/router';
import SelectLocal from './utils/SelectLocal';
import SelectPage from './utils/SelectPage';
import { useTranslation } from 'react-i18next'


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
    const {t} = useTranslation('common')
    const router = useRouter();

    let Links: {title: string, 
        href: string, 
        type: string, 
        pages?: {
            title: string;
            href: string;
        }[]
    }[] = [
        {
            title: t('header.links.home'),
            href: "/",
            type: "default"
        },
        {
            title: t('header.links.services'),
            href: "/services",
            type: "selectPage",
            pages : [
                {
                    title: "Design",
                    href: "/services/design"
                },
                {
                    title: "Development",
                    href: "/services/development"
                },
                {
                    title: "Marketing",
                    href: "/services/marketing"
                }
            ]
        },
        {
            title: t('header.links.portfolio'),
            href: "/portfolio",
            type: "default"
        },
        {
            title: t('header.links.about'),
            href: "/about",
            type: "default"
        },
        {
            title: "",
            href: "",
            type: "selectLocal"
        },
        {
            title: t('header.links.contact'),
            href: "/contact",
            type: "contact"
        },
    ];

    return (
        <div className="NavBar Desktop">
            <div className="Logo">
                <Image src="/img/logo.png" alt="Logo" layout='fill' objectFit='cover' />
            </div>
            <div className="Navigation">
                {
                    Links.map((link: any, index: number) => {
                        switch(link.type){
                            case "selectLocal":
                                return (
                                    <SelectLocal key={index} data-text={t('header.links.language')}/>
                                );
                                break;
                            case "selectPage": 
                                return (
                                    <SelectPage key={index} data-text={t('header.links.services')} pages={link.pages}/>
                                )
                                break;
                            case "contact":
                                return (
                                    <Button variant="contained" className="ActionButton" onClick={() => { router.push(link.href) } }>
                                        {t('header.links.contact')}
                                    </Button>
                                );
                                break;
                            case "default": 
                                return (
                                    <ActiveButton key={index} href={link.href}>
                                        {link.title}
                                    </ActiveButton>
                                );
                                break;
                        }
                    })
                }
            </div>
        </div>
    );
}
