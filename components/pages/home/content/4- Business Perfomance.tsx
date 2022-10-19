import React from 'react';
import Image from "next/image"


// Icons for Cards
import FastTrack from '/public/img/assets/icons/Fast Track.png'
import Goal from '/public/img/assets/icons/Goal.png'
import MoneyBag from '/public/img/assets/icons/Money Bag.png'
import Users from '/public/img/assets/icons/Users.png'



export {};
declare global {
  type StaticImageData = {
    src: string
    height: number
    width: number
    blurDataURL?: string
  };
}


const Card = (props: any) => {
    return (
    <>
        <div className={"Card " + props.class}>
            <div className="Icon">
                <Image src={props.icon} layout="fill" objectFit='cover' quality={100}/>
            </div>

            <div className="Text">
                <div className="Title">
                    { props.title }
                </div>

                <div className="Description">
                    { props.description }
                </div>
            </div>
        </div>
    </>
    )
}


export default function BusinessPerformance() {

    const Cards: {title: string, description: string, icon: StaticImageData, class: string}[] = [
        {
            title: "Reach more Customers",
            description: "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            icon: Users,
            class: "Normal"
        },
        {
            title: "Cost Effective",
            description: "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            icon: MoneyBag,
            class: "Special"

        },
        {
            title: "Customized Services",
            description: "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            icon: Goal,
            class: "Normal"
        },
        {
            title: "Trained Professionals",
            description: "Viverra sit nulla natoque consectetur. Convallis aenean cursus ut amet dui blandit sem id. Arcu, ac congue penatibus at. Proin quis commodo consectetur nisl sem nisl sed.",
            icon: FastTrack,
            class: "Normal"
        }
    ]



    return (
        <div className="BusinessPerformance">
            <div className="Title">
                <h1>We Can Improve <span className="SpanHighlightRed">Your Business Performance</span> And Gain More Customers<span className="colorDot" color="red">.</span></h1>
                <p>
                    Our creative team is focused on stunning and results driven solutions for small to medium businesses all over the world.
                </p>
            </div>

            <div className="Cards">
                {
                    Cards.map((card, index) => {
                        console.log(card)
                        return <Card key={index} title={card.title} description={card.description} icon={card.icon} class={card.class}/>
                    })
                }
            </div>
        </div>    
    )
}