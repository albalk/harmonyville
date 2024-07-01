"use client"

import React from 'react';
import { useState } from 'react';

export default function Main() {

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
        <div className="bg-white w-full">
            {/* titulo */}
            <div id='fondoTitulo'>
                <h1 className='titulos py-80 mb-24 lg:pt-44 lg:pb-60 lg:mb-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bienvenidos a <br></br>Harmonyville</h1>
            </div>

            {/* dibujo ciudad */}
            <div id="fondoCiudad" className='h-72 py-72 my-36 lg:h-96 lg:py-96'> {/*pb-64*/}
                {/* <img src='/img/Harmonyville2.png' className='py-24 w-7/12 h-7/12'/> */}
                <img id="pin1" src='/img/hoja2.png' className='w-12' onClick={() => setPin1(!pin1)}/>
                {pin1 && 
                    <div id="textoPin1" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Economía</h5>
                        <p class="font-normal text-xs text-gray-700">El PIB es de 35.000€. La economía está centrada en la artesanía, el turismo y la agricultura. Con tasa de desempleo de 12% y tasa de desempleo juvenil del 40%</p>
                    </div>
                }

                <img id="pin2" src='/img/hoja2.png' className='w-12' onClick={() => setPin2(!pin2)}/>
                {pin2 && 
                    <div id="textoPin2" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Infraestructuras</h5>
                        <p class="font-normal text-xs text-gray-700">Tiene una red de transporte público eficiente, caminos peatonales y ciclistas, además de edificios que se integran en el paisaje natural. Cuenta con sistemas de agua y energía sostenibles y eficientes.</p>
                    </div>
                }

                <img id="pin3" src='/img/hoja2.png' className='w-12' onClick={() => setPin3(!pin3)}/>
                {pin3 && 
                    <div id="textoPin3" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Salud</h5>
                        <p class="font-normal text-xs text-gray-700">La esperanza de vida es de 82 años. La ciudad cuenta con 4 hospitales y 15 clínicas. Cuenta con un enfoque en la salud preventiva y con programas enfocados en la actividad física y la nutrición.</p>
                    </div>
                }

                <img id="pin4" src='/img/hoja2.png' className='w-12' onClick={() => setPin4(!pin4)}/>
                {pin4 && 
                    <div id="textoPin4" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Gobierno local</h5>
                        <p class="font-normal text-xs text-gray-700">Administrada por un alcalde y un consejo municipal de 12 miembros. Tiene un gran enfoque en la inclusión y la diversidad cultural.</p>
                    </div>
                }

                <img id="pin5" src='/img/hoja2.png' className='w-12' onClick={() => setPin5(!pin5)}/>
                {pin5 && 
                    <div id="textoPin5" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Cultura y ocio</h5>
                        <p class="font-normal text-xs text-gray-700">Hay 6 museos, 12 galerías de arte y un calendario de festivales culturales durante todo el año. Los parques y espacios verdes son abundantes y están bien mantenidos, ofreciendo una gran cantidad de actividades al aire libre.</p>
                    </div>
                }

                <img id="pin6" src='/img/hoja2.png' className='w-12' onClick={() => setPin6(!pin6)}/>
                {pin6 && 
                    <div id="textoPin6" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Clima</h5>
                        <p class="font-normal text-xs text-gray-700">Goza de un clima subtropical, con veranos calurosos e inviernos suaves. La temperatura media anual es de 18ºC. Hay un estrés hídrico de nivel 4.</p>
                    </div>
                }

                <img id="pin7" src='/img/hoja2.png' className='w-12' onClick={() => setPin7(!pin7)}/>
                {pin7 && 
                    <div id="textoPin7" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Población</h5>
                        <p class="font-normal text-xs text-gray-700">Tiene una población de 800.000 habitantes. Con ciudadanos de distintos paises. Es hogar de una gran variedad de comunidades étnicas y culturales. La distribución demográfica es similar a la de Chicago, y cuenta con una densidad de 2.667 habitantes por km2</p>
                    </div>
                }

                <img id="pin8" src='/img/hoja2.png' className='w-12' onClick={() => setPin8(!pin8)}/>
                {pin8 && 
                    <div id="textoPin8" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900">Educación</h5>
                        <p class="font-normal text-xs text-gray-700">Cuenta con 40 escuelas primarias, 15 institutos y 1 universidad, todas enfocadas en la educación integral y desarrollo cultural. El 85% de los estudiantes se gradúan en el instituto, y el 45% obtiene el título universitario.</p>
                    </div>
                }

                <img id="pin9" src='/img/hoja2.png' className='w-12' onClick={() => setPin9(!pin9)}/>
                {pin9 && 
                    <div id="textoPin9" class="block w-11/12 md:w-80 p-3 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-md font-bold tracking-tight text-gray-900 ">Superficie</h5>
                        <p class="font-normal text-xs text-gray-700">Harmonyville se extiende por un área de 300 kilómetros cuadrados.</p>
                    </div>
                }

            </div>

            

            {/* agua */}
            <div id="fondoAgua" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Agua</h1>
            </div>

            {/* real state */}
            <div id="fondoRealState" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Real State</h1>
            </div>

            {/* Mobility */}
            <div id="fondoMobility" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Mobility</h1>
            </div>

            {/* Bestinver */}
            <div id="fondoBestinver" className='py-14  my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bestinver</h1>
            </div>

            {/* Cultura */}
            <div id="fondoCultura" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Cultura</h1>
            </div>

            {/* Construcción */}
            <div id="fondoConstrucción" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Construcción</h1>
            </div>

            {/* Digital Hub */}
            <div id="fondoDigitalHub" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Digital Hub</h1>
            </div>

            {/* Energía */}
            <div id="fondoEnergía" className='py-14 my-24'>
                <h1 className='titulos py-96 lg:py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Energía</h1>
            </div>

        </div>
    );
}