import React from 'react';
import Button from '@mui/material/Button';



function DefaultButton(props: any) {
    return(
        <>
            <Button variant="contained" className={"DefaultButton" + " " + props.color}>
                {props.children}
            </Button>
        </>
    )
}

function IconTextButton(props: any) {
    return (
        <>
            <Button variant="text" className={"IconTextButton" + " " + props.color}>
                
            </Button>
        </>
    )
}


export { DefaultButton };