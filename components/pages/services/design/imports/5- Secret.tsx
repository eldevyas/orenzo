import React from 'react';
import QualitiesGrid from '../../global/Qualities';

// Used icons
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import BiotechTwoToneIcon from '@mui/icons-material/BiotechTwoTone';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

const Content: {title: string, items: {title: string, description: string, icon: any}[]} = {
    title: "What's our secret?",
    items: [
        {
            title: "Timeless Design",
            description:"Run your digital product for years without worries about being outdated. Our design is ahead of time.",
            icon: <AllInclusiveIcon/>
        },
        {
            title: "Business-oriented solutions",
            description:"We help our clients succeed concentrating our efforts on business goals and striving to achieve them no matter what.",
            icon: <NextWeekIcon/>
        },
        {
            title: "Deep research",
            description:"We do our own research into your business area and market. Once we know all there is to know, we can give you exactly what your business needs.",
            icon: <BiotechTwoToneIcon />
        },
        {
            title: "Reliable partner",
            description:"Our relationship with you is 100% transparent and built on trust. We believe friendliness is key to any successful long-term partnership.",
            icon: <AdminPanelSettingsIcon/>
        },
        {
            title: "Out-of-the-box design",
            description:"What we offer are custom-built solutions. We love experimenting and breaking rules! No boring old templates here.",
            icon: <TipsAndUpdatesOutlinedIcon/>
        },
        {
            title: "Increasing value",
            description:"Do you want to increase the value of your product? How about more customer loyalty and engagement? We know you do, so we create design strategies to do just that!",
            icon: <AutoGraphOutlinedIcon/>
        },
    ]
}


export default function Secret() {
    return <QualitiesGrid title={Content.title} items={Content.items}/>;
}