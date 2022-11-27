function GridItem(props: any) {
    return (
        <>
            <div className="GridItem">
                <div className="Icon">{props.icon}</div>

                <div className="Text">
                    <div className="Title">{props.title}</div>
                    <div className="Description">{props.description}</div>
                </div>
            </div>
        </>
    );
}

export default function QualitiesGrid(props: any) {
    return (
        <>
            <div className="QualitiesGrid">
                <h1 className="Title">{props.title}</h1>

                <div className="Qualities">
                    {props.items.map((quality: any, index: number) => {
                        return (
                            <>
                                <GridItem
                                    key={index}
                                    title={quality.title}
                                    description={quality.description}
                                    icon={quality.icon}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
