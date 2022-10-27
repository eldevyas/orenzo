import React from 'react'
import Image from 'next/image'
import { Trans, useTranslation } from 'react-i18next'


const Card = (props: any) => {
    const { t } = useTranslation('common');

    return (
        <>
            <div className="Card">
                <div className="Content">
                    <div className="Title">
                        <div className="Icon">
                            <Image alt="" src={props.icon} layout="fill" objectFit="cover"/>
                        </div>
                        <h3>{props.title}</h3>
                    </div>

                    <p>
                        {props.description}
                    </p>
                </div>

                <div className="Button">
                        { t('home.content.Services.more') }
                </div>
            </div>
        </>
    )
}


export default function Services() {
    const { t } = useTranslation('common');

    const Cards: {title: string, description: string, icon: string}[] = [
        {
            title: t('home.content.Services.cards.programming.title'),
            description: t('home.content.Services.cards.programming.description'),
            icon: "/img/assets/3D-icons/Google Code.png"
        },
        {
            title: t('home.content.Services.cards.design.title'),
            description: t('home.content.Services.cards.design.description'),
            icon: "/img/assets/3D-icons/Design.png"
        },
        {
            title: t('home.content.Services.cards.advertising.title'),
            description: t('home.content.Services.cards.advertising.description'),
            icon: "/img/assets/3D-icons/Commercial.png"
        },
        {
            title: t('home.content.Services.cards.marketing.title'),
            description: t('home.content.Services.cards.marketing.description'),
            icon: "/img/assets/3D-icons/Goal.png"
        },
        {
            title: t('home.content.Services.cards.business.title'),
            description: t('home.content.Services.cards.business.description'),
            icon: "/img/assets/3D-icons/Business.png"
        },
        {
            title: t('home.content.Services.cards.visual.title'),
            description: t('home.content.Services.cards.visual.description'),
            icon: "/img/assets/3D-icons/Xlarge Icons.png"
        }
    ]

    return (
        <>
            <div className="Services">
                <div className='Title'>
                    <h1>
                        <Trans 
                        i18nKey="home.content.Services.title"
                        components={{
                            BlueSpan: <span className="SpanHighlightBlue"/>,
                            BlueDot: <span className="colorDot" color="blue"/>,
                            RedSpan: <span className="SpanHighlightRed"/>,
                            RedDot: <span className="colorDot" color="red"/>
                        }}
                        /> 
                    </h1>

                    <p>
                        { t('home.content.Services.description') }
                    </p>
                </div>
                

                <div className="Cards">
                    {Cards.map((card, index) => {
                        return <Card key={index} title={card.title} description={card.description} icon={card.icon}/>
                    })}
                </div>
            </div>
        </>
    )
}