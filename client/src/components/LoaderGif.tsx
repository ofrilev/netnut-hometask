import { useEffect } from "react";

const LoaderGif = () => {
  useEffect(() => {
    const rects = document.querySelectorAll("rect");
    rects.forEach((rect, index) => {
      rect.style.animationDelay = `${-index / 12}s`;
    });
  }, []);

  const overlayContainerStyle = {
    position: "fixed" as const,
    top: "0" as const,
    left: "0" as const,
    width: "100vw" as const,
    height: "100vh" as const,
    display: "flex" as const,
    justifyContent: "center" as const,
    alignItems: "center" as const,
    background: "rgba(0, 0, 0, 0.02 )" as const,
    backdropFilter: "blur(2px)" as const,
    zIndex: 1000 as const,
  };

  return (
    <div style={overlayContainerStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g transform="rotate(0 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.9166666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(30 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.8333333333333334s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(60 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.75s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(90 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.6666666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(120 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5833333333333334s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(150 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.5s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(180 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.4166666666666667s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(210 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.3333333333333333s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(240 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.25s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(270 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.16666666666666666s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(300 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="-0.08333333333333333s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
        <g transform="rotate(330 50 50)">
          <rect
            x="47"
            y="24"
            rx="3"
            ry="6"
            width="6"
            height="12"
            fill="#b98791"
          >
            <animate
              attributeName="opacity"
              values="1;0"
              keyTimes="0;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            ></animate>
          </rect>
        </g>
      </svg>
    </div>
  );
};

export default LoaderGif;
