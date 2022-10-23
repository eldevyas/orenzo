import React from 'react'
import Rating from '@mui/material/Rating';
import Image from 'next/image'



function Comment(props: any) {
    return (
        <>
            <div className="Comment">
                <div className="Stars">
                    <Rating name="read-only" value={4} readOnly />
                </div>

                <div className="Text">
                    Sit adipiscing feugiat aliquam elementum tellus iaculis urna, purus pulvinar. Dolor habitasse vitae nulla ut ultrices nulla venenatis, condimentum. In augue sapien sed nascetur tellus. Nec donec eu luctus fermentum pellentesque viverra venenatis, mauris. Sit lobortis gravida vitae ipsum viverra feugiat. Sapien senectus orci.
                </div>

                <div className="Person">
                    <div className="Picture">
                        <Image alt="" src="/img/assets/BusinessManUsingLaptop.png" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="Name">
                        <div className="FullName">Yassine Chettouch</div>
                        <div className="Profession">Developer</div>
                    </div>
                </div>
            </div>
        </>
    )
}


function CommentDisplay(props: any) {
    return(
        <>
        
        </>
    )
}


export default function Testimonials() {
    return (
        <>
            <div className="Testimonials">
                <div className="Title">
                    <h1>
                        What Clients <span className="SpanHighlightBlue">Say</span>.
                    </h1>
                    <p>
                        Pellentesque nulla in adipiscing lacus curabitur.
                        <br/>
                        Proin id pellentesque laoreet pretium sem pharetra. 
                    </p>
                </div>

                <div className="CommentsDisplay">
                    <Comment/>
                    <Comment/>
                </div>

                <div className="Summary">
                    <div className="Index Active"></div>
                    <div className="Index"></div>
                    <div className="Index"></div>
                </div>
            </div>

        </>
    )
}