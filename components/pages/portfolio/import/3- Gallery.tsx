import React, { useState, useEffect } from "react";
import { DefaultButton } from "../../../core/buttons";
import ImagesGrid from "./util/ImagesGrid";
import Projects from "./util/ProjectsData";

//
// Icons
import DesignIcon from "@mui/icons-material/DesignServices";
import DevelopmentIcon from "@mui/icons-material/Terminal";
import MarketingIcon from "@mui/icons-material/Whatshot";

enum Pages {
    PAGE_1 = "Design",
    PAGE_2 = "Development",
    PAGE_3 = "Marketing",
}

export default function Gallery(props: any) {
    const [ActivePage, setActivePage] = useState<Pages>(Pages.PAGE_1);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const SwitchPage = (Page: Pages) => {
        setActivePage(Page);
    };

    const Images = Projects;

    return (
        <div className={"Gallery"} id="Gallery">
            <div className="ToggleGroup">
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_1 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_1);
                    }}
                >
                    {windowWidth < 1000 ? (
                        <DesignIcon />
                    ) : (
                        <>
                            <DesignIcon /> {props.Design}
                        </>
                    )}
                </DefaultButton>
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_2 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_2);
                    }}
                >
                    {windowWidth < 1000 ? (
                        <DevelopmentIcon />
                    ) : (
                        <>
                            <DevelopmentIcon /> {props.Development}
                        </>
                    )}
                </DefaultButton>
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_3 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_3);
                    }}
                >
                    {windowWidth < 1000 ? (
                        <MarketingIcon />
                    ) : (
                        <>
                            <MarketingIcon /> {props.Marketing}
                        </>
                    )}
                </DefaultButton>
            </div>

            <ImagesGrid
                Page={ActivePage}
                Pages={Pages}
                Images={
                    ActivePage === "Design"
                        ? Images.Design
                        : ActivePage === "Development"
                        ? Images.Development
                        : Images.Marketing
                }
            />
        </div>
    );
}
