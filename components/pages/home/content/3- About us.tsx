import React from 'react';
import Image from 'next/image';
import { DefaultButton } from './../../../core/buttons'

export default function AboutUs() {
    return (
        <>
            <div className="AboutUs">
                <div className="Image">
                    <div className="ImageContainer">
                        <Image src="/img/assets/BusinessManUsingLaptop.png" alt="" layout="fill" objectFit='cover'/>
                    </div>
                </div>

                <div className="Text">
                    <div className="FadedText">
                        About us    
                    </div>  
                    <h1 className="Title">
                        We are <span className="SpanHighlightBlue">Experts</span> in our field<span className="colorDot" color="blue">.</span>
                    </h1>

                    <p className="Description">
                        Tristique vestibulum nam arcu semper aliquam eget scelerisque. Non pulvinar turpis egestas mattis. Lacus felis morbi ut quam. Lacus cras quis cras cras. Nunc tellus vivamus elit, elementum odio penatibus morbi. Dolor semper curabitur massa tincidunt lacus turpis. Aliquam condimentum turpis dolor massa nulla sit potenti luctus erat.                    
                    </p>
                    <div className="Actions">
                        <DefaultButton bgColor="Blue" elevation={0} style={{boxShadow: "none"}}>
                            Contact us
                        </DefaultButton>
                    </div>
                </div>
            </div>
        </> 
    )
}