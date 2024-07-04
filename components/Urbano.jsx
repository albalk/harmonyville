"use client"

import React from 'react';

export default function Urbano() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element){
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    return (
        <>
            <div id="fondoBestinver" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Entorno urbano</h1>
                {/* <img src="/img/downArrow.svg" className='w-16 flechas' onClick={() => scrollToSection('fondoDigitalHub')}/> */}
            </div>

            <h1 className='mt-12 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Urbanismo</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2'>

                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/estructura.jpeg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Estructura</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Construcción</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">Disfruta de una zona central de cero emisiones, donde encontrarás los negocios y oficinas.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/nucleoCiudad.jpg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Núcleo de la ciudad</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Construcción</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Una zona peatonal, donde los ciudadanos pueden moverse en transporte público, bicicletas y patinetes eléctricos.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/afuerasCiudad.jpg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Afueras la ciudad</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Construcción</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">La zona residencial, donde se encontrarán pequeños edificios y viviendas unifamiliares.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/edificios.jpg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Edificios</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Construcción</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Tendrán la certificación LEED, y estarán hechos mediante módulos prefabricados desmontables. Además cada edificio y vivienda contará con puntos de reciclaje.</p>
                        </div>
                    </div>
                </div>

            </div>

            <h1 className='mt-28 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Transporte</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mb-16'>  

                <div className='flex justify-center mx-5 my-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/parking.jpg" alt="aplicacion parking" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Parking Hubs</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Mobility</p>
                            <p className="mb-5 font-normal text-gray-700 roboto-regular">La entrada al núcleo de la ciudad contará con parking para que los ciudadanos puedan dejar su vehículo y acceder al centro.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/transporte.jpg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Transporte público</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Mobility</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Los ciudadanos tienen acceso a una tarifa mensual para moverse dentro de la ciudad. Para fomentar el uso del transporte público, los ciudadanos tendrán acceso al Parking Hub gratis.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/puntoCarga.jpeg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Puntos de recarga</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Mobility</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Hay puntos de recarga tanto a lo largo de las afueras de la ciudad como en los Parking Hub para cargar los coches, motos y bicis eléctricas.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mx-5 lg:mx-0'>
                    <div className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-xl lg:ps-10">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/img/estacion.jpeg" alt="aplicacion tiempo" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Estaciones</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Mobility</p>
                            <p className="mb-5  font-normal text-gray-700 roboto-regular">Las estaciones de tranvía y autobús eléctrico se encargan de conectar las afueras y el núcleo urbano.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )

}