import Image from "next/image";

function Project(props: {name: string, description: string, color: string}) {
    const Background = 'url("/img/assets/brands/backgrounds/' + props.name + '.png")';
    const Logo = '/img/assets/brands/' + props.name + '.png';
    const Color:string = props.color as string;
    const Description = props.description as string;

    return (
        <>
            <div className="Project" style={{ backgroundImage: Background, color: Color}}>
                <div className="Text">
                    <div className="Logo">
                        <Image src={Logo} alt="" layout="fill" objectFit="contain"/>
                    </div>
                    <div className="Description">
                        {Description}
                    </div>
                </div>
            </div>
        </>
    );
}

export default function SelectedProjects(props: any) {


    return (
        <>
            <div className="SelectedProjects">
                <div className="Text">
                    <div className="Title">
                        { props.title }
                    </div>
                    <div className="Description">
                        { props.description }
                    </div>
                </div>

                <div className="Projects">
                    { 
                        props.projects.map((project: any, index: number) => {
                            return <Project key={index} name={project.name} description={project.description} color={project.color}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}