// import React from 'react'
// // import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
// import Vishal from '../../assets/Vishal.jpg'
// import Logo from '../../assets/Logo.jpg'
// import Team from '../../Components/Team/Team';



// export const teamMembers = [
//   {
//     name: "Vishal Singh",
//     role: "Co-Founder / CEO",
//     location: "Nawanagr, Bihar",
//     image: Vishal,
//   },
//   {
//     name: "Vishal Singh",
//     role: "Co-Founder / CEO",
//     location: "Nawanagr, Bihar",
//     image: Vishal,
//   },
//   {
//     name: "Vishal Singh",
//     role: "Co-Founder / CEO",
//     location: "Nawanagr, Bihar",
//     image: Vishal,
//   },
//   {
//     name: "Vishal Singh",
//     role: "Co-Founder / CEO",
//     location: "Nawanagr, Bihar",
//     image: Vishal,
//   },
// ];
// const about = () => {
//   return (
//     <>
//     {/* <WhyChooseUs/> */}



//     <section className="bg-white py-16 px-6 text-center">
//       <div className="max-w-5xl mx-auto">
//         <h1 className="text-[3rem] font-bold text-gray-900">About Me</h1>
//         <p className="text-gray-600 mt-4">
//           <span className='text-amber-600'>Sinu Minu Animation PVT LTD </span> 
//          is a creative animation studio specializing in high-quality animated videos, cartoons, and graphic scenes. With a passion for storytelling and visual artistry, the company brings characters and ideas to life through stunning animations. Whether it's 2D, 3D, motion graphics, or character animation, Sinu Minu Animation delivers engaging content for entertainment, advertising, and digital media. Dedicated to innovation and creativity, the studio aims to captivate audiences with immersive and visually compelling animations.
//         </p>

//         <div className="flex justify-center mt-8 gap-10">
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-900">01 Year</h3>
//             <p className="text-gray-500">Experience</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-900">50+</h3>
//             <p className="text-gray-500">Happy Clients</p>
//           </div>
//           <div className="text-center">
//             <h3 className="text-2xl font-bold text-gray-900">29+</h3>
//             <p className="text-gray-500">Delivered Projects</p>
//           </div>
//         </div>

//         <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
//           <div className="md:w-1/3 space-y-6 text-left">
//             <Service title="Expert in High-Quality Animation" />
//             <Service title="Passion for Storytelling" />
//           </div>
//           <div className="md:w-1/3 flex justify-center">
//             <img
//               src={Logo}
//               alt="Profile"
//               className="rounded-full w-64 h-64 object-cover border-4 border-amber-400"
//             />
//           </div>
//           <div className="md:w-1/3 space-y-6 text-left">
//             <Service title="Versatile Content Creation" />
//             <Service title="Innovation and Creativity" />
//           </div>
//         </div>
//       </div>
//     </section>
  







//     <Team members={teamMembers} />



//     </>
//   )
// }


// const Service = ({ title }) => {
//   return (
//     <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
//       <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
//         <span className="text-xl">🔊</span>
//       </div>
//       <div>
//         <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
//         <p className="text-gray-500 text-sm">
//           Proin gravida nibh vel velit auctor aliquet aks Aenean sollicitudin, lorem quis.
//         </p>
//       </div>
//     </div>
//   );
// };
// export default about



import React from 'react';
import Vishal from '../../assets/Vishal.jpg';
import Logo from '../../assets/Logo.jpg';
import Team from '../../Components/Team/Team';

export const teamMembers = [
  {
    name: "Vishal Singh",
    role: "Co-Founder / CEO",
    location: "Nawanagr, Bihar",
    image: Vishal,
  },
  {
    name: "Vishal Singh",
    role: "Co-Founder / CEO",
    location: "Nawanagr, Bihar",
    image: Vishal,
  },
  {
    name: "Vishal Singh",
    role: "Co-Founder / CEO",
    location: "Nawanagr, Bihar",
    image: Vishal,
  },
  {
    name: "Vishal Singh",
    role: "Co-Founder / CEO",
    location: "Nawanagr, Bihar",
    image: Vishal,
  },
];

const services = [
  { title: "Expert in High-Quality Animation", description: "Specializing in 2D, 3D, motion graphics, and character animation." },
  { title: "Passion for Storytelling", description: "Bringing characters and ideas to life with engaging narratives." },
  { title: "Versatile Content Creation", description: "Creating animations for entertainment, branding, and digital media." },
  { title: "Innovation and Creativity", description: "Blending technology and artistic excellence for immersive visuals." }
];

const About = () => {
  return (
    <>
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[3rem] font-bold text-gray-900">About Me</h1>
          <p className="text-gray-600 mt-4">
            <span className='text-amber-600'>Sinu Minu Animation PVT LTD </span>
            is a creative animation studio specializing in high-quality animated videos, cartoons, and graphic scenes. With a passion for storytelling and visual artistry, the company brings characters and ideas to life through stunning animations.
          </p>

          <div className="flex justify-center mt-8 gap-10">
            <Stat title="01 Year" subtitle="Experience" />
            <Stat title="50+" subtitle="Happy Clients" />
            <Stat title="29+" subtitle="Delivered Projects" />
          </div>

          <div className="flex flex-col md:flex-row items-center mt-12 gap-8">
            <div className="md:w-1/3 space-y-6 text-left">
              {services.slice(0, 2).map((service, index) => (
                <Service key={index} title={service.title} description={service.description} />
              ))}
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src={Logo}
                alt="Profile"
                className="rounded-full w-64 h-64 object-cover border-4 border-amber-400"
              />
            </div>
            <div className="md:w-1/3 space-y-6 text-left">
              {services.slice(2, 4).map((service, index) => (
                <Service key={index} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Team members={teamMembers} />
    </>
  );
};

const Service = ({ title, description }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm">
      <div className="w-10 h-10 bg-indigo-200 rounded-full flex items-center justify-center">
        <span className="text-xl">🔊</span>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-500 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Stat = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
};

export default About;
