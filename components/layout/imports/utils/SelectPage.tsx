import * as React from 'react';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useRouter } from 'next/router'


export default function SelectPage(props: any) {
    const [isOpen, setOpen] = React.useState(false);

    const router = useRouter();
    const Pages = props.pages;

    const handleClick = () => {
        setOpen(!isOpen);
    }

    const handleItemClick = (HrefString: string) => {
        setOpen(!isOpen);

        HrefString? router.push(HrefString): alert('Please Provide a valid Href.');
    }

    return (
        <div className="SelectSection">
            <Button className="NavButton" sx={{ justifyContent: 'start' }} variant="text" startIcon={isOpen? <ExpandLessIcon/> : <ExpandMoreIcon/>} onClick={handleClick}>
                { props['data-text'] }
            </Button>

            {
                isOpen ?
                <div className="ToggleGroup" style={{width: 'auto', left: 0}}>
                    {
                        Pages.map((page: any, index: number) => {
                            let PageHref = page.href;
                            let CurrentURL = router.pathname;

                            let activeState = "" 
                            if (CurrentURL === PageHref) {
                                activeState = "Active";
                            }

                            return (
                                <Button key={index} className= { "ToggleButton " + activeState } variant="text" onClick={() => {handleItemClick(page.href)}}
                                    sx={{ justifyContent: 'start', width: 'auto' }}
                                >
                                    {page.title}
                                </Button>
                            );
                        })
                    }
                </div>
                : null
            }
        </div>
    );
}