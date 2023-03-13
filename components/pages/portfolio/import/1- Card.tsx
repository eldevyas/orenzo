import React from "react";
import MainCard from "../../services/global/MainCard";
import Illustration from "/img/assets/illustrations/Waves.jpg";
import Coffee from "/public/img/assets/3D-icons/Coffee.png";

export default function Card(props: any) {
    const Properties = {
        Main: Coffee,
        Illustration: Illustration,
        title: props.Title,
        description: props.Description,
        button: props.Button,
        href: "#StandOut",
    };

    return <MainCard {...Properties} />;
}
