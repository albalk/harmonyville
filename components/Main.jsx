"use client"

import React from 'react';
import Map from "@/components/Map"
import DigitalHub from "@/components/DigitalHub"
import Urbano from "@/components/Urbano"

export default function Main() {

    return (
        <div className="bg-white w-full">
            {/* titulo */}
            <div id='fondoTitulo'>
                <h1 className='titulos py-80 lg:pt-44 lg:pb-60 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white text-opacity-0'>Bienvenidos a <br></br>Harmonyville</h1>
            </div>

            <Map />

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

            {/* Urbanismo */}
            <Urbano />

            {/* Digital Hub */}
            <DigitalHub />

        </div>
    );
}