import React from 'react'
import Image from 'next/image'

export const Card = (props: any) => {
    return (
        <div className={`${props.color} Card`}>
            <div className='Icon'>
                <Image alt="" src={props.icon} width={50} height={50} />
            </div>
            <div className='Title'>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

