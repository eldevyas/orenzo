import MainCard from "../../global/MainCard";
import iPad from "/public/img/assets/3D-icons/iPad.png";
import Illustration from "/public/img/assets/illustrations/Landscape.png";

export default function Card(props: any) {
    const Data = {
        Main: iPad,
        Illustration: Illustration,
        title: props.Title,
        description: props.Description,
        button: props.Button,
        href: "#services",
    };

    return <MainCard {...Data} />;
}
