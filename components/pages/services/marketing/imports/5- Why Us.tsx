import React from "react";
import QualitiesGrid from "../../global/Qualities";

// Used icons
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import BiotechTwoToneIcon from "@mui/icons-material/BiotechTwoTone";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";

const Content: {
    title: string;
    items: { title: string; description: string; icon: any }[];
} = {
    title: "Why us?",
    items: [
        {
            title: "Business-centered approach",
            description:
                "Everything we do is geared toward your strategic goals. Essentially, our designs are an effective way to make your business successful.",
            icon: <AllInclusiveIcon />,
        },
        {
            title: "Strong marketing tools",
            description:
                "Marketing and design are inextricably linked. We know just how to make them complement each other.",
            icon: <NextWeekIcon />,
        },
        {
            title: "Close communication",
            description:
                "We have found that keeping in touch with our clients accounts for 60% of a given project’s success.",
            icon: <BiotechTwoToneIcon />,
        },
        {
            title: "Meeting the deadlines",
            description:
                "We hate falling behind on a project just as much as our clients. That’s why we never do it.",
            icon: <AdminPanelSettingsIcon />,
        },
        {
            title: "Future-proof results",
            description:
                "Fads are fine, but some things are timeless. We make every effort to stay on the cutting edge of design.",
            icon: <TipsAndUpdatesOutlinedIcon />,
        },
        {
            title: "Exceeding Expectations",
            description:
                "You know why we really care about your success? Because it motivates us like nothing else! So it’s a win-win situation.",
            icon: <AutoGraphOutlinedIcon />,
        },
    ],
};

export default function WhyUs() {
    return <QualitiesGrid title={Content.title} items={Content.items} />;
}
