import { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import { DefaultButton } from "../../../../core/buttons";
import CloseIcon from "@mui/icons-material/Close";
import Chip from "@mui/material/Chip";
import { ProgrammingRange } from "./data/programmingRange";
import { useTranslation } from "next-i18next";

const Language = (props: any) => {
    return (
        <>
            <Chip
                className="Chip"
                label={props.Name}
                icon={<props.Logo />}
                clickable
            />
        </>
    );
};

export default function TechnologyStack(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation("common");
    console.log(t);

    const Title = props.Title;
    const Description = props.Description;
    const Button = props.Button;

    return (
        <>
            <div className="TechnologyStack">
                <div className="Column"></div>
                <div className="Column">
                    <div className="Text">
                        <div className="Title">{Title}</div>
                        <div className="Description">{Description}</div>
                    </div>
                    <DefaultButton
                        bgColor="White"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    >
                        {Button}
                    </DefaultButton>
                </div>
            </div>

            {isOpen ? (
                <div className="Technologies" dir="ltr">
                    <div className="Container">
                        <div className="Head">
                            <IconButton
                                className="CloseBtn"
                                aria-label="Close"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        </div>

                        <div className="Body">
                            {ProgrammingRange.map((Lang, index) => {
                                return (
                                    <Language
                                        key={index}
                                        Name={Lang.name}
                                        Logo={Lang.logo}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    );
}
