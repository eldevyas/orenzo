import Image from "next/image";
import { DefaultButton } from "../../../core/buttons";
import ExploreIcon from "@mui/icons-material/Explore";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

function Project(props: { name: string; description: string; color: string }) {
    const Background =
        'url("/img/assets/brands/backgrounds/' + props.name + '.png")';
    const Logo = "/img/assets/brands/" + props.name + ".png";
    const Color: string = props.color as string;
    const Description = props.description as string;

    return (
        <>
            <div
                className="Project"
                style={{ backgroundImage: Background, color: Color }}
                dir="ltr"
            >
                <div className="Text">
                    <div className="Logo">
                        <Image
                            src={Logo}
                            alt=""
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
                    <div className="Description">{Description}</div>

                    {/* <DefaultButton bgColor={"White"}>
                        {" "}
                        Learn more{" "}
                    </DefaultButton> */}
                </div>
            </div>
        </>
    );
}

export default function SelectedProjects(props: any) {
    const Router = useRouter();
    const { t } = useTranslation("common");
    return (
        <>
            <div className="SelectedProjects">
                <div className="Text">
                    <div className="Title">{props.title}</div>
                    <div className="Description">{props.description}</div>
                </div>

                <div className="Projects">
                    {props.projects.map((project: any, index: number) => {
                        return (
                            <Project
                                key={index}
                                name={project.name}
                                description={project.description}
                                color={project.color}
                            />
                        );
                    })}
                </div>

                <DefaultButton
                    bgColor={"Red"}
                    startIcon={<ExploreIcon />}
                    onClick={() => {
                        Router.push("/portfolio");
                    }}
                >
                    {t("portfolio.content.MainCard.Button")}
                </DefaultButton>
            </div>
        </>
    );
}
