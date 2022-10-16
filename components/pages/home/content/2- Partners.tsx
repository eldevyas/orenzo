import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import $ from 'jquery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StyledSlider, Box } from "./utils/Box.styled";



export default function TrustedPartners() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
    };

    return (
        <>
            <div className="TrustedPartners">
                <div className="Title">Our Trusted Partners</div>

                <section className="Partners">

                    <StyledSlider {...settings}>
                        <div className="slide"><img src="/img/assets/partners/SGSB.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Microsoft.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Netflix.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Bonfire.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Google.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/SGSB.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Microsoft.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Netflix.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Bonfire.png"/>
                        </div>

                        <div className="slide"><img src="/img/assets/partners/Google.png"/>
                        </div>
                    </StyledSlider>
                </section>
            </div>
        </>
    )
}