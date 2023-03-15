import Image from "next/image";
import React from "react";

export default function ImagesGrid(props: any) {
    const Pages = props.Pages;
    const Page = props.Page;

    return (
        <div className={"ImagesGrid" + " " + Page}>
            {props.Images.map((image: any, index: any) => {
                return (
                    <div key={index} className={"Image" + " " + Page}>
                        <Image
                            src={image.Image}
                            alt={image.Title}
                            layout="fill"
                            style={{
                                objectFit: "cover",
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
