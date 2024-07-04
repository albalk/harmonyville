"use client"

import React from 'react';

export default function Agua() {

    return(
        <>
            <div id="fondoAgua" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Agua</h1>
            </div>

            <h1 className='mt-28 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Aprovechando cada gota</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mx-6 lg:mx-24'>
                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/recoleccion.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Recolección del agua de lluvia</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Agua</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Haciendo uso de sistemas de recolección de aguas pluviales en cada edificio sumado a el uso de pavimentos permeables para maximizar la recolección de agua.</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/retrete.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Retrete seco</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Agua</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Gracias a su uso, se calcula que ahorraremos 13 mil millones de litros de agua al año.</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">El 90% del agua ahorrada se usará para el riego por goteo de las zonas agrícolas, cubriendo 5 mil hectáreas de terreno al año.</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}