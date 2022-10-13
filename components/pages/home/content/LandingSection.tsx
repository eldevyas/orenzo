import React from "react"
import { DefaultButton } from "./../../../core/buttons";

export default function LandingSection() {
    return(
        <div className="LandingSection">
            <div className="Text">
                <h1 className="Title">
                    <span className="SpanHighlight" color="blue">Measurable</span> & <span className="SpanHighlight" color="red">Effective</span> Results For Customers<span className="colorDot" color="red">.</span>
                </h1>

                <p className="Description">
                    Our creative team is focused on stunning and results driven solutions for small to medium businesses all over the world.
                </p>

                <div className="Actions">
                    <DefaultButton color="Red">
                        Get a quote
                    </DefaultButton>
                </div>
            </div>

            <div className="Image">
                <div className="Wrapper">
                </div>
            </div>
        </div>
    )
}