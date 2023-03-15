import React, { useState } from "react";
import { DefaultButton } from "../../../core/buttons";
import ImagesGrid from "./util/ImagesGrid";

enum Pages {
    PAGE_1 = "Design",
    PAGE_2 = "Development",
    PAGE_3 = "Marketing",
}

export default function Gallery() {
    const [ActivePage, setActivePage] = useState<Pages>(Pages.PAGE_1);

    const SwitchPage = (Page: Pages) => {
        setActivePage(Page);
    };

    const Images = [
        {
            Title: "Wielder - Mobile Application",
            Description:
                "Wielder is a mobile application in which you can manage all your tasks very easily. We tried to create a universal tool for your personal and work to-do lists where you can manage separate tasks/habits and track your progress.",
            Image: "/img/assets/portfolio/design/Wielder.webp",
        },
        {
            Title: "Milkow",
            Description:
                'The name is a combination of the words "milk" and "cow", which is easy to read, and immediately carries a descriptor.',
            Image: "/img/assets/portfolio/design/Milkow.webp",
        },
        {
            Title: "Organic Tea",
            Description:
                "We were hired by this French organic tea company to experiment on their rebranding, including visual identity elements, packaging, promotional items and such. You're looking at the results of our tests.",
            Image: "/img/assets/portfolio/design/Organic Tea.webp",
        },
        {
            Title: "Face Cleanser",
            Description:
                "Cosmetics Packaging Design | Packaging Design | Label Design",
            Image: "/img/assets/portfolio/design/Face Cleanser.jpg",
        },
        {
            Title: "DaiSushi",
            Description: "Food Landing Page",
            Image: "/img/assets/portfolio/design/DaiSushi.webp",
        },
        {
            Title: "Restaurant App",
            Description: "Exploration design for Restaurant App.",
            Image: "/img/assets/portfolio/design/Restaurant App.webp",
        },
    ];

    return (
        <div className={"Gallery"}>
            <div className="ToggleGroup">
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_1 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_1);
                    }}
                >
                    Design
                </DefaultButton>
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_2 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_2);
                    }}
                >
                    Development
                </DefaultButton>
                <DefaultButton
                    bgColor={ActivePage === Pages.PAGE_3 ? "Blue" : "Black"}
                    // className="ToggleGroup__Button"
                    onClick={() => {
                        setActivePage(Pages.PAGE_3);
                    }}
                >
                    Marketing
                </DefaultButton>
            </div>

            <ImagesGrid Page={ActivePage} Pages={Pages} Images={Images} />
        </div>
    );
}
