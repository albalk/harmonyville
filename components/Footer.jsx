"use client"

import React from 'react';
import { useState } from 'react';

export default function Footer() {

    return (
        // <div id='footer' className='bg-[#fe0100] text-white p-12'>  
        // </div>

        <footer className="bg-[#fe0100] text-white ">
            <div className="mx-auto w-full max-w-screen-xl">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase text-white">Nuestro equipo</h2>
                    <ul className="text-white font-medium">
                        <li className="mb-4">
                            <p>Prueba</p>
                        </li>
                        <li className="mb-4">
                            <p>Prueba</p>
                        </li>
                        <li className="mb-4">
                            <p>Prueba</p>
                        </li>
                        <li className="mb-4">
                            <p>Prueba</p>
                        </li>
                        <li className="mb-4">
                            <p>Prueba</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Contacto</h2>
                    <ul className="text-white font-medium">
                        <li className="mb-4">
                            <img src='/img/linkedin.svg' className="w-8 h-8" />
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Prueba</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Prueba</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="hover:underline">Prueba</a>
                        </li>
                    </ul>
                </div>
                <div></div>
                <div>
                    <h2 className="mb-1 text-sm font-semibold text-white uppercase">¿Quieres saber más?</h2>
                    <h2 className="mb-6 text-sm font-semibold text-white uppercase">Accede a nuestra página</h2>
                    <img src='/img/QR.svg' className="w-8/12 h-8/12" />
                </div>
            </div>

            {/* Creditos */}

            <div className="px-4 py-6 bg-[#fe0100] md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center">Desarrollado por Alba López Carruana
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                    <a href="https://www.linkedin.com/in/alba-l%C3%B3pez-carruana/" className="text-white" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src="/img/linkedin.svg" />
                        <span className="sr-only">LinkedIn account</span>
                    </a>
                    <a href="https://github.com/albalk" className="text-white" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6" src="/img/github.svg" />
                        <span className="sr-only">GitHub account</span>
                    </a>
                </div>
            </div>
            </div>
        </footer>


    );

}