"use client"

import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider() {

    return (
        <ReactCompareSlider
            id="slider"
            itemOne={<ReactCompareSliderImage src="/img/fondoAgua.jpg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/img/fondoCultura.jpg" alt="Image two" />}
        />
    )

}