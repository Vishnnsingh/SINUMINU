// // CreativeAnimation.jsx
// import { useEffect } from 'react';
// import styles from './CreativeAnimation.module.css';
// import TagCanvas from 'tag-canvas';

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

//   const tags = [
//     { name: "Copyright", weight: 20 },
//     { name: "Trademark", weight: 13 },
//     { name: "Patent", weight: 43 },
//     { name: "Tort", weight: 20 },
//     { name: "Antitrust", weight: 23 },
//     { name: "Bankruptcy", weight: 23 },
//     { name: "Copyright", weight: 20 },
//     { name: "Trademark", weight: 13 },
//     { name: "Patent", weight: 43 },
//     { name: "Tort", weight: 20 },
//     { name: "Antitrust", weight: 23 },
//     { name: "Bankruptcy", weight: 23 },
//     { name: "Copyright", weight: 20 },
//     { name: "Trademark", weight: 13 },
//     { name: "Patent", weight: 43 },
//     { name: "Tort", weight: 20 },
//     { name: "Antitrust", weight: 23 },
//     { name: "Bankruptcy", weight: 23 }
//   ];

//   return (
//     <div className={styles.canvasContainer}>
//       <div>
//         <canvas
//           id="resCanvas"
//           width="2000"
//           height="600"
//           className={styles.fadeIn}
//         ></canvas>
//       </div>

//       <ul id="demoTags">
//         {tags.map((tag, index) => (
//           <li key={index}>
//             <a  data-weight={tag.weight}>
//               {tag.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CreativeAnimation;




// CreativeAnimation.jsx




// CreativeAnimation.jsx


import { useEffect } from 'react';
import styles from './CreativeAnimation.module.css';
import TagCanvas from 'tag-canvas';
import Logo from "../../assets/1.png"
import Lo from "../../assets/22.png"
import Logo2 from "../../assets/2.png"

const CreativeAnimation = () => {
  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    TagCanvas.Start('resCanvas', 'demoTags', {
      fadeIn: 500,
      textColour: '#000',
      textHeight: 25,
      maxSpeed: 0.02,
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
    e.preventDefault();  // Prevent the default anchor behavior (no page reload)
    // You can add additional logic here if needed
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
    // { name: "Patent", weight: 43 , imageSrc: Logo},
    // { name: "Tort", weight: 20 , imageSrc: Logo},
    // { name: "Antitrust", weight: 23 , imageSrc: Logo},
    // { name: "Bankruptcy", weight: 23 , imageSrc: Logo2},
    // { name: "Copyright", weight: 20 , imageSrc: Logo},
    // { name: "Trademark", weight: 13 , imageSrc: Lo},
    // { name: "Patent", weight: 43 , imageSrc: Logo2},
    // { name: "Tort", weight: 20 , imageSrc: Logo},
    // { name: "Antitrust", weight: 23 , imageSrc: Logo},
    // { name: "Bankruptcy", weight: 23 , imageSrc: Logo}
  ];

  return (
    <div className={styles.canvasContainer}>
      <div >
        <canvas
          id="resCanvas"
          width="3500"
          height="600"
          className={styles.fadeIn}
        ></canvas>
      </div>

      <ul id="demoTags">
        {tags.map((tag, index) => (
          <li key={index} style={{width:"5px", height: "5px"}}>
            <a 
              href="#!" 
              data-weight={tag.weight}
              onClick={handleClick} // Add the click handler
            >
                <img 
                src={tag.imageSrc} 
                // alt={tag.name} 
                style={{ width: "5px", height: "5px", marginRight: "10px" }} // Optional styling
              />
              {/* {tag.name} */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreativeAnimation;
