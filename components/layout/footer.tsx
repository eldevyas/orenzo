import React from 'react'
import { DefaultButton } from './../core/buttons'; 
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'


export default function Footer() {
    return (
        <>
            <div className="Footer">
                <div className="Content">
                    <div className="Identity">
                        <div className="Logo">
                            <Image src="/img/logo.png" alt="Logo" layout="fill" objectFit='cover'/>
                        </div>

                        <p>
                            A ac mus sem in ullamcorper. Integer leo pellentesque tempor ac enim gravida dui. Netus eget nullam volutpat faucibus diam cras euismod. In blandit at magna libero, tellus eleifend.
                        </p>

                        <DefaultButton color="Red">
                            Contact us
                        </DefaultButton>
                    </div>

                    <div className="QuickLinks">
                        <h4>Quick Links</h4>

                        <div className="Links">
                            <p>Home</p>
                            <p>Services</p>
                            <p>Contact</p>
                            <p>About us</p>
                            <p>Portfolio</p>
                        </div>
                        
                    </div>

                    <div className="Connect">
                        <h4>Connect with us</h4>

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