const CustomizedProgressBar = `
    #nprogress {
        pointer-events: none;
    }
    #nprogress .bar {
        background: linear-gradient(-90deg, #EF233C, #17BEBB);
        background-size: 400% 400%;
        animation: gradient 5s linear infinite;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: 5px;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        /* box-shadow: 0 0 10px #EF233C, 0 0 5px #EF233C; */
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
    }
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
    }
    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: #EF233C;
        border-left-color: #EF233C;
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
        0% {
        -webkit-transform: rotate(0deg);
        }
        100% {
        -webkit-transform: rotate(360deg);
        }
    }
    @keyframes nprogress-spinner {
        0% {
        transform: rotate(0deg);
        }
        100% {
        transform: rotate(360deg);
        }
    }
`;


export default CustomizedProgressBar;