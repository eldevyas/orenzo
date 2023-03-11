import React from "react";
import QualitiesGrid from "../../global/Qualities";

// icons Used
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import BiotechTwoToneIcon from "@mui/icons-material/BiotechTwoTone";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

export default function WhyUs(props: any) {
    const Content: any = {
        title: props.Title,
        items: [
            {
                title: props.Cards[Object.keys(props.Cards)[0]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[0]].description,
                icon: <AllInclusiveIcon />,
            },
            {
                title: props.Cards[Object.keys(props.Cards)[1]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[1]].description,
                icon: <NextWeekIcon />,
            },
            {
                title: props.Cards[Object.keys(props.Cards)[2]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[2]].description,
                icon: <BiotechTwoToneIcon />,
            },
            {
                title: props.Cards[Object.keys(props.Cards)[3]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[3]].description,
                icon: <AdminPanelSettingsIcon />,
            },
            {
                title: props.Cards[Object.keys(props.Cards)[4]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[4]].description,
                icon: <TipsAndUpdatesOutlinedIcon />,
            },
            {
                title: props.Cards[Object.keys(props.Cards)[5]].title,
                description:
                    props.Cards[Object.keys(props.Cards)[5]].description,
                icon: <AutoGraphOutlinedIcon />,
            },
        ],
    };
    return <QualitiesGrid title={Content.title} items={Content.items} />;
}
