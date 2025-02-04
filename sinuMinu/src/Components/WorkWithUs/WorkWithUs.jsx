import React from 'react'
import Styles from './WorkWithUs.module.css'
import Cartoon from '../../assets/22.png'
const WorkWithUs = () => {
  const stats = [
    { name: 'Offices worldwide', value: '12' },
    { name: 'Full-time colleagues', value: '300+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]

  return (
    <section 
    
    
    
    
    className="h-auto z-20 w-auto p-12  max-w-full ">
      <div 
      
      
      
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 opacity-20 blur-2xl"></div>
         
         <div id={Styles.igg} className='absolute top-6 right-[10rem] h-[20rem] rounded-3xl'>
          <img

           className='h-[20rem] pb-20'
           src={Cartoon} 
           alt="" 
           />
         </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 
            
           
            
            
            className="text-5xl font-semibold tracking-tight text-amber-600 sm:text-7xl">
              Work with us
            </h2>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat.
            </p>
          </div>
           
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
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
  )
}

export default WorkWithUs
