"use client"

import React from 'react';

export default function Energia() {

    return(
        <>
            <div id="fondoEnergía" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Energía</h1>
            </div>

            <h1 className='mt-28 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Aprovechando el poder de la naturaleza</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mx-6 lg:mx-24'>
                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg w-full" src="/img/smartGrid.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Smart grid</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Energía</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Gestionar de forma eficiente la generación, transmisión y consumo de electricidad. Incorpora dispositivos de medición de IOT que permiten monitorear y controlar el flujo de energía en tiempo real, optimizando el uso de recursos.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg w-full" src="/img/placas.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Placas solares</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Energía</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Se hará uso de placas solares trasparentes en la cara sur de las fachadas de edificios. Se necesitarán 29 km2 de placas para abastecer a la ciudad.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg w-full" src="/img/recoleccion.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Colectores y placas solares hibridas</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Energía</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Adicionalmente en los tejados de los edificios para aprovechar la mayor irradiancia se colocarán colectores solares y placas solares hibridas para proporcionar el ACS necesaria.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/aerotermia.jpeg" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Aerotermia</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Energía</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Teniendo en cuenta la climatología del lugar la aerotermia tendrá un importante papel ayudando a la climatización.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/hidrogeno.jpeg" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Hidrógeno</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Energía</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Haciendo uso de la energía solar generada fuera de demanda somos capaces de generar hidrógeno equivalente al 30% de la energía total evitando que se pierda.</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Los camiones, transportes  y vehículos de mercancías emplearán hidrogeno para su funcionamiento reduciendo 150 millones de litros de combustible, pero añadiendo 8 km2 de placas solares.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}