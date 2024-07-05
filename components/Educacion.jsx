"use client"

import React from 'react';

export default function Educacion() {

    return(
        <>
            <div id="fondoMobility" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Educación y Empleo</h1>
            </div>

            <h1 className='mt-28 lg:mt-16 mx-6 lg:mx-28 roboto-regular text-3xl lg:text-6xl'>Conectando empleo con oportunidades</h1>
            <hr className="mt-4 mb-8 mx-6 lg:mx-28 border-[#fe0100]" />

            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 mx-6 lg:mx-24'>
                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/campus.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">Campus universitario</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Social</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Hemos decidido crear un campus universitario y añadir una nueva universidad en HarmonyVille. Los objetivos y características de esta iniciativa son los siguientes:</p>
                            <ul className="list-disc list-inside mb-5 font-normal text-gray-700 roboto-regular">
                                <li className='font-normal text-gray-700 roboto-regular'>Aumento del porcentaje de personas con título universitario</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Programas de grado diversos</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Instalaciones modernas y recursos educativos</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Colaboración con empresas locales</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Impulso a la economía local y reducción del desempleo juvenil</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/incentivos.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">INCENTIVOS A LAS EMPRESAS PARA FOMENTAR EL EMPLEO JUVENIL</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Ayudas</p>
                            <ul className="list-disc list-inside mb-5 font-normal text-gray-700 roboto-regular">
                                <li className='font-normal text-gray-700 roboto-regular'>Exención de cotizaciones a la Seguridad Social</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Exención de retenciones en el salario</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Exención del IRPF</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Subvención por contratación</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <div className="max-w-sm lg:px-3 bg-white rounded-lg">
                        <img className="rounded-t-lg" src="/img/aplicacionEmpleo.png" alt="" />
                        <div className="py-5">
                            <h5 className="text-xl font-bold tracking-tight text-gray-900 uppercase roboto-medium">APLICACIÓN EMPLEO</h5>
                            <p className='mb-5 text-[#fe0100] uppercase text-xs roboto-regular'>Social</p>
                            <p className="mb-2 font-normal text-gray-700 roboto-regular">Hemos creado una app móvil exclusiva para jóvenes de 16 a 26 años, diseñada para facilitar su acceso a empleos y programas de formación. Esta app ofrece las siguientes funcionalidades:</p>
                            <ul className="list-disc list-inside mb-5 font-normal text-gray-700 roboto-regular">
                                <li className='font-normal text-gray-700 roboto-regular'>Creación de perfiles personalizados</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Búsqueda y aplicación directa a ofertas de trabajo</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Notificaciones sobre nuevas oportunidades</li>
                                <li className='font-normal text-gray-700 roboto-regular'>Acceso a recursos educativos</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}