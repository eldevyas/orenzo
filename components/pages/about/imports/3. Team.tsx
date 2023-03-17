import React from "react";
import Image from "next/image";
import { DefaultButton } from "../../../core/buttons";
import { Trans } from "next-i18next";
const Team = (props: any) => {
    return (
        <div className="Team">
            <div className="Text">
                {/* <div className="FadedText">About us</div> */}
                <h1 className="Title">
                    <Trans
                        i18nKey="about.content.Team.Title"
                        components={{
                            BlueSpan: <span className="SpanHighlightBlue" />,
                            BlueDot: <span className="colorDot" color="blue" />,
                        }}
                    />
                </h1>

                <p className="Paragraph">
                    <div className="Subtitle">{props.FirstSubTitle}</div>
                    <div className="Description">{props.FirstDescription}</div>
                </p>
                <p className="Paragraph">
                    <div className="Subtitle">{props.SecondSubTitle}</div>
                    <div className="Description">{props.SecondDescription}</div>
                </p>
            </div>

            <div className="Image">
                <div className="ImageContainer">
                    <Image
                        src="/img/assets/about/WorkInBeanbag.png"
                        alt=""
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Team;
