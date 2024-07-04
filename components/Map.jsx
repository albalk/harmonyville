"use client"

import React from 'react';
import { useState } from 'react';

export default function Map() {

    const [pin1, setPin1] = useState(false)
    const [pin2, setPin2] = useState(false)
    const [pin3, setPin3] = useState(false)
    const [pin4, setPin4] = useState(false)
    const [pin5, setPin5] = useState(false)
    const [pin6, setPin6] = useState(false)
    const [pin7, setPin7] = useState(false)
    const [pin8, setPin8] = useState(false)
    const [pin9, setPin9] = useState(false)

    return (
        <div>
            <h1 className='titulos mt-12 mb-4 font-bold text-4xl lg:text-6xl flex justify-center text-center text-black'>Conoce nuestra ciudad</h1>
            <div className='flex justify-center items-center mb-24'>
                <h1 className='text-gray-500 font-semibold'>Todo al alcance de un click</h1>
                <img src='/img/hoja2.png' className='w-10'/>
            </div>            

            {/* <div id="fondoCiudad" className='h-72 py-72 mb-36 lg:h-96 lg:py-96'> */}
            <div id="fondoCiudad" className='mb-36'>
                <div className='flex align-center justify-left grid grid-cols-1 lg:grid-cols-2 gap-8 mx-4 mt-48 lg:my-0 lg:mx-16'>
                    <div className='lg:hidden sm:block'></div>
                    <img src='/img/Harmonyville.png' className='lg:w-full mx-auto'/>
                </div>

                <img id="pin1" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin1(!pin1)}/>
                {pin1 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/economia.png"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Economía</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">El PIB es de 35.000€. La economía está centrada en la artesanía, el turismo y la agricultura. Con tasa de desempleo de 12% y tasa de desempleo juvenil del 40%</p>
                        </div>
                    </div>
                }

                <img id="pin2" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin2(!pin2)}/>
                {pin2 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/infraestructuras.png"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">Infraestructuras</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Tiene una red de transporte público eficiente, caminos peatonales y ciclistas, además de edificios que se integran en el paisaje natural. Cuenta con sistemas de agua y energía sostenibles y eficientes.</p>
                        </div>
                    </div>
                }

                <img id="pin3" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin3(!pin3)}/>
                {pin3 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/salud.jpg"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Salud</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">La esperanza de vida es de 82 años. La ciudad cuenta con 4 hospitales y 15 clínicas. Cuenta con un enfoque en la salud preventiva y con programas enfocados en la actividad física y la nutrición.</p>
                        </div>
                    </div>
                }

                <img id="pin4" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin4(!pin4)}/>
                {pin4 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/gobierno.jpg"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Gobierno local</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Administrada por un alcalde y un consejo municipal de 12 miembros. Tiene un gran enfoque en la inclusión y la diversidad cultural.</p>
                        </div>
                    </div>
                }

                <img id="pin5" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin5(!pin5)}/>
                {pin5 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/cultura.jpg"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Cultura y ocio</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Hay 6 museos, 12 galerías de arte y un calendario de festivales culturales durante todo el año. Los parques y espacios verdes son abundantes y están bien mantenidos, ofreciendo una gran cantidad de actividades al aire libre.</p>
                        </div>
                    </div>
                }

                <img id="pin6" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin6(!pin6)}/>
                {pin6 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/clima.jpg"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Clima</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Goza de un clima subtropical, con veranos calurosos e inviernos suaves. La temperatura media anual es de 18ºC. Hay un estrés hídrico de nivel 4.</p>
                        </div>
                    </div>
                }

                <img id="pin7" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin7(!pin7)}/>
                {pin7 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/poblacion.png"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Población</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Tiene una población de 800.000 habitantes. Con ciudadanos de distintos paises. Es hogar de una gran variedad de comunidades étnicas y culturales. La distribución demográfica es similar a la de Chicago, y cuenta con una densidad de 2.667 habitantes por km2</p>
                        </div>
                    </div>
                }

                <img id="pin8" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin8(!pin8)}/>
                {pin8 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/educacion.png"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Educación</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Cuenta con 40 escuelas primarias, 15 institutos y 1 universidad, todas enfocadas en la educación integral y desarrollo cultural. El 85% de los estudiantes se gradúan en el instituto, y el 45% obtiene el título universitario.</p>
                        </div>
                    </div>
                }

                <img id="pin9" src='/img/hoja2.png' className='w-8 lg:w-12' onClick={() => setPin9(!pin9)}/>
                {pin9 && 
                    <div className="textoPin w-4/5 lg:w-1/3 bg-white border border-gray-200 rounded-lg shadow">
                        <img className="rounded-t-lg hidden lg:block" src="/img/superficie.jpg"/>
                        <div className="p-3 lg:p-5">
                            <h5 className="mb-2 text-xl lg:text-lg font-bold tracking-tight text-gray-900">Superficie</h5>
                            <p className="mb-3 font-normal text-xs lg:text-base text-gray-700">Harmonyville se extiende por un área de 300 kilómetros cuadrados.</p>
                        </div>
                    </div>
                }

            </div>
        </div>
    );

}