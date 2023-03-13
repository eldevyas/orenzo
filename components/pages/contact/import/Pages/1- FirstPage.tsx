import React from "react";
import { DefaultButton } from "../../../../core/buttons";
import JumpingDiv from "../Utils/JumpDiv";

export default function FirstPage(props: any) {
    return (
        <div className="FirstPage">
            <div className={"Title"}>
                Are you okay to answer <span>5 questions</span> in{" "}
                <span>60 seconds</span>?
            </div>
            <div className="Buttons">
                <JumpingDiv>
                    <DefaultButton
                        bgColor="Red"
                        onClick={() => {
                            props.setPage(props.PageTypes.RockPage);
                        }}
                    >
                        Yes, let&apos;s rock.
                    </DefaultButton>
                </JumpingDiv>
                <DefaultButton
                    bgColor="White"
                    onClick={() => {
                        props.setPage(props.PageTypes.DealPage);
                    }}
                >
                    No, let&apos;s deal.
                </DefaultButton>
            </div>
        </div>
    );
}
