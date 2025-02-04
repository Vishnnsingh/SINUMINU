import React from 'react'
import Logo from '../../assets/Logo.jpg'
import CompanyVideo from '../../assets/video2.mp4'
import First from '../../assets/55.jpg'
const CompanyDetails = () => {
  return (
    <section className="h-auto z-20 w-auto p-12  max-w-full ">
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
                        {/* <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        /> */}
                        <video 
                       
                        className="w-full max-w-3xl rounded-xl shadow-lg"
                        controls
                        autoPlay
                        muted
                        loop
                        >
                         <source src={CompanyVideo} type="video/mp4" />

                        </video>
                      </div>
                      <div className="h-64 w-44 overflow-hidden items-center rounded-lg ">
                        <img
                          alt="Centered Image"
                          src={First}
                          className="size-full  object-cover border-2 border-amber-400"
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
                        {/* <img
                          alt=""
                         src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        /> */}
                        <video 
                       
                       className="w-full max-w-3xl rounded-xl shadow-lg"
                       controls
                       autoPlay
                       muted
                       loop
                       >
                        <source src={CompanyVideo} type="video/mp4" />

                       </video>
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
                        {/* <img
                          alt=""
                          src={Logo}
                          className="size-full object-cover border-2 border-amber-400"
                        /> */}

<video 
                       
                       className="w-full max-w-3xl rounded-xl shadow-lg"
                       controls
                       autoPlay
                       muted
                       loop
                       >
                        <source src={CompanyVideo} type="video/mp4" />

                       </video>
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
  )
}

export default CompanyDetails
