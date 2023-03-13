import React, { useState } from "react";
import { DefaultButton } from "../../../core/buttons";
import FirstPage from "./Pages/1- FirstPage";
import RockPage from "./Pages/2- RockPage";
import DealPage from "./Pages/3- DealPage";

enum PageTypes {
    FirstPage = "FirstPage",
    DealPage = "DealPage",
    RockPage = "RockPage",
}

function Container(props: any) {
    const [Page, setPage] = useState<PageTypes>(PageTypes.FirstPage);

    return (
        <div className="Container">
            {(() => {
                switch (Page) {
                    case PageTypes.FirstPage:
                        return (
                            <FirstPage
                                setPage={setPage}
                                PageTypes={PageTypes}
                            />
                        );
                    case PageTypes.DealPage:
                        return (
                            <DealPage setPage={setPage} PageTypes={PageTypes} />
                        );
                    case PageTypes.RockPage:
                        return (
                            <RockPage setPage={setPage} PageTypes={PageTypes} />
                        );
                    default:
                        return (
                            <FirstPage
                                setPage={setPage}
                                PageTypes={PageTypes}
                            />
                        );
                }
            })()}
        </div>
    );
}

export default Container;
