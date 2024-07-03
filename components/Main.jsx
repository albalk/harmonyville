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

            {/* <Slider /> */}

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