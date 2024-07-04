"use client"

import React from 'react';
import Slider from "@/components/Slider"

export default function DigitalHub() {

    return (
        <>
            <div id="fondoDigitalHub" className=''>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Innovación</h1>
            </div>
            
            <h1 className='mt-12 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>El futuro ya está aquí</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>

                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
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
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">La aplicación meteorológica perfecta para aquellos que buscan información precisa y confiable sobre el clima.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-left px-5 mt-5 mb-16 lg:mx-0'>
                <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-5xl h-full lg:ms-20 lg:ps-2">
                    {/* <div className='w-96 lg:w-full'> */}
                        <Slider />
                    {/* </div> */}
                    <div className="flex flex-col justify-between leading-normal p-4">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">VR Construye: Visualizando el Futuro de la Construcción</h5>
                        <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Realidad Virtual</p>
                        <p className="mb-5 font-normal text-gray-700 roboto-regular">Nuestro proyecto innovador utiliza VR para crear representaciones 3D inmersivas de planos de construcción para todos los equipos trabajando en la obra.</p>
                    </div>
                </div>
            </div>


            <h1 className='mt-28 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Revolucionando el mundo del reciclaje con IA</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mb-16'>  

                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/contenedor.jpeg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Clasificación de residuos</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Reciclaje</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">Revoluciona la gestión de residuos con nuestro sistema inteligente de separación y almacenamiento.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/contenedorAceite.jpeg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">De aceite usado a biocombustible</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Reciclaje</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Transforma tu aceite usado en combustible limpio con nuestro contenedor ecológico.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}