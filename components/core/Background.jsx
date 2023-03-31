import React, { useRef, useEffect } from "react";

// type CSSStyleDeclarationWithVendorPrefixes = CSSStyleDeclaration & {
//     webkitMaskImage?: string;
//     MozMaskImage?: string;
//     msMaskImage?: string;
//     OMaskImage?: string;
// };

// export default function Background(props: any) {
//     const Wrapper = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const handleMouseMove = (e: { clientX: number; clientY: number }) => {
//             if (Wrapper != null && Wrapper.current != null) {
//                 const WrapperRect = Wrapper.current.getBoundingClientRect();
//                 const x = e.clientX - WrapperRect.x;
//                 const y = e.clientY - WrapperRect.y;
//                 Wrapper.current.style.setProperty("--mouse-x", `${x}px`);
//                 Wrapper.current.style.setProperty("--mouse-y", `${y}px`);
//             }
//         };

//         let Count = 25;
//         let Columns = Math.floor(document.body.clientWidth / Count);
//         let Rows = Math.floor(document.body.clientHeight / Count);

//         const MakeLightEffects = () => {
//             if (Wrapper.current != null) {
//                 const WrapperRect = Wrapper?.current?.getBoundingClientRect();
//                 const x = WrapperRect!.x + WrapperRect!.width / 2;
//                 const y = WrapperRect!.y + WrapperRect!.height / 2;
//                 Wrapper!.current!.style.setProperty("--mouse-x", `${x}px`);
//                 Wrapper!.current!.style.setProperty("--mouse-y", `${y}px`);
//             }
//             let LightEffects = [];
//             let InteractiveMask =
//                 "radial-gradient( 600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 100%), transparent 75%)";

//             if (!props["no-interaction"]) {
//                 LightEffects.push(InteractiveMask);
//             }

//             let Elements = document.querySelectorAll(".TorchLightEffect");
//             let ImageMask = "";

//             Elements.forEach((Element) => {
//                 const { x, y, width, height } = Element.getBoundingClientRect();
//                 const centerX = x + width / 2;
//                 const centerY = y + height / 2;

//                 LightEffects.push(
//                     `radial-gradient( ${width}px circle at ${centerX}px ${centerY}px, rgba(255, 255, 255, 100%), transparent 75%)`
//                 );
//             });

//             LightEffects.forEach((Mask, Index) => {
//                 ImageMask +=
//                     Index == LightEffects.length - 1 ? Mask : Mask + ", ";
//             });

//             const wrapperStyle = Wrapper?.current
//                 ?.style as CSSStyleDeclarationWithVendorPrefixes;

//             // Set among all browsers;
//             wrapperStyle!.webkitMaskImage = ImageMask;
//             wrapperStyle!.MozMaskImage = ImageMask;
//             wrapperStyle!.msMaskImage = ImageMask;
//             wrapperStyle!.OMaskImage = ImageMask;
//             wrapperStyle!.maskImage = ImageMask;
//         };

//         MakeLightEffects();

//         const CreateTile = (index: number) => {
//             const Tile = document.createElement("div");

//             Tile.classList.add("Tile");

//             return Tile;
//         };

//         const CreateTiles = (quantity: number) => {
//             Array.from(Array(quantity)).map((tile, index) => {
//                 Wrapper!.current!.appendChild(CreateTile(index));
//             });
//         };
//         const CreateGrid = () => {
//             Wrapper!.current!.innerHTML = "";

//             let Count = 25;

//             let Columns: number = Math.floor(document.body.clientWidth / Count);
//             let Rows: number = Math.floor(document.body.clientHeight / Count);

//             Wrapper!.current?.style.setProperty("--columns", String(Columns));
//             Wrapper!.current?.style.setProperty("--rows", String(Rows));

//             CreateTiles(Columns * Rows);
//         };
//         CreateGrid();

//         window.addEventListener("resize", CreateGrid);
//         if (!props["no-interaction"]) {
//             window.addEventListener("mousemove", handleMouseMove);
//         }

//         return () => {
//             window.removeEventListener("resize", CreateGrid);
//             if (!props["no-interaction"]) {
//                 window.removeEventListener("mousemove", handleMouseMove);
//             }
//             MakeLightEffects();
//         };
//     }, [props]);

//     return (
//         <div
//             className={
//                 "Background" +
//                 " " +
//                 (props["data-theme"] == "dark" ? "__Dark" : "__Light")
//             }
//         >
//             <div
//                 className={
//                     "Background__Tiles" +
//                     " " +
//                     (props["data-theme"] == "dark" ? "__Dark" : "__Light")
//                 }
//                 ref={Wrapper}
//             ></div>
//         </div>
//     );
// }

export default function Background(props) {
    const CanvasRef = useRef(null);

    useEffect(() => {
        const Canvas = CanvasRef.current;
        const Context = Canvas.getContext("2d");

        let Count = 25;
        let Height = document.body.clientHeight;
        let Width = document.body.clientWidth;
        let Columns = Math.floor(Width / Count);
        let Rows = Math.floor(Height / Count);
        let TileSize = Count;
        let Radius = 500;


        Canvas.height = Height;
        Canvas.width = Width;

        const drawGrid = () => {
            const smallUnits = () => {
                for (let i = 0; i <= Canvas.width; i = i + 5) {
                    // Vertical Lines
                    Context.moveTo(i, 0);
                    Context.lineTo(i, Canvas.height);
                }

                for (let i = 0; i <= Canvas.height; i = i + 5) {
                    // Horizontal Lines
                    Context.moveTo(0, i);
                    Context.lineTo(Canvas.width, i);
                }

                // Stroke Style
                Context.strokeStyle = "#f0f0f0";
                Context.stroke();
            };

            const majorUnits = () => {
                Context.beginPath();

                for (let i = 0; i <= Canvas.width; i = i + 30) {
                    // Vertical Lines
                    Context.moveTo(i, 0);
                    Context.lineTo(i, Canvas.height);
                }

                for (let i = 0; i <= Canvas.height; i = i + 30) {
                    // Horizontal Lines
                    Context.moveTo(0, i);
                    Context.lineTo(Canvas.width, i);
                }

                // Stroke Style
                Context.strokeStyle = "#c0c0c0";
                Context.stroke();
            };

            smallUnits();
            majorUnits();
        };

        drawGrid();

        // function drawMask(x, y) {
        //     const gradient = Context.createRadialGradient(x, y, 0, x, y, Radius);
        //     gradient.addColorStop(0, "rgba(0,0,0,0)");
        //     gradient.addColorStop(1, "rgba(0,0,0,1)");
        //     Context.fillStyle = gradient;
        //     Context.fillRect(0, 0, Canvas.width, Canvas.height);
        // }

        // function handleMouseMove(event) {
        //     const x = event.clientX;
        //     const y = event.clientY;
        //     drawMask(x, y);
        // }

        // window.addEventListener("mousemove", handleMouseMove);

        // return () => {
        //     window.removeEventListener("mousemove", handleMouseMove);
        // };

    }, []);

    return (
        <canvas
            // width={610}
            // height={610}
            className={
                "Background" +
                " " +
                (props["data-theme"] == "dark" ? "__Dark" : "__Light")
            }
            ref={CanvasRef}
        />
    );
}
