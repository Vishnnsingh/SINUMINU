import React, { useState } from 'react';
import Logo from "../../assets/Logo.jpg"
const AddCollection = () => {
  const [collections, setCollections] = useState([
    { id: 1, title: "Funny ", image: Logo },
    { id: 2, title: "Aniamtion", image: Logo },
    { id: 3, title: 'Comedy', image: Logo }
  ]);

  return (
    <div className="bg-amber-500 p-4 pb-10 ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Welcome to Our Aniamtion World!
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-4 text-center ">
        <h2 className="text-3xl font-bold text-[rgb(35, 36, 69)]">Our Ultimate Experience.</h2>
       

        <div className="flex flex-wrap justify-center gap-14 mt-6 mb-10">
          {collections.map((item) => (
            <div
              key={item.id}
              className="w-64 bg-white shadow-md rounded-md overflow-hidden border-2 border-b-gray-800 cursor-pointer"
            >
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