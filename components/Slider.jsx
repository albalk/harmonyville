"use client"

import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function Slider() {

    return (
        <ReactCompareSlider
            id="slider"
            className='me-0'
            itemOne={<ReactCompareSliderImage src="/img/valdecarros.png" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/img/realidadVirtual.jpeg" alt="Image two" />}
        />
    )

}