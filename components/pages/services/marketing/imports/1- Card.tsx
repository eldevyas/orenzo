import MainCard from "../../global/MainCard";
import iMac from "/public/img/assets/3D-icons/iMac.png";
import Illustration from "/public/img/assets/illustrations/Landscape 2.png";

export default function Card() {
    const Data = {
        Main: iMac,
        Illustration: Illustration,
        title: "Digital Marketing",
        description: "Make your business grow and solve your problem.",
        href: "#StandOut",
    };

    return <MainCard {...Data} />;
}
