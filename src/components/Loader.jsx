import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
        <div className="loader h-[10vh] w-[10vh]"></div>
        <style jsx>{`
          /* HTML: <div class="loader"></div> */
          .loader {
            padding: 8px;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #25b09b;
            --_m: conic-gradient(#0000 10%, #000),
              linear-gradient(#000 0 0) content-box;
            -webkit-mask: var(--_m);
            mask: var(--_m);
            -webkit-mask-composite: source-out;
            mask-composite: subtract;
            animation: l3 1s infinite linear;
          }
          @keyframes l3 {
            to {
              transform: rotate(1turn);
            }
          }
        `}</style>
      </div>
    </Html>
  );
};

export default Loader;
