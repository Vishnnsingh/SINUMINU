import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";
import First from "../../assets/1.png";
import Second from "../../assets/2.png";
import THird from "../../assets/3.png";
import Styles from './AddCollection.module.css'
// import video from "../../assets/Video2.mp4"

const AddCollection = () => {
  const [collections, setCollections] = useState([
    { id: 1, title: "Funny ", image: First },
    { id: 2, title: "Animation", image: Second },
    { id: 3, title: "Comedy", image: THird },
  ]);

  return (
    <div className="  p-4 pb-10 ">
      <h1 className="text-4xl font-bold text-center text-amber-600 mb-16">
        Welcome to Our Aniamtion World!
      </h1>

      <div className="bg-white  rounded-lg border-l-8 border-blue-600 p-4 text-center ">
        <h2 className="text-3xl font-bold text-[rgb(35, 36, 69)] ">
          Our Ultimate Experience.
        </h2>

        <div className="flex flex-wrap justify-center gap-14 mt-20 mb-10">
          {collections.map((item) => (
            // <div
            //   key={item.id}
            //   className="w-64 bg-amber-500 shadow-md rounded-md overflow-hidden  cursor-pointer"
            // >
            //   <div className='w-5 ml-56 mt-3 h-5 rounded-full bg-white'></div>
            //   <img
            //     src={item.image}
            //     alt={item.title}
            //     className="w-full h-64 object-cover"
            //   />

            //   <p className="p-4 font-semibold">
            //   <strong>{item.title}</strong> <br />
            //     Cartoon <br />
            //   </p>
            // </div>

            <div
             
             id={Styles.cc}
             
              key={item.id}
              className="w-64 bg-amber-500 shadow-md rounded-md overflow-hidden cursor-pointer transform -rotate-25 "
            >
              <div className="w-5 ml-56 mt-3 h-5 rounded-full bg-white"></div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <p className="p-4 font-semibold">
                <strong>{item.title}</strong> <br />
                Cartoon <br />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCollection;
