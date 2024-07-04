"use client"

import React from 'react';
import Map from "@/components/Map"
import DigitalHub from "@/components/DigitalHub"
import Urbano from "@/components/Urbano"
import Educacion from "@/components/Educacion"
import Agua from "@/components/Agua"
import Energia from "@/components/Energia"

export default function Main() {

    return (
        <div className="bg-white w-full">
            {/* titulo */}
            <div id='fondoTitulo'>
                <h1 className='titulos py-80 lg:pt-44 lg:pb-60 font-bold text-5xl lg:text-8xl flex justify-center text-center text-white text-opacity-0'>Bienvenidos a <br></br>Harmonyville</h1>
            </div>

            <Map />

            {/* agua */}
            <Agua />

            <Energia />

            {/* Urbanismo */}
            <Urbano />

            {/* Educacion y cultura */}
            <Educacion />

            {/* Digital Hub */}
            <DigitalHub />

        </div>
    );
}