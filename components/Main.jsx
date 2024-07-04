"use client"

import React from 'react';
import Map from "@/components/Map"
import Slider from "@/components/Slider"

export default function Main() {

    return (
        <div className="bg-white w-full">
            {/* titulo */}
            <div id='fondoTitulo'>
                <h1 className='titulos py-80 lg:pt-44 lg:pb-60 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bienvenidos a <br></br>Harmonyville</h1>
            </div>

            <Map />

            <Slider />

            {/* agua */}
            <div id="fondoAgua" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Agua</h1>
            </div>

            {/* real state */}
            <div id="fondoRealState" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Real Estate</h1>
            </div>

            {/* Mobility */}
            <div id="fondoMobility" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Mobility</h1>
            </div>

            {/* Bestinver */}
            <div id="fondoBestinver" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bestinver</h1>
            </div>

            {/* Digital Hub */}
            <div id="fondoDigitalHub" className=''>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Digital Hub</h1>
            </div>
            
            <h1 className='mt-12 lg:mt-16 mx-6 lg:mx-16 roboto-regular text-3xl lg:text-6xl'>El futuro ya está aquí</h1>
            <hr className="mt-4 mb-2 mx-6 lg:mx-16 border-gray-200" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>
                
                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/aplicacionParking.jpeg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Park & Charge</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Digital hub</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">Disfruta de una experiencia de aparcamiento más sencilla, segura e intuitiva.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/aplicacionTiempo.jpeg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Smart Skies</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Digital hub</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">La aplicación meteorológica perfecta para aquellos que buscan información precisa y confiable sobre el clima.</p>
                        </div>
                    </div>
                </div>
            </div>


            <h1 className='mt-12 lg:mt-10 mx-6 lg:mx-16 roboto-regular text-3xl lg:text-6xl'>Revolucionando el mundo del reciclaje con IA</h1>
            <hr className="mt-4 mb-2 mx-6 lg:mx-16 border-gray-200" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mb-16'>                
                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/contenedor.jpeg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Reciclaje</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Innovación</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">Revoluciona la gestión de residuos con nuestro sistema inteligente de separación y almacenamiento.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/contenedorAceite.jpeg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">De aceite usado a biocombustible</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Innovación</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Transforma tu aceite usado en combustible limpio con nuestro contenedor ecológico.</p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
}