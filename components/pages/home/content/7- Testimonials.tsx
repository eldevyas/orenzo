import React from 'react'
import Rating from '@mui/material/Rating';
import Image from 'next/image'
import { Trans, useTranslation } from 'react-i18next'



function Comment(props: any) {
    const {t} = useTranslation('common');

    return (
        <>
            <div className="Comment">
                <div className="Stars">
                    <Rating name="read-only" value={4} readOnly />
                </div>

                <div className="Text">
                    { t('home.content.Testimonials.comments.C1.comment') }
                </div>

                <div className="Person">
                    <div className="Picture">
                        <Image alt="" src="/img/assets/BusinessManUsingLaptop.png" layout="fill" objectFit="cover"/>
                    </div>

                    <div className="Name">
                        <div className="FullName">
                            { t('home.content.Testimonials.comments.C1.name') }
                        </div>
                        <div className="Profession">
                            { t('home.content.Testimonials.comments.C1.profession') }
                        </div>
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
    const {t} = useTranslation('common');

    return (
        <>
            <div className="Testimonials">
                <div className="Title">
                    <h1>
                        <Trans 
                            i18nKey="home.content.Testimonials.title"
                            components={{
                                BlueSpan: <span className="SpanHighlightBlue"/>,
                                BlueDot: <span className="colorDot" color="blue"/>,
                                RedSpan: <span className="SpanHighlightRed"/>,
                                RedDot: <span className="colorDot" color="red"/>,
                                br: <br/>
                            }}
                        /> 
                    </h1>
                    <p>
                        <Trans 
                            i18nKey="home.content.Testimonials.description"
                            components={{
                                BlueSpan: <span className="SpanHighlightBlue"/>,
                                BlueDot: <span className="colorDot" color="blue"/>,
                                RedSpan: <span className="SpanHighlightRed"/>,
                                RedDot: <span className="colorDot" color="red"/>,
                                br: <br/>
                            }}
                        /> 
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