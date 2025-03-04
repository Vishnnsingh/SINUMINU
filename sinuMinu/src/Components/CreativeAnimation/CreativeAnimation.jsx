

// import { useEffect } from 'react';
// import styles from './CreativeAnimation.module.css';
// import TagCanvas from 'tag-canvas';
// import Logo from "../../assets/1.png"
// import Lo from "../../assets/22.png"
// import Logo2 from "../../assets/2.png"

// const CreativeAnimation = () => {
//   useEffect(() => {
//     startAnimation();
//   }, []);

//   const startAnimation = () => {
//     TagCanvas.Start('resCanvas', 'demoTags', {
//       fadeIn: 500,
//       textColour: '#000',
//       textHeight: 25,
//       maxSpeed: 0.02,
//       minBrightness: 0.2,
//       depth: 0.5,
//       pulsateTo: 0.6,
//       initial: [0.03, -0.03],
//       decel: 0.98,
//       reverse: true,
//       imageScale: null,
//       fadeIn: 1000,
//       clickToFront: 600,
//       pulsateTo: 0.2,
//       pulsateTime: 0.5,
//       outlineMethod: 'none',
//       outlineColour: 'none',
//       lock: 'x',
//       shape: 'hcylinder',
//       radiusX: 2.5,
//       wheelZoom: 0,
//     });
//   };

//   const handleClick = (e) => {
//     e.preventDefault();  // Prevent the default anchor behavior (no page reload)
//     // You can add additional logic here if needed
//   };

//   const tags = [
//     { name: "Copyright", weight: 20, imageSrc: Lo },
//     { name: "Trademark", weight: 13 , imageSrc: Logo2},
//     { name: "Patent", weight: 43 , imageSrc: Logo},
//     { name: "Tort", weight: 20 , imageSrc: Logo},
//     { name: "Antitrust", weight: 23 , imageSrc: Logo},
//     { name: "Bankruptcy", weight: 23 , imageSrc: Logo},
//     { name: "Copyright", weight: 20 , imageSrc: Logo},
//     { name: "Trademark", weight: 13 , imageSrc: Logo2},
//     // { name: "Patent", weight: 43 , imageSrc: Logo},
//     // { name: "Tort", weight: 20 , imageSrc: Logo},
//     // { name: "Antitrust", weight: 23 , imageSrc: Logo},
//     // { name: "Bankruptcy", weight: 23 , imageSrc: Logo2},
//     // { name: "Copyright", weight: 20 , imageSrc: Logo},
//     // { name: "Trademark", weight: 13 , imageSrc: Lo},
//     // { name: "Patent", weight: 43 , imageSrc: Logo2},
//     // { name: "Tort", weight: 20 , imageSrc: Logo},
//     // { name: "Antitrust", weight: 23 , imageSrc: Logo},
//     // { name: "Bankruptcy", weight: 23 , imageSrc: Logo}
//   ];

//   return (
//     <div className={styles.canvasContainer}>
//       <div >
//         <canvas
//           id="resCanvas"
//           width="3500"
//           height="600"
//           className={styles.fadeIn}
//         ></canvas>
//       </div>

//       <ul id="demoTags">
//         {tags.map((tag, index) => (
//           <li key={index} style={{width:"5px", height: "5px"}}>
//             <a 
//               href="#!" 
//               data-weight={tag.weight}
//               onClick={handleClick} // Add the click handler
//             >
//                 <img 
//                 src={tag.imageSrc} 
//                 // alt={tag.name} 
//                 style={{ width: "5px", height: "5px", marginRight: "10px" }} // Optional styling
//               />
//               {/* {tag.name} */}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CreativeAnimation;

import { useEffect, useRef, useState } from 'react';
import styles from './CreativeAnimation.module.css';
import TagCanvas from 'tag-canvas';
import Logo from "../../assets/1.png"
import Lo from "../../assets/22.png"
import Logo2 from "../../assets/2.png"

const CreativeAnimation = () => {
  const [animationSpeed, setAnimationSpeed] = useState(0.02); // initial speed
  const tagCanvasRef = useRef(null); // Ref for the canvas
  const canvasInitialized = useRef(false); // Track if canvas is initialized

  useEffect(() => {
    // Initialize the animation only once
    if (!canvasInitialized.current) {
      startAnimation();
      canvasInitialized.current = true;
    }

    // Add scroll listener
    window.addEventListener('wheel', handleScroll);

    return () => window.removeEventListener('wheel', handleScroll); // Cleanup on unmount
  }, []);

  const startAnimation = () => {
    TagCanvas.Start('resCanvas', 'demoTags', {
      fadeIn: 500,
      textColour: '#000',
      textHeight: 25,
      maxSpeed: animationSpeed,
      minBrightness: 0.2,
      depth: 0.5,
      pulsateTo: 0.6,
      initial: [0.03, -0.03],
      decel: 0.98,
      reverse: true,
      imageScale: null,
      fadeIn: 1000,
      clickToFront: 600,
      pulsateTo: 0.2,
      pulsateTime: 0.5,
      outlineMethod: 'none',
      outlineColour: 'none',
      lock: 'x',
      shape: 'hcylinder',
      radiusX: 2.5,
      wheelZoom: 0,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Add additional logic here if needed
  };

  const handleScroll = (e) => {
    // Check the scroll direction and adjust animation speed accordingly
    if (e.deltaY > 0) {
      // Scroll down, slow down the animation
      setAnimationSpeed((prevSpeed) => Math.max(prevSpeed - 0.005, 0.01));
    } else {
      // Scroll up, speed up the animation
      setAnimationSpeed((prevSpeed) => Math.min(prevSpeed + 0.005, 0.05));
    }

    // Update the animation without restarting the canvas
    if (tagCanvasRef.current) {
      tagCanvasRef.current.maxSpeed = animationSpeed;
    }
  };

  const tags = [
    { name: "Copyright", weight: 20, imageSrc: Lo },
    { name: "Trademark", weight: 13 , imageSrc: Logo2},
    { name: "Patent", weight: 43 , imageSrc: Logo},
    { name: "Tort", weight: 20 , imageSrc: Logo},
    { name: "Antitrust", weight: 23 , imageSrc: Logo},
    { name: "Bankruptcy", weight: 23 , imageSrc: Logo},
    { name: "Copyright", weight: 20 , imageSrc: Logo},
    { name: "Trademark", weight: 13 , imageSrc: Logo2},
  ];

  return (
    <div className={styles.canvasContainer}>
      <div >
        <canvas
          id="resCanvas"
          ref={tagCanvasRef}
          width="3500"
          height="700"
          className={styles.fadeIn}
        ></canvas>
      </div>

      <ul id="demoTags">
        {tags.map((tag, index) => (
          <li key={index} style={{width:"5px", height: "5px"}}>
            <a 
              href="#!" 
              data-weight={tag.weight}
              onClick={handleClick} 
            >
              <img 
                src={tag.imageSrc} 
                style={{ width: "5px", height: "5px", marginRight: "10px" }} 
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreativeAnimation;
