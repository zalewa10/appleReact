import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AnimateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      scale: 2,
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    });

    AnimateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip <br /> A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            vero quam repellendus error laborum illo.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-ful flex-center">
            <div className="overflow-hidden relative">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video ">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray text-center mt-3 font-semibold">
            Hokai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers
              <span className="text-white">
                best graphic performance by far{" "}
              </span>
            </p>
            <br />
            <p className="hiw-text g_fadeIn">
              Mobile {"  "}
              <span className="text-white">games will look so immersive </span>
              that you won't believe your own eyes
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
