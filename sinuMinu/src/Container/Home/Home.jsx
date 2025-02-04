import React, { useState, useRef } from "react";
import Styles from "../Home/Home.module.css";
// import Logo from '../../assets/Logo.jpg'
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";
import CompanyDetails from "../../Components/CompanyDetails/CompanyDetails";
import WorkWithUs from "../../Components/WorkWithUs/WorkWithUs";
import Popup from "../../Components/Popup/Popup";
import AddCollection from "../../Components/AddCollection/AddCollection";
import Video1 from "../../assets/video2.mp4"
import DragAndDrop from "../../Components/DragAndDrop/DragAndDrop";


const Home = () => {
  const [activeIframe, setActiveIframe] = useState(null);
  const [clickedIframe, setClickedIframe] = useState(null);
  const iframeRefs = {
    iframe1: useRef(null),
    iframe2: useRef(null),
  };

  const handleMouseEnter = (id) => {
    if (!clickedIframe) {
      setActiveIframe(id);
      playVideo(id);
    }
  };

  const handleMouseLeave = () => {
    if (!clickedIframe) {
      stopAllVideos();
      setActiveIframe(null);
    }
  };

  const handleClick = (id) => {
    setClickedIframe((prev) => (prev === id ? null : id));
  };

  const playVideo = (id) => {
    stopAllVideos(); // Stop other videos
    const iframe = iframeRefs[id]?.current;
    if (iframe) {
      iframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  };

  const stopAllVideos = () => {
    Object.values(iframeRefs).forEach((ref) => {
      if (ref.current) {
        ref.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  };

  // const links = [
  //   { name: 'Open roles', href: '#' },
  //   { name: 'Internship program', href: '#' },
  //   { name: 'Our values', href: '#' },
  //   { name: 'Meet our leadership', href: '#' },
  // ]

  return (
    < >
      <section id={Styles.homeContainer} className="h-[60rem]  z-20 w-auto p-12  max-w-full relative  ">
        <div id={Styles.dd} className="relative flex flex-wrap flex-row gap-36 justify-between">
          <iframe
          id={Styles.fr1}
            ref={iframeRefs.iframe1}
            className={`max-w-full absolute rounded-3xl transition-all duration-300 ${
              clickedIframe === "iframe1"
                ? "top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl"
                : activeIframe === "iframe1"
                ? "z-40 border-4 border-yellow-300 shadow-lg"
                : "z-10"
            }`}
            width="800"
            height="500"
            src="https://www.youtube.com/embed/ueUG-mTjmXs?enablejsapi=1&mute=1"
              // src={Video1}
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onMouseEnter={() => handleMouseEnter("iframe1")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("iframe1")}
          ></iframe>

          <span
            id={Styles.sinu}
            className="absolute right-24 text-2xl top-[10rem] italic font-bold leading-[3rem] text-[10rem] text-amber-400 "
          >
             <Popup text="Sinu" />
          </span>
        </div>

        <div className="relative flex flex-wrap flex-row gap-36 justify-between ">
          <span
            id={Styles.minu}
            className="absolute text-2xl top-[40rem] italic font-bold leading-[3rem] text-[10rem] text-amber-500"
          >
            <Popup text="Minu" />
          </span>
          <iframe

           id={Styles.fr2}
            ref={iframeRefs.iframe2}
            className={`max-w-full absolute rounded-3xl right-28  top-96 transition-all duration-300 ${
              clickedIframe === "iframe2"
                ? "top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl"
                : activeIframe === "iframe2"
                ? "z-40 border-4 border-yellow-300 shadow-lg"
                : "z-10"
            }`}
            width="700"
            height="400"
            src="https://www.youtube.com/embed/OybM7N8d9eE?enablejsapi=1&mute=1"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onMouseEnter={() => handleMouseEnter("iframe2")}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick("iframe2")}
          ></iframe>
        </div>

        
      </section>
      <DragAndDrop />
      <CompanyDetails />
      <AddCollection />

      <WorkWithUs />

      <WhyChooseUs />
      <DragAndDrop />
     
      
    </>
  );
};

export default Home;
