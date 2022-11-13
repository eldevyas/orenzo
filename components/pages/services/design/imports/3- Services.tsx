import MiniCard from "./utils/miniCard";


const ServicesList: {title: string, description: string, image: any}[] = [
    {
        title: "Branding",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/branding..png"
    },
    {
        title: "Logo Design",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/logo-design..png"
    },
    {
        title: "UI/UX",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/uiux..png"
    },
    {
        title: "Social Media",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/social-media..png"
    },
    {
        title: "Visual Production",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/visual-production..png"
    },
    {
        title: "Packaging",
        description: "Our creative design solutions are for people, not for machines. Yet made by people and machines.",
        image: "/img/assets/illustrations/packaging..png"
    }
]

export default function Services() {
    return(
        <div className="Services">
            {
                ServicesList.map((Service, index) => {
                    return (
                        <MiniCard key={index} title={Service.title} description={Service.description} image={Service.image}/>
                    );
                })
            }
        </div>
    );
}