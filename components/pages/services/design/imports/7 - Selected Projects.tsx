import SelectedProjects from "../../global/Projects";

export default function Cases() {
    const Content: {title: string, description: string, projects: {name: String, description: String, color: String}[]} = {
        title: "Some cases we are proud of",
        description: "Check out these cases to see how we work and what we achieve. A picture speaks a thousand words!",
        projects: [
            {
                name: "netgain",
                description: "Netgain trusted us to rebrand their whole huge website from scratch. The company helps accountants automate their processes and workflows in NetSuite so they can do their work more efficiently. The reviews on the new website have been outstanding.",
                color: "#000"
            },
            {
                name: "nexus",
                description: "Imagine a digital business card - it’s not in the future. Nexus is real and made to simplify lives by gathering all social media and other links in one app. We’ve been there to make a website, mobile app and promotion materials.",
                color: "#fff"
            },
            {
                name: "slit",
                description: "We were lucky to work with Slit - a startup aiming to create a blockchain art gallery. Our creatives went through several stages of ideation and concepting before we found an adorable way to represent this business.",
                color: "#000"
            },
            {
                name: "bonsai",
                description: "For an ambitious Bonsai, a SaaS product created to automate freelance work, we've tailored a minimalist and trendy website that accelerates freelancers' work with accounting, client management, and more.",
                color: "#fff"
            }
        ]
    }

    return (
        <>
            <SelectedProjects title={Content.title} description={Content.description} projects={Content.projects}/>
        </>
    )
}