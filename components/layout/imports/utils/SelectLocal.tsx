import * as React from 'react';
import Button from '@mui/material/Button';
import LanguageIcon from '@mui/icons-material/Language';
import { US, FR, MA } from 'country-flag-icons/react/3x2'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { useRouter } from 'next/router'


export default function VerticalToggleButtons() {
    const [isOpen, setOpen] = React.useState(false);

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

    return (
        <div className="SelectSection">
            <Button className="NavButton" variant="text" startIcon={isOpen? <ExpandLessIcon/> : <ExpandMoreIcon/>} onClick={handleClick}>
                Language
            </Button>

            {
                isOpen ?
                <div className="ToggleGroup">
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