import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import PhotoIcon from "@mui/icons-material/PhotoOutlined";
import { motion, AnimateSharedLayout } from "framer-motion";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CustomImage = (props: any) => {
    let Page = props.Page;
    let Key = props.key;
    let Title = props.Title;
    let Description = props.Description;
    let Source = props.Source;
    let Height = props.Height;
    let Width = props.Width;

    const [isLoaded, setIsLoaded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     var Max = 5000;
    //     setTimeout(() => {
    //         setIsLoaded(true);
    //     }, Math.floor(Math.random() * Max));
    // }, []);

    return (
        <AnimateSharedLayout key={Key}>
            {!isOpen ? (
                <motion.div
                    className={"Image" + " " + Page}
                    layoutId="Expandable"
                    onClick={() => {
                        setIsOpen(true);
                    }}
                >
                    <Suspense
                        fallback={
                            <>
                                <Skeleton
                                    variant="rounded"
                                    className="Skeleton"
                                />

                                <PhotoIcon className="Icon" />

                                <div className="SkeletonOverlay">
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: "1rem" }}
                                    />
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: "1rem" }}
                                    />
                                </div>
                            </>
                        }
                    >
                        <Image
                            layoutId="ExpandableImage"
                            src={Source}
                            alt={Title}
                            layout="fill"
                            style={{
                                objectFit: "cover",
                            }}
                            onLoadingComplete={() => {
                                setIsLoaded(true);
                            }}
                        />
                        {isLoaded ? (
                            <>
                                <div className="Overlay">
                                    <div className="Title">{Title}</div>
                                    <div className="Description">
                                        {Description}
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <Skeleton
                                    variant="rounded"
                                    className="Skeleton"
                                />

                                <PhotoIcon className="Icon" />

                                <div className="SkeletonOverlay">
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: "1.5rem" }}
                                    />
                                    <Skeleton
                                        variant="text"
                                        sx={{ fontSize: "0.8rem" }}
                                    />
                                </div>
                            </>
                        )}
                    </Suspense>
                </motion.div>
            ) : (
                <motion.div className="FullScreenModal" layoutId="Expandable">
                    <div
                        className="Container"
                        style={{
                            aspectRatio: `${Width}/${Height} !important`,
                        }}
                    >
                        <Image
                            layoutId="ExpandableImage"
                            src={Source}
                            alt={Title}
                            layout="responsive"
                            height={Height}
                            width={Width}
                            style={{
                                objectFit: "fill",
                            }}
                        />
                        <IconButton
                            className="CloseButton"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </div>
                </motion.div>
            )}
        </AnimateSharedLayout>
    );
};

export default function ImagesGrid(props: any) {
    const Pages = props.Pages;
    const Page = props.Page;
    const Images = props.Images;

    return (
        <div className={"ImagesGrid" + " " + Page} dir="ltr">
            {props.Images.length > 0 &&
                Images.map((image: any, index: any) => {
                    return (
                        <>
                            <CustomImage
                                Title={image.title}
                                Description={image.description}
                                Source={image.src}
                                Key={index}
                                Page={Page}
                                Height={image.height}
                                Width={image.width}
                            />
                        </>
                    );
                })}

            {/* If Images are not filling enough space, add some placeholders to fill up the grid. */}
            {Images.length < 10 &&
                (() => {
                    let Container: any = [];
                    let Count: any = []; //can be anything array, object
                    let Limit: number = 12;

                    for (var i = 0; i < Limit - Images.length; i++) {
                        Count.push(i);
                    }

                    Count.forEach((val: any, index: any) => {
                        Container.push(
                            <div className="Image" key={index}>
                                <Skeleton
                                    variant="rounded"
                                    className="Skeleton"
                                />

                                <PhotoIcon className="Icon" />

                                <div className="SkeletonOverlay">
                                    <Skeleton
                                        variant="text"
                                        sx={{
                                            fontSize: "1.5rem",
                                        }}
                                    />
                                    <Skeleton
                                        variant="text"
                                        sx={{
                                            fontSize: "0.8rem",
                                        }}
                                    />
                                </div>
                            </div>
                        );
                    });
                    return Container;
                })()}

            {props.Images.length == 0 ? (
                <>
                    {(() => {
                        let Container: any = [];
                        let Count: any = []; //can be anything array, object
                        let Limit = 12;

                        for (var i = 0; i < Limit - Images.length; i++) {
                            Count.push(i);
                        }

                        Count.forEach((val: any, index: any) => {
                            Container.push(
                                <div className="Image" key={index}>
                                    <Skeleton
                                        variant="rounded"
                                        className="Skeleton"
                                    />

                                    <PhotoIcon className="Icon" />

                                    <div className="SkeletonOverlay">
                                        <Skeleton
                                            variant="text"
                                            sx={{ fontSize: "1.5rem" }}
                                        />
                                        <Skeleton
                                            variant="text"
                                            sx={{ fontSize: "0.8rem" }}
                                        />
                                    </div>
                                </div>
                            );
                        });
                        return Container;
                    })()}
                </>
            ) : null}
        </div>
    );
}
