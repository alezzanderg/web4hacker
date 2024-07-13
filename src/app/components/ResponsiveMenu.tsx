// components/ResponsiveMenu.tsx
'use client'
// components/ResponsiveMenu.tsx
import React, { useState } from 'react';
import BurgerIcon from './BurgerIcon';

const AlienLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" className="w-12 h-12">
    <g>
      <path stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M43.721,61.985c0,0-2.734-15.485-20.227-15.485   c-6.197,0-6.197,0-6.197,0S16.205,61.985,43.721,61.985z"/>
      <path stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeMiterlimit="10" d="M54.533,61.985c0,0,2.733-15.485,20.229-15.485   c6.195,0,6.195,0,6.195,0S82.048,61.985,54.533,61.985z"/>
      <path fill="none" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" strokeMiterlimit="10" d="M89.079,32.141   C83.037,10.764,61.535,6,49.958,6s-32.996,4.764-39.038,26.141s6.506,37.469,14.403,44.672   c7.897,7.203,19.532,17.921,24.402,17.921c5.154,0,17.053-10.66,24.95-17.863C82.573,69.668,95.121,53.519,89.079,32.141z"/>
    </g>
  </svg>
)

const ResponsiveMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    'ABOUT US', 'EVENTS', 'TEAM', 'PHILOSOPHY', 'RULES', 'CONTACTS'
  ];

  return (
    <nav className="p-4 mt-8">
      <div className="flex justify-between items-center md:hidden">
        <button onClick={toggleMenu} className="text-green-500">
          <BurgerIcon />
        </button>
        <div className="text-green-500">
          <AlienLogo />
        </div>
        <div className="w-6"></div> {/* Placeholder para equilibrar el diseño */}
      </div>

      {/* Menú móvil */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-2 mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="text-center">{item}</li>
          ))}
        </ul>
      </div>

      {/* Menú de escritorio */}
      <div className="hidden md:flex justify-center items-center space-x-8">
        <ul className="flex space-x-6">
          {menuItems.slice(0, 3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="text-green-500">
          <AlienLogo />
        </div>
        <ul className="flex space-x-6">
          {menuItems.slice(3).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ResponsiveMenu;