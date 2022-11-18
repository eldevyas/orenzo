import React from "react";

function Step(props: any) {
    return (
       <>
            <div className="Step">
                <div className="Title" style={{ backgroundImage: `${props.color}` }}>
                    {props.title}
                </div>
                <div className="Description">
                    {props.description}
                </div>
            </div>
       </> 
    )
}



export default function Process(props: any) {
    const Steps: {title: String, description: String, color: String}[] = [
        {
            title: "Immersion",
            description: "Going deep into client’s business to understand its core sense, goals and challenges to build partnership.",
            color: "linear-gradient(90deg, #43E97B 0%, #38F9D7 100%);"
        },
        {
            title: "Ideation",
            description: "Creating first concepts of a future product and shaping up the direction.",
            color: "linear-gradient(90deg, #48C6EF 0%, #6F86D6 100%);"
        },
        {
            title: "Wireframing",
            description: "Building the foundation, structure and core elements of a digital product.",
            color: "linear-gradient(90deg, #F78CA0 0%, #F9748F 19%, #FD868C 60%);"
        },
        {
            title: "Visual Design",
            description: "Adding colors, illustrations and shapes to create visual language that resonates with customers.",
            color: "linear-gradient(90deg, #B8CBB8 0%, #B8CBB8 0%, #B465DA 0%, #CF6CC9 33%, #EE609C 66%, #EE609C 100%);"
        },
        {
            title: "Handoff & Support",
            description: "Sending all finalised deliverables and providing further support.",
            color: "linear-gradient(90deg, #F6D365 0%, #FDA085 100%);"
        }
    ]


    return (
        <>
            <div className="Process">
                <div className="Title">
                    Working Process
                </div>

                <div className="Steps">
                    {
                        Steps.map((StepItem: any, index: Number) => {
                            return <Step key={index} title={StepItem.title} description={StepItem.description} color={StepItem.color}/>
                        })
                    }
                </div>
            </div>
        </>
    );
}