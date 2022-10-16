import React from "react"
import { DefaultButton, IconTextButton } from "./../../../core/buttons";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function LandingSection() {
    return(
        <div className="LandingSection">
            <div className="Text">
                <h1 className="Title">
                    <span className="SpanHighlightBlue">Measurable</span> & <span className="SpanHighlightRed">Effective</span> Results For Customers<span className="colorDot" color="red">.</span>
                </h1>

                <p className="Description">
                    Our creative team is focused on stunning and results driven solutions for small to medium businesses all over the world.
                </p>

                <div className="Actions">
                    <DefaultButton color="Red" elevation={0}>
                        Get a quote
                    </DefaultButton>

                    <IconTextButton color="Red" icon={<ExpandCircleDownIcon/>}>
                        Learn More
                    </IconTextButton>
                </div>
            </div>

            <div className="Image">
                <div className="Wrapper">
                    <img src="/img/assets/BusinessMan.png" className="BusinessMan" alt="BusinessMan"/>
                    <img src="/img/assets/Team.png" className="Team"/>
                    <img src="/img/assets/Clients.png" className="Clients"/>
                    <img src="/img/assets/Projects.png" className="Projects"/>
                    <img src="/img/assets/Experience.png" className="Experience"/>
                </div>
            </div>
        </div>
    )
}