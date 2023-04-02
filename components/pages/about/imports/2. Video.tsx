import React from "react";
import ReactPlayer from "react-player/file";

export default function Video(props: { Source: string }) {
    return (
        <div className="Video" id="Explainer">
            <div className="VideoContainer">
                <ReactPlayer
                    url={props.Source}
                    className="ReactPlayer"
                    autopictureinpicture
                    controls
                    poster="/vid/Poster.png"
                    preload="auto"
                />
            </div>
        </div>
    );
}
