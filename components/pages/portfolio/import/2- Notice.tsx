import React from "react";
import Slogan from "../../services/global/Slogan";

export default function Notice(props: any) {
    const SloganText = props.Text;
    return (
        <div className="Notice">
            <Slogan text={SloganText} variant="Wide Dark" />
        </div>
    );
}
