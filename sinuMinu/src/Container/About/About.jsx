import React from 'react'
// import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import Vishal from '../../assets/Vishal.jpg'
import Logo from '../../assets/Logo.jpg'
import Team from '../../Components/Team/Team';



export const teamMembers = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    location: "Toronto, Canada",
    image: Vishal,
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    location: "Glasgow, Scotland",
    image: Vishal,
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    location: "Niagara Falls, Canada",
    image: Vishal,
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    location: "London, England",
    image: Vishal,
  },
];
const about = () => {
  return (
    <>
    {/* <WhyChooseUs/> */}



    <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[3rem] font-bold text-gray-900">About Me</h1>
        <p className="text-gray-600 mt-4">
          <span className='text-amber-600'>Sinu Minu Animation PVT LTD </span> 
         is a creative animation studio specializing in high-quality animated videos, cartoons, and graphic scenes. With a passion for storytelling and visual artistry, the company brings characters and ideas to life through stunning animations. Whether it's 2D, 3D, motion graphics, or character animation, Sinu Minu Animation delivers engaging content for entertainment, advertising, and digital media. Dedicated to innovation and creativity, the studio aims to captivate audiences with immersive and visually compelling animations.
        </p>

        <div className="flex justify-center mt-8 gap-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">01 Year</h3>
            <p className="text-gray-500">Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">50+</h3>
            <p className="text-gray-500">Happy Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">29+</h3>
            <p className="text-gray-500">Delivered Projects</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
          <div className="md:w-1/3 space-y-6 text-left">
            <Service title="Brand Design" />
            <Service title="UI/UX Design" />
          </div>
          <div className="md:w-1/3 flex justify-center">
            <img
              src={Logo}
              alt="Profile"
              className="rounded-full w-64 h-64 object-cover border-4 border-amber-400"
            />
          </div>
          <div className="md:w-1/3 space-y-6 text-left">
            <Service title="Web Development" />
            <Service title="Graphics Design" />
          </div>
        </div>
      </div>
    </section>
  







    <Team members={teamMembers} />



    </>
  )
}


const Service = ({ title }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
      <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
        <span className="text-xl">🔊</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-500 text-sm">
          Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
        </p>
      </div>
    </div>
  );
};
export default about
