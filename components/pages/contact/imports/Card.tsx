import MainCard from "../../services/global/MainCard";

export default function Card() {
    const Data = {
        Main: null,
        Illustration: null,
        title: "Let's get in touch!",
        description:
            "Got a project in Mind? Fill in the form below or send us an email at <a href='mailto:hello@orenzo.ma'>hello@orenzo.ma</a> and we'll get back to you as soon as possible.",
        href: "#",
        button: "Make an inquiry",
    };
    return (
        <>
            <MainCard {...Data} />
        </>
    );
}
