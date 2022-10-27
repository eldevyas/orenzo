import React from 'react'
import { DefaultButton } from './../core/buttons'; 
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function Footer() {
    const {t} = useTranslation('common')

    let Links: {title: string, href: string}[] = [
        {
            title: t('header.links.home'),
            href: "/"
        },
        {
            title: t('header.links.services'),
            href: "/services"
        },
        {
            title: t('header.links.portfolio'),
            href: "/portfolio"
        },
        {
            title: t('header.links.about'),
            href: "/about"
        },
        {
            title: t('header.links.contact'),
            href: "/contact"
        }
    ];

    return (
        <>
            <div className="Footer">
                <div className="Content">
                    <div className="Identity">
                        <div className="Logo">
                            <Image src="/img/logo.png" alt="Logo" layout="fill" objectFit='cover'/>
                        </div>

                        <p>
                            { t('footer.Info.description') }
                        </p>

                        <DefaultButton bgColor="Red">
                            { t('footer.Info.button') }
                        </DefaultButton>
                    </div>

                    <div className="QuickLinks">
                        <h4>
                            { t('footer.QuickLinks.title') }
                        </h4>

                        <div className="Links">
                            {
                                Links.map((link, index) => {
                                    return <Link key={index} href={link.href}>{link.title}</Link>
                                })
                            }
                        </div>
                        
                    </div>

                    <div className="Connect">
                        <h4>
                            { t('footer.Contact.title') }
                        </h4>

                        <div className="Socials">
                            <div className="SocialLink">
                                <SocialIcon url="https://facebook.com/" className="Icon"/>
                                Facebook
                            </div>
                            <div className="SocialLink">
                                <SocialIcon url="https://instagram.com/" className="Icon"/>
                                Instagram
                            </div>
                            <div className="SocialLink">
                                <SocialIcon url="https://twitter.com/" className="Icon"/>
                                Twitter
                            </div>
                            <div className="SocialLink">
                                <SocialIcon url="https://linkedin.com/" className="Icon"/>
                                Linkedin
                            </div>
                            <div className="SocialLink">
                                <SocialIcon url="https://youtube.com/" className="Icon"/>
                                Youtube
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Info">
                    <p>
                    © Copyright 2022 - Designed by Orenzo - All right reserved
                    </p>

                    <p>
                    Terms of use | Privacy Policy | Cookie Policie
                    </p>
                </div>
            </div>
        </>
    )
}