import React from "react";
import Image from "next/image";
import MainCard from "../../services/global/MainCard";
import Bali from "/public/img/assets/illustrations/Bali.jpg";
import Folder from "/public/img/assets/3D-icons/Folder.png";

export const Card = (props: any) => {
    const Properties = {
        Main: Folder,
        Illustration: Bali,
        title: props.Title,
        description: props.Description,
        button: props.Button,
        href: "#Explainer",
    };
    return <MainCard {...Properties} />;
};

export default Card;
