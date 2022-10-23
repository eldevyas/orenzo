import React from 'react'
import Image from 'next/image'


const Card = (props: any) => {
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
                        Find Out More
                </div>
            </div>
        </>
    )
}


export default function Services() {

    const Cards: {title: string, description: string, icon: string}[] = [
        {
            title: "Design and programming of websites and applications",
            description: "This is with the highest quality in terms of design, coding and various aspects of the site, which provides our customers with modification in the future, as we take into account all the options that the customer may need so that he does not have to design the site again, which may cost money and time",
            icon: "/img/assets/3D-icons/Google Code.png"
        },
        {
            title: "Graphic design and print",
            description: "Design is part of our core personality. We develop new ideas from scratch based on available materials and information provided. We also provide customized solutions to reach our marketing goals. Through design we create the optimal communication picture that will work perfectly for the benefit of your business.",
            icon: "/img/assets/3D-icons/Design.png"
        },
        {
            title: "Advertising campaigns",
            description: "Advertising campaigns improve the reach of a company's website or social media accounts, but they require a lot of experience and good planning to ensure good results.",
            icon: "/img/assets/3D-icons/Commercial.png"
        },
        {
            title: "E-Marketing",
            description: "We market events and events through all websites and electronic platforms and ensure that the public is informed and attended",
            icon: "/img/assets/3D-icons/Goal.png"
        },
        {
            title: "Building a business identity",
            description: "The brand identity has become the biggest strategy that generates millions of dollars for entrepreneurs, so it was necessary for the Media Man team to rely on all the foundations in their work to build a harmonious brand identity for clients",
            icon: "/img/assets/3D-icons/Business.png"
        },
        {
            title: "visual production",
            description: "We have a creative team in the fields of writing, directing and editing to provide you with high services, using the latest technical technologies and innovative ideas to produce works that can remain in the public's memory for as long as possible.",
            icon: "/img/assets/3D-icons/Xlarge Icons.png"
        }
    ]

    return (
        <>
            <div className="Services">
                <div className='Title'>
                    <h1>
                        We Do <span className="SpanHighlightBlue">Everything</span>.
                    </h1>

                    <p>
                        We work hard to provide the best quality for you and we never choose easy and faster ways to quickly break up with your project.
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