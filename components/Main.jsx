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
                <h1 className='titulos pt-44 pb-60 mb-12 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bienvenidos a <br></br>Harmonyville</h1>
            </div>

            {/* dibujo ciudad */}
            <div id="fondoCiudad" className='h-96 py-96'> {/*pb-64*/}
                {/* <img src='/img/Harmonyville2.png' className='py-24 w-7/12 h-7/12'/> */}
                <img id="pin1" src='/img/pin.svg' className='w-12' onClick={() => setPin1(!pin1)}/>
                {pin1 && 
                    <div id="textoPin1" class="block max-w-sm p-6 bg-white border-2 border-red-200 rounded-lg shadow">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Población</h5>
                        <p class="font-normal text-gray-700">Texto</p>
                    </div>
                }

                <img id="pin2" src='/img/pin.svg' className='w-12' onClick={() => setPin2(!pin2)}/>{pin2 && <h1 id="textoPin2">Prueba</h1>}
                <img id="pin3" src='/img/pin.svg' className='w-12' onClick={() => setPin3(!pin3)}/>{pin3 && <h1 id="textoPin3">Prueba</h1>}
                <img id="pin4" src='/img/pin.svg' className='w-12' onClick={() => setPin4(!pin4)}/>{pin4 && <h1 id="textoPin4">Prueba</h1>}
                <img id="pin5" src='/img/pin.svg' className='w-12' onClick={() => setPin5(!pin5)}/>{pin5 && <h1 id="textoPin5">Prueba</h1>}
                <img id="pin6" src='/img/pin.svg' className='w-12' onClick={() => setPin6(!pin6)}/>{pin6 && <h1 id="textoPin6">Prueba</h1>}
                <img id="pin7" src='/img/pin.svg' className='w-12' onClick={() => setPin7(!pin7)}/>{pin7 && <h1 id="textoPin7">Prueba</h1>}
                <img id="pin8" src='/img/pin.svg' className='w-12' onClick={() => setPin8(!pin8)}/>{pin8 && <h1 id="textoPin8">Prueba</h1>}
                <img id="pin9" src='/img/pin.svg' className='w-12' onClick={() => setPin9(!pin9)}/>{pin9 && <h1 id="textoPin9">Prueba</h1>}
            </div>

            

            {/* agua */}
            <div id="fondoAgua">
                <h1 className='titulos py-80 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Agua</h1>
            </div>

            {/* real state */}
            <div id="fondoRealState">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Real State</h1>
            </div>

            {/* Mobility */}
            <div id="fondoMobility">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Mobility</h1>
            </div>

            {/* Bestinver */}
            <div id="fondoBestinver">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Bestinver</h1>
            </div>

            {/* Cultura */}
            <div id="fondoCultura">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Cultura</h1>
            </div>

            {/* Construcción */}
            <div id="fondoConstrucción">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Construcción</h1>
            </div>

            {/* Digital Hub */}
            <div id="fondoDigitalHub">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Digital Hub</h1>
            </div>

            {/* Energía */}
            <div id="fondoEnergía">
                <h1 className='titulos py-80 my-24 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white'>Energía</h1>
            </div>

        </div>
    );
}