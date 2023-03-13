import React from 'react'
import Image from 'next/image'
const Team = () => {
    return (
        <div className='Team'>
            <div className='Left'>
                <h2 className='Title'>The <span className='SpanHighlightBlue'>Orenzo</span> Team </h2>
                <div className='WhoAreWe'>
                    <h2 className='Title'>Who are we?</h2>
                    <p className='Description'>
                        We are a team of designers, developers, data managers, marketers and talented individuals. Our big concern is the work we create and have fun doing.
                    </p>
                </div>
                <div className="OurMission">
                    <h2 className="Title">What is our mission?</h2>
                    <p className="Description">It's simple ! Your work is our mission. We work hard every day to design innovative solutions that help you collect more, achieve more, and grow your amazing business around the world. We believe that what we do can help change the world.</p>
                </div>
            </div>
            <div className='Right'>
                <Image src="/public/img/assets/about/WorkInBeanbag.png" alt="" width={100} height={100} />
            </div>
        </div>
    )
}

export default Team