import React from "react";
import ReactPlayer from "react-player/youtube";

export default function Video(props: { Source: string }) {
    return (
        <div className="Video" id="Explainer">
            <div className="VideoContainer">
                <ReactPlayer url={props.Source} className="ReactPlayer" />
            </div>
        </div>
    );
}
