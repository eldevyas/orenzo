import { useRef, useEffect } from "react";


export default function Background(props) {
    const Wrapper = useRef(null);


    useEffect(() => {
        const handleMouseMove = (e) => {
            if (Wrapper != null && Wrapper.current != null) {
                const WrapperRect = Wrapper.current.getBoundingClientRect();
                const x = e.clientX - WrapperRect.x;
                const y = e.clientY - WrapperRect.y;
                Wrapper.current.style.setProperty("--mouse-x", `${x}px`);
                Wrapper.current.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        let Count = 25;
        let Columns = Math.floor(document.body.clientWidth / Count);
        let Rows = Math.floor(document.body.clientHeight / Count);


        const MakeLightEffects = () => {
            if (Wrapper != null) {
                const WrapperRect = Wrapper.current.getBoundingClientRect();
                const x = WrapperRect.x + WrapperRect.width / 2;
                const y = WrapperRect.y + WrapperRect.height / 2;
                Wrapper.current.style.setProperty("--mouse-x", `${x}px`);
                Wrapper.current.style.setProperty("--mouse-y", `${y}px`);
            }
            let LightEffects = ["radial-gradient( 600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 100%), transparent 75%)"]
            let Elements = document.querySelectorAll(".TorchLightEffect");
            let ImageMask = "";

            Elements.forEach((Element) => {
                const { x, y, width, height } = Element.getBoundingClientRect();
                const centerX = x + width / 2;
                const centerY = y + height / 2;

                LightEffects.push(`radial-gradient( ${width}px circle at ${centerX}px ${centerY}px, rgba(255, 255, 255, 100%), transparent 75%)`)
            })

            LightEffects.forEach((Mask, Index) => {
                console.log(Index);
                ImageMask += (Index == LightEffects.length - 1 ? Mask : Mask + ", ");
            })

            // Set among all browsers;
            Wrapper.current.style.webkitMaskImage = ImageMask;
            Wrapper.current.style.MozMaskImage = ImageMask;
            Wrapper.current.style.msMaskImage = ImageMask;
            Wrapper.current.style.OMaskImage = ImageMask;
            Wrapper.current.style.maskImage = ImageMask;
        }

        MakeLightEffects();

        const CreateTile = (index) => {
            const Tile = document.createElement("div");

            Tile.classList.add("Tile");

            return Tile;
        };

        const CreateTiles = (quantity) => {
            Array.from(Array(quantity)).map((tile, index) => {
                Wrapper.current.appendChild(CreateTile(index));
            });
        };
        const CreateGrid = () => {
            Wrapper.current.innerHTML = "";

            let Count = 25;

            let Columns = Math.floor(document.body.clientWidth / Count);
            let Rows = Math.floor(document.body.clientHeight / Count);

            Wrapper.current.style.setProperty("--columns", Columns);
            Wrapper.current.style.setProperty("--rows", Rows);

            CreateTiles(Columns * Rows);
        };
        CreateGrid();

        window.addEventListener("resize", CreateGrid);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", CreateGrid);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return <div className={"BackgroundTiles"} ref={Wrapper}></div>;
}