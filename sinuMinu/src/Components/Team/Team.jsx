import React from "react";
import Vishal from '../../assets/Vishal.jpg'


const Team = ({ members }) => {
  return (
    <section className="bg-white-900 text-black py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold">Our team</h2>
        <p className="text-gray-400 mt-4">
          We’re a dynamic group of individuals who are passionate about what we do and dedicated
          to delivering the best results for our clients.
        </p>

        <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {members.map((member, index) => (
            <div key={index} className="bg-amber-600 rounded-xl p-6 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg text-Black-400 font-semibold">{member.name}</h3>
              <p className="text-white">{member.role}</p>
              <p className="text-white text-sm">{member.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
