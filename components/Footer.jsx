"use client"

import React from 'react';
import { useState } from 'react';

export default function Footer() {

    return (
        // <div id='footer' className='bg-[#fe0100] text-white p-12'>  
        // </div>

        <footer id="footer" className="bg-[#fe0100] text-white ">
            <div className="mx-auto w-full max-w-screen-xl pt-20">
                <h1 className='pt-6 pb-12 px-4 text-3xl lg:text-6xl font-semibold text-white'>Conoce a nuestro equipo</h1>
                <div className="grid grid-cols-1 gap-8 px-4 py-6 lg:py-8 lg:grid-cols-3">
                    <div>
                        <ul className="text-white font-medium">
                            <li className="mb-8 flex justify-start items-end">
                                <img src='/img/linkedin.svg' className="w-6 h-6 me-2" />
                                <a href='https://www.linkedin.com/in/juan-antonio-garc%C3%ADa-azanza-b85b48216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target="_blank" rel="noopener noreferrer" className='hover:underline'>Juan Antonio García Azanza</a>
                            </li>
                            <li className="mb-8 flex justify-start items-end">
                                <img src='/img/linkedin.svg' className="w-6 h-6 me-2" />
                                <a href='https://www.linkedin.com/in/alba-l%C3%B3pez-carruana/' target="_blank" rel="noopener noreferrer" className='hover:underline'>Alba López Carruana</a>
                            </li>
                            <li className="mb-8 flex justify-start items-end">
                                <img src='/img/linkedin.svg' className="w-6 h-6 me-2" />
                                <a className='hover:underline'>David López Ribes</a>
                            </li>
                            <li className="mb-8 flex justify-start items-end">
                                <img src='/img/linkedin.svg' className="w-6 h-6 me-2" />
                                <a className='hover:underline'>Martina Gallego López</a>
                            </li>
                            <li className="mb-4 flex justify-start items-end">
                                <img src='/img/linkedin.svg' className="w-6 h-6 me-2" />
                                <a href='https://www.linkedin.com/in/ana-mancebo-damborenea/' target="_blank" rel="noopener noreferrer" className='hover:underline'>Ana Mancebo Damborenea</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src='/img/equipo.jpg' className='pb-5'></img>
                    </div>
                    <div></div>
                </div>

                {/* Creditos */}
                <hr className="my-2 border-gray-200" />
                <div className="px-4 py-6 bg-[#fe0100] flex items-center justify-start">
                    <a href="https://github.com/albalk" className="text-white flex justify-start items-end" target="_blank" rel="noopener noreferrer">
                        <img className="w-6 h-6 me-2" src="/img/github.svg" />
                        <p className="text-sm text-white sm:text-center font-medium hover:underline">Desarrollado por Alba López Carruana</p>
                    </a>
                    
                </div>
            </div>
        </footer>


    );

}