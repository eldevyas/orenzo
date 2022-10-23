import React, {useState, useEffect} from 'react';
import Image from 'next/image';


const Companies = [
    "/img/assets/partners/SGSB.png",
    "/img/assets/partners/Microsoft.png",
    "/img/assets/partners/Netflix.png",
    "/img/assets/partners/Bonfire.png",
    "/img/assets/partners/Google.png",
];


export default function TrustedPartners() {

    return (
        <>
            <div className="TrustedPartners">
                <div className="Title">Our Trusted Partners</div>

                <section className="Partners">
                    <div className="Wrapper">
                            {
                                Companies.map((Partner, index) => {
                                    return (
                                        <div key={index} className='Slide'>
                                            <Image alt="" src={Partner} layout="fill" objectFit="contain"/>
                                        </div>
                                    )
                                })
                            }
                            {
                                Companies.map((Partner, index) => {
                                    return (
                                        <div key={index} className='Slide'>
                                            <Image alt="" src={Partner} layout="fill" objectFit="contain"/>
                                        </div>
                                    )
                                })
                            }
                    </div>
                </section>
            </div>
        </>
    )
}