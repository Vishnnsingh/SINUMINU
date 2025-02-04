import React, { useState, useRef } from 'react';
import Styles from "../Home/Home.module.css";
import Logo from '../../assets/Logo.jpg'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
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
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    }
  };

  const stopAllVideos = () => {
    Object.values(iframeRefs).forEach(ref => {
      if (ref.current) {
        ref.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  };

  // const links = [
  //   { name: 'Open roles', href: '#' },
  //   { name: 'Internship program', href: '#' },
  //   { name: 'Our values', href: '#' },
  //   { name: 'Meet our leadership', href: '#' },
  // ]
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  return (

    <> 
    <section className="h-[60rem] z-20 w-auto p-12  max-w-full relative ">
      <div className="relative flex flex-row gap-36 justify-between">
        <iframe
          ref={iframeRefs.iframe1}
          className={`max-w-full absolute rounded-3xl transition-all duration-300 ${
            clickedIframe === 'iframe1'
              ? 'top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl'
              : activeIframe === 'iframe1'
              ? 'z-40 border-4 border-yellow-300 shadow-lg'
              : 'z-10'
          }`}
          width="800"
          height="500"
          src="https://www.youtube.com/embed/ueUG-mTjmXs?enablejsapi=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onMouseEnter={() => handleMouseEnter('iframe1')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('iframe1')}
        ></iframe>

        <span id={Styles.sinu} className="absolute right-24 text-2xl top-[10rem] italic font-bold leading-[3rem] text-[10rem] text-amber-400 ">
          Sinu
        </span>
      </div>

      <div className="relative">
        <span id={Styles.minu} className="absolute text-2xl top-[40rem] italic font-bold leading-[3rem] text-[10rem] text-amber-500">
          Minu
        </span>
        <iframe
          ref={iframeRefs.iframe2}
          className={`max-w-full absolute rounded-3xl right-28 top-96 transition-all duration-300 ${
            clickedIframe === 'iframe2'
              ? 'top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl'
              : activeIframe === 'iframe2'
              ? 'z-40 border-4 border-yellow-300 shadow-lg'
              : 'z-10'
          }`}
          width="700"
          height="400"
          src="https://www.youtube.com/embed/OybM7N8d9eE?enablejsapi=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onMouseEnter={() => handleMouseEnter('iframe2')}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick('iframe2')}
        ></iframe>
      </div>
    </section>
    


    <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl">
            SINU MINU ANIMATION PRIVATE LIMITED
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            The company is registered under the Registrar of Companies (RoC), Patna, and is actively contributing to the creative and animation industry.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                         src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>


      <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
      

      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* <img
        alt=""
        src=""
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
      /> */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-amber-600 sm:text-7xl">Work with us</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div> */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-amber-500">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>






      </section>

     <WhyChooseUs />

    </>
     
  );
};

export default Home;







// import React, { useState, useRef } from 'react';
// import Styles from "../Home/Home.module.css";
// import Logo from '../../assets/Logo.jpg'
// import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
// const Home = () => {
//   const [activeIframe, setActiveIframe] = useState(null);
//   const [clickedIframe, setClickedIframe] = useState(null);
//   const iframeRefs = {
//     iframe1: useRef(null),
//     iframe2: useRef(null),
//   };

//   const handleMouseEnter = (id) => {
//     if (!clickedIframe) {
//       setActiveIframe(id);
//       playVideo(id);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!clickedIframe) {
//       stopAllVideos();
//       setActiveIframe(null);
//     }
//   };

//   const handleClick = (id) => {
//     setClickedIframe((prev) => (prev === id ? null : id));
//   };

//   const playVideo = (id) => {
//     stopAllVideos(); // Stop other videos
//     const iframe = iframeRefs[id]?.current;
//     if (iframe) {
//       iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//     }
//   };

//   const stopAllVideos = () => {
//     Object.values(iframeRefs).forEach(ref => {
//       if (ref.current) {
//         ref.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//       }
//     });
//   };

//   // const links = [
//   //   { name: 'Open roles', href: '#' },
//   //   { name: 'Internship program', href: '#' },
//   //   { name: 'Our values', href: '#' },
//   //   { name: 'Meet our leadership', href: '#' },
//   // ]
//   const stats = [
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
//   ]
//   return (

//     <> 
//     <section className="h-[60rem] z-20 w-auto p-12  max-w-full relative ">
//       <div className="relative flex flex-row gap-36 justify-between">
//         <iframe
//           ref={iframeRefs.iframe1}
//           className={`max-w-full absolute rounded-3xl transition-all duration-300 ${
//             clickedIframe === 'iframe1'
//               ? 'top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl'
//               : activeIframe === 'iframe1'
//               ? 'z-40 border-4 border-yellow-300 shadow-lg'
//               : 'z-10'
//           }`}
//           width="800"
//           height="500"
//           src="https://www.youtube.com/embed/ueUG-mTjmXs?enablejsapi=1&mute=1"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//           onMouseEnter={() => handleMouseEnter('iframe1')}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleClick('iframe1')}
//         ></iframe>

//         <span id={Styles.sinu} className="absolute right-24 text-2xl top-[10rem] italic font-bold leading-[3rem] text-[10rem] text-amber-400 ">
//           Sinu
//         </span>
//       </div>

//       <div className="relative">
//         <span id={Styles.minu} className="absolute text-2xl top-[40rem] italic font-bold leading-[3rem] text-[10rem] text-amber-500">
//           Minu
//         </span>
//         <iframe
//           ref={iframeRefs.iframe2}
//           className={`max-w-full absolute rounded-3xl right-28 top-96 transition-all duration-300 ${
//             clickedIframe === 'iframe2'
//               ? 'top-0 left-0 z-50 border-4 border-yellow-500 shadow-xl'
//               : activeIframe === 'iframe2'
//               ? 'z-40 border-4 border-yellow-300 shadow-lg'
//               : 'z-10'
//           }`}
//           width="700"
//           height="400"
//           src="https://www.youtube.com/embed/OybM7N8d9eE?enablejsapi=1&mute=1"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//           onMouseEnter={() => handleMouseEnter('iframe2')}
//           onMouseLeave={handleMouseLeave}
//           onClick={() => handleClick('iframe2')}
//         ></iframe>
//       </div>
//     </section>
    


//     <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
//     <div className="relative overflow-hidden bg-white">
//       <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl">
//             SINU MINU ANIMATION PRIVATE LIMITED
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//             The company is registered under the Registrar of Companies (RoC), Patna, and is actively contributing to the creative and animation industry.
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                          src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* <a
//                 href="#"
//                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//               >
//                 Shop Collection
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>


//       <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
      

//       <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
//       {/* <img
//         alt=""
//         src=""
//         className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
//       /> */}
//       <div
//         aria-hidden="true"
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div
//         aria-hidden="true"
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-5xl font-semibold tracking-tight text-amber-600 sm:text-7xl">Work with us</h2>
//           <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//             fugiat veniam occaecat fugiat.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//           {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//             {links.map((link) => (
//               <a key={link.name} href={link.href}>
//                 {link.name} <span aria-hidden="true">&rarr;</span>
//               </a>
//             ))}
//           </div> */}
//           <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="flex flex-col-reverse gap-1">
//                 <dt className="text-base/7 text-gray-300">{stat.name}</dt>
//                 <dd className="text-4xl font-semibold tracking-tight text-amber-500">{stat.value}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>






//       </section>

//      <WhyChooseUs />

//     </>
     
//   );
// };

// export default Home;












// import React, { useState, useRef } from 'react';
// import Styles from "../Home/Home.module.css";
// import Logo from '../../assets/Logo.jpg';
// import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

// const Home = () => {
//   const [clickedIframe, setClickedIframe] = useState(false);
//   const iframeRef = useRef(null);

//   const handleClick = () => {
//     setClickedIframe((prev) => !prev);
//   };

//   const playVideo = () => {
//     const iframe = iframeRef.current;
//     if (iframe) {
//       iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//     }
//   };

//   const stopVideo = () => {
//     const iframe = iframeRef.current;
//     if (iframe) {
//       iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//     }
//   };

//   const stats = [
//     { name: 'Offices worldwide', value: '12' },
//     { name: 'Full-time colleagues', value: '300+' },
//     { name: 'Hours per week', value: '40' },
//     { name: 'Paid time off', value: 'Unlimited' },
//   ]

//   return (
//     <> 
//       <section className="h-screen w-full p-0 m-0 relative">
//         <iframe
//           ref={iframeRef}
//           className={`w-full h-full absolute top-0 left-0 transition-all duration-300 ${
//             clickedIframe ? 'border-4 border-yellow-500 shadow-xl' : ''
//           }`}
//           src="https://www.youtube.com/embed/ueUG-mTjmXs?enablejsapi=1&mute=1"
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           referrerPolicy="strict-origin-when-cross-origin"
//           allowFullScreen
//           onClick={handleClick}
//           onMouseEnter={playVideo}
//           onMouseLeave={stopVideo}
//         ></iframe>

//         <span className="absolute top-[20rem] left-[15rem]   font-bold text-amber-400  bg-opacity-50 px-4 py-2 rounded-md">
//           SINU MINU  
//         </span>
//       </section>
       

//       <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
//     <div className="relative overflow-hidden bg-white">
//       <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
//         <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
//           <div className="sm:max-w-lg">
//             <h1 className="text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl">
//             SINU MINU ANIMATION PRIVATE LIMITED
//             </h1>
//             <p className="mt-4 text-xl text-gray-500">
//             The company is registered under the Registrar of Companies (RoC), Patna, and is actively contributing to the creative and animation industry.
//             </p>
//           </div>
//           <div>
//             <div className="mt-10">
//               {/* Decorative image grid */}
//               <div
//                 aria-hidden="true"
//                 className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
//               >
//                 <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
//                   <div className="flex items-center space-x-6 lg:space-x-8">
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                          src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                       <div className="h-64 w-44 overflow-hidden rounded-lg">
//                         <img
//                           alt=""
//                           src={Logo}
//                           className="size-full object-cover border-2 border-amber-400"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* <a
//                 href="#"
//                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//               >
//                 Shop Collection
//               </a> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>


//       <section className="h-auto z-20 w-auto p-12 border-amber-200 border-t-2 max-w-full ">
      

//       <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
//       {/* <img
//         alt=""
//         src=""
//         className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
//       /> */}
//       <div
//         aria-hidden="true"
//         className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div
//         aria-hidden="true"
//         className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
//       >
//         <div
//           style={{
//             clipPath:
//               'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//           }}
//           className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
//         />
//       </div>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-5xl font-semibold tracking-tight text-amber-600 sm:text-7xl">Work with us</h2>
//           <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
//             Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
//             fugiat veniam occaecat fugiat.
//           </p>
//         </div>
//         <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
//           {/* <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
//             {links.map((link) => (
//               <a key={link.name} href={link.href}>
//                 {link.name} <span aria-hidden="true">&rarr;</span>
//               </a>
//             ))}
//           </div> */}
//           <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
//             {stats.map((stat) => (
//               <div key={stat.name} className="flex flex-col-reverse gap-1">
//                 <dt className="text-base/7 text-gray-300">{stat.name}</dt>
//                 <dd className="text-4xl font-semibold tracking-tight text-amber-500">{stat.value}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>






//       </section>

//      <WhyChooseUs />






//     </>
//   );
// };

// export default Home;
