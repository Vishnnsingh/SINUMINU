import React, { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import Logo from "..//../assets/Logo.jpg"
import { Bars3Icon, XMarkIcon, MapPinIcon  } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';



const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Contact', to: '/contact' },
  { name: 'About', to: '/about' },
  { name: 'Blog', to: '/work' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <Disclosure as="nav"  className="  rounded-bl-[20px] rounded-tr-[20px]  bg-[rgb(35,36,69)] pt-2 pb-3 sticky left-0 right-0 top-0 z-50 ">
         {/* <div className='bg-red-500'><h1>hello</h1></div> */}
      <div  className="mx-auto max-w-7xl px-2 sm:px-6   lg:px-8">
        <div  className="relative flex h-16 items-center justify-between">
          <div  className="absolute inset-y-0 left-0   flex items-center sm:hidden">
            <DisclosureButton  className="group relative inline-flex items-center justify-center  rounded-md p-2 text-amber-400 hover:bg-amber-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden  size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 gap-[26rem] items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center ">
              <img
                alt="Your Company"
                src={Logo}
                className="h-8 w-auto "
              />
            </div>
            
            <div className="hidden sm:ml-6 sm:block" >

              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      activePath === item.to ? 'bg-amber-500 text-white ' : 'text-white hover:bg-black-500 hover:text-white ',
                      'rounded-md px-3 py-2 text-xl font-medium'
                    )}

                    
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>



          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-amber-500 p-1 text-black hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
            >
              <MapPinIcon aria-hidden="true" className="size-6" />
            </button>

            {/* <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden">
                  <img
                    alt="User Profile"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 ring-1 shadow-lg ring-black/5 focus:outline-hidden">
                <MenuItem>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu> */}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">

           
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.to}
              className={classNames(
                activePath === item.to ? 'bg-amber-500 text-white ' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium '
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
