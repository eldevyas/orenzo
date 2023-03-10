import MiniCard from "./utils/miniCard";

export default function Services(props: any) {
    const ServicesList: { title: string; description: string; image: any }[] = [
        {
            title: props.Cards.branding.title,
            description: props.Cards.branding.description,
            image: "/img/assets/illustrations/branding..png",
        },
        {
            title: props.Cards.logoDesign.title,
            description: props.Cards.logoDesign.description,
            image: "/img/assets/illustrations/logo-design..png",
        },
        {
            title: props.Cards.uiUx.title,
            description: props.Cards.uiUx.description,
            image: "/img/assets/illustrations/uiux..png",
        },
        {
            title: props.Cards.socialMedia.title,
            description: props.Cards.socialMedia.description,
            image: "/img/assets/illustrations/social-media..png",
        },
        {
            title: props.Cards.visualProduction.title,
            description: props.Cards.visualProduction.description,
            image: "/img/assets/illustrations/visual-production..png",
        },
        {
            title: props.Cards.packaging.title,
            description: props.Cards.packaging.description,
            image: "/img/assets/illustrations/packaging..png",
        },
    ];

    return (
        <div className="Services" id="services">
            {ServicesList.map((Service, index) => {
                return (
                    <MiniCard
                        key={index}
                        title={Service.title}
                        description={Service.description}
                        image={Service.image}
                    />
                );
            })}
        </div>
    );
}
