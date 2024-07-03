"use client"

import React from 'react';

export default function Navbar() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <nav className=" bg-white">
            <div className="max-w-full flex flex-wrap items-center justify-between px-10 ">
                <div className="flex items-center gap-4 space-x-3 rtl:space-x-reverse">
                    <img src='/img/logo.svg' className='w-20 h-20'></img>
                </div>

                <h1 className="lg:hidden sm:block mx-auto font-bold text-lg">Harmonyville</h1>                

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    
                    <ul className="font-medium flex flex-col px-2 py-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {/* <li>
                            <a href="#" className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Sostenibilidad</a>
                        </li> */}
                        <li>
                            <a onClick={() => scrollToSection('fondoAgua')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Agua</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoRealState')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Real State</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoMobility')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Mobility</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoBestinver')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Bestinver</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoCultura')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Cultura</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoConstrucción')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Construcción</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoDigitalHub')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Digital Hub</a>
                        </li>
                        <li>
                            <a onClick={() => scrollToSection('fondoEnergía')} className="block py-2 px-3  rounded md:border-0 md:p-0 text-black">Energía</a>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </nav>
    );
}