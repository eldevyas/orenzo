import * as React from 'react';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import { US, FR, MA } from 'country-flag-icons/react/3x2'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';


export default function SelectLocal(props: any) {
    const [isOpen, setOpen] = React.useState(false);
    const [Direction, setDirection] = React.useState("ltr");

    const { i18n } = useTranslation();
    
    const router = useRouter()
    const { pathname, asPath, query } = router

    const handleClick = () => {
        setOpen(!isOpen);
    }

    const handleItemClick = (LocaleString: string) => {
        setOpen(!isOpen);
        router.push({ pathname, query }, asPath, { locale: LocaleString })
        console.log('%c Locale has been changed to:', 'background: #222; color: #bada55', LocaleString)
    }

    
    const checkDirection = () => {
        let documentDirection = i18n.dir;

        if (typeof documentDirection === "string") {
                switch (documentDirection) {
                    case "ltr":
                        console.log("Direction is LTR!")
                        return true;
                    case "rtl":
                        console.log("Direction is RTL!")
                        return false;
                    case "default":
                        console.log("Direction is default!")
                        return true;
            }
        } else {
            return true;
        }
    }
    
    
    let LeftDir = checkDirection();


    return (
        <div className="SelectSection">
            <Button className="NavButton" variant="text" startIcon={isOpen? <ExpandLessIcon/> : <ExpandMoreIcon/>} onClick={handleClick}>
                { props['data-text'] }
            </Button>

            {
                isOpen ?
                <div className="ToggleGroup" style= {{width: "auto", left: `${ Direction === "ltr" ? 0 : "auto"}`, right: `${ Direction === "rtl"? 0 : "auto"}` }}>
                    <Button className="ToggleButton" variant="text" onClick={() => {handleItemClick("en")}}>
                        <US title="English"/>
                        English
                    </Button>

                    <Button className="ToggleButton" variant="text" onClick={() => {handleItemClick("ar")}}>
                        <MA title="Arabic"/>
                        Arabic
                    </Button>

                    <Button className="ToggleButton" variant="text" onClick={() => {handleItemClick("fr")}}>
                        <FR title="French"/>
                        French
                    </Button>
                </div>
                : null
            }
        </div>
    );
}