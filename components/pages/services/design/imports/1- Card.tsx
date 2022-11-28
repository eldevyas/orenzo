import MainCard from "../../global/MainCard";
import iPad from "/public/img/assets/3D-icons/iPad.png";
import Illustration from "/public/img/assets/illustrations/Landscape.png";

export default function Card() {
    const Data = {
        Main: iPad,
        Illustration: Illustration,
        title: "Design for people",
        description:
            "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        href: "#services",
    };

    return <MainCard {...Data} />;
}
