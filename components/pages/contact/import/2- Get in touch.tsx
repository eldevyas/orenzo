import React from "react";
import Select from "react-select";
import Creatable, { useCreatable } from "react-select/creatable";

interface Properties {
    Title: string;
    Description: string;
    Form: {
        Name: {
            Label: string;
            Placeholder: string;
        };
        Email: {
            Label: string;
            Placeholder: string;
        };
        Interest: {
            Label: string;
            Placeholder: string;
            Options: {
                Design: string;
                Development: string;
                Marketing: string;
                Other: string;
            };
        };
        Budget: {
            Label: string;
            Placeholder: string;
            Options: {
                "-1000": string;
                "1000-5000": string;
                "5000-10000": string;
                "+10000": string;
            };
        };
        Message: {
            Label: string;
            Placeholder: string;
        };
    };
}

export default function GetInTouch(props: Properties) {
    let Title = props.Title;
    let Description = props.Description;

    const InterestOptions = [
        { value: "Design", label: props.Form.Interest.Options.Design },
        {
            value: "Development",
            label: props.Form.Interest.Options.Development,
        },
        { value: "Marketing", label: props.Form.Interest.Options.Marketing },
        { value: "Other", label: props.Form.Interest.Options.Other },
    ];

    const BudgetOptions = [
        { value: "-10,000 Dh", label: props.Form.Budget.Options["-1000"] },
        {
            value: "10,000 Dh - 50,000 Dh",
            label: props.Form.Budget.Options["1000-5000"],
        },
        {
            value: "50,000 Dh - 100,000 Dh",
            label: props.Form.Budget.Options["5000-10000"],
        },
        { value: "+100,000 Dh", label: props.Form.Budget.Options["+10000"] },
    ];

    const ElementsRef = React.useRef<HTMLDivElement>(null);
    const handleMouseMove = (e: any) => {
        if (ElementsRef != null) {
            const Elements: any = ElementsRef.current!.getElementsByClassName(
                "PageContent__GetInTouch__Form__Field__Container"
            );

            const ElementsRect = ElementsRef.current!.getBoundingClientRect();

            for (const Element of Elements) {
                const rect = Element.getBoundingClientRect();
                const x = e.clientX - rect.x;
                const y = e.clientY - rect.y;

                Element.style.setProperty("--mouse-x", `${x}px`);
                Element.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    };

    return (
        <div className="PageContent__GetInTouch">
            <div className="PageContent__GetInTouch__Heading TorchLightEffect">
                <div className="PageContent__GetInTouch__Heading__Title">
                    {Title}
                </div>
                <div className="PageContent__GetInTouch__Heading__Description">
                    {Description}
                </div>
            </div>

            <div
                className="PageContent__GetInTouch__Form"
                ref={ElementsRef}
                onMouseMove={handleMouseMove}
            >
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Name.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <input
                            type="text"
                            placeholder={props.Form.Name.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onFocus={(e) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e) => {
                                e.target.classList.remove("Focused");
                            }}
                        />
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Email.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <input
                            type="text"
                            placeholder={props.Form.Email.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input"
                            onFocus={(e) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e) => {
                                e.target.classList.remove("Focused");
                            }}
                        />
                    </div>
                </div>
                <div className="PageContent__GetInTouch__Form__Field">
                    <div className="PageContent__GetInTouch__Form__Field__Label">
                        {props.Form.Interest.Label}
                    </div>
                    <div className="PageContent__GetInTouch__Form__Field__Container">
                        <Select
                            placeholder={props.Form.Interest.Placeholder}
                            className="PageContent__GetInTouch__Form__Field__Container__Input react-select-container"
                            classNamePrefix="react-select"
                            onFocus={(e: any) => {
                                e.target.classList.add("Focused");
                            }}
                            onBlur={(e: any) => {
                                e.target.classList.remove("Focused");
                            }}
                            options={InterestOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
