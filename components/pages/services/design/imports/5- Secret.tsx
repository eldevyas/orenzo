import React from "react";
import QualitiesGrid from "../../global/Qualities";

// Used icons
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import BiotechTwoToneIcon from "@mui/icons-material/BiotechTwoTone";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

export default function Secret(props: any) {
    const Content: {
        title: string;
        items: { title: string; description: string; icon: any }[];
    } = {
        title: props.Title,
        items: [
            {
                title: props.Cards.TimeLessDesign.title,
                description: props.Cards.TimeLessDesign.description,
                icon: <AllInclusiveIcon />,
            },
            {
                title: props.Cards.BusinessOrientedSolutions.title,
                description: props.Cards.BusinessOrientedSolutions.description,
                icon: <NextWeekIcon />,
            },
            {
                title: props.Cards.DeepResearch.title,
                description: props.Cards.DeepResearch.description,
                icon: <BiotechTwoToneIcon />,
            },
            {
                title: props.Cards.ReliablePartner.title,
                description: props.Cards.ReliablePartner.description,
                icon: <AdminPanelSettingsIcon />,
            },
            {
                title: props.Cards.OutOfTheBoxDesign.title,
                description: props.Cards.OutOfTheBoxDesign.description,
                icon: <TipsAndUpdatesOutlinedIcon />,
            },
            {
                title: props.Cards.IncreasingValue.title,
                description: props.Cards.IncreasingValue.description,
                icon: <AutoGraphOutlinedIcon />,
            },
        ],
    };
    return <QualitiesGrid title={Content.title} items={Content.items} />;
}
