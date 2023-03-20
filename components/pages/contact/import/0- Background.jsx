import { useRef, useEffect } from "react";


export default function Background(props) {
    const Wrapper = useRef(null);

    const handleMouseMove = (e) => {
        if (Wrapper != null) {
            const WrapperRect = Wrapper.current.getBoundingClientRect();
            const x = e.clientX - WrapperRect.x;
            const y = e.clientY - WrapperRect.y;
            Wrapper.current.style.setProperty("--mouse-x", `${x}px`);
            Wrapper.current.style.setProperty("--mouse-y", `${y}px`);
        }
    };

    useEffect(() => {
        let Count = 25;
        let Columns = Math.floor(document.body.clientWidth / Count);
        let Rows = Math.floor(document.body.clientHeight / Count);


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

        return () => {
            window.removeEventListener("resize", CreateGrid);
        };
    }, []);

    return <div className={"BackgroundTiles"} ref={Wrapper} onMouseMove={handleMouseMove}></div>;
}