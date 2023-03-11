import MainCard from "../../global/MainCard";
import iMac from "/public/img/assets/3D-icons/iMac.png";
import Illustration from "/public/img/assets/illustrations/Landscape 2.png";

export default function Card(props: any) {
    const Data = {
        Main: iMac,
        Illustration: Illustration,
        title: props.Title,
        description: props.Description,
        button: props.Button,
        href: "#StandOut",
    };

    return <MainCard {...Data} />;
}
