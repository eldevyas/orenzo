import SelectedProjects from "../../global/Projects";

export default function Cases(props: any) {
    const Content: {
        title: string;
        description: string;
        projects: { name: String; description: String; color: String }[];
    } = {
        title: props.title,
        description: props.description,
        projects: [
            {
                name: "netgain",
                description: props.projects.netgain,
                color: "#000",
            },
            {
                name: "nexus",
                description: props.projects.nexus,
                color: "#fff",
            },
            {
                name: "slit",
                description: props.projects.slit,
                color: "#000",
            },
            {
                name: "bonsai",
                description: props.projects.bonsai,
                color: "#fff",
            },
        ],
    };

    return (
        <>
            <SelectedProjects
                title={Content.title}
                description={Content.description}
                projects={Content.projects}
            />
        </>
    );
}
