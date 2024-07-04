"use client"

import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider() {

    return (
        <ReactCompareSlider
            id="slider"
            className='mx-4'
            itemOne={<ReactCompareSliderImage src="/img/valdecarros.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/img/realidadVirtual.jpeg" alt="Image two" />}
        />
    )

}