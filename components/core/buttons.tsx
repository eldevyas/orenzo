import React from 'react';
import Button from '@mui/material/Button';



function DefaultButton(props: any) {
    var {bgColor, ...other} = props;

    return(
        <>
            <Button variant="contained" className={"DefaultButton" + " " + props.bgColor} {...other}>
                {props.children}
            </Button>
        </>
    )
}

function IconTextButton(props: any) {
    var {bgColor, ...other} = props;
    return (
        <>
            <Button variant="text" className={"IconTextButton" + " " + props.bgColor} startIcon={props.icon} {...other}>
                { props.children }
            </Button>
        </>
    )
}


function OutlinedButton(props: any) {
    var {bgColor, ...other} = props;

    return (
        <>
            <Button variant="outlined" className={"OutlinedButton" + " " + props.bgColor} {...other}>
                {props.children}
            </Button>
        </>
    );
}


export { DefaultButton, IconTextButton, OutlinedButton };