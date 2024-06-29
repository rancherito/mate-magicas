"use client";
import React, { useEffect, useState } from 'react';

interface ParticleProps {
    symbol: string;
    index: number;
}

const getRandomValue = (min: number, max: number) => Math.random() * (max - min) + min;
const getRandomDuration = () => {
    const durations = [10, 20, 40];
    return durations[Math.floor(Math.random() * durations.length)];
};

export const Particle: React.FC<ParticleProps> = ({ symbol, index }) => {
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowHeight(window.innerHeight);
            setWindowWidth(window.innerWidth);
        }
    }, []);

    if (windowHeight === 0 || windowWidth === 0) {
        return null; // Return null until we have the window dimensions
    }

    const randomAmplitude = getRandomValue(50, 100);
    const randomFrequency = getRandomValue(2, 4);
    const randomDuration = getRandomDuration(); // Get random duration from 10, 20, or 40 seconds
    const randomYStart = getRandomValue(-windowHeight, windowHeight / 2);

    return (
        <g className={`text-yellow-${300 + (index * 100)}`} fill="white">
            <text fontSize="40" x="0" y={randomYStart}>
                {symbol}
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={`0 ${randomYStart}`}
                    to={`0 ${windowHeight + randomYStart}`}
                    dur={`${randomDuration}s`}
                    repeatCount="indefinite"
                    keySplines="0.42 0 0.58 1"
                    calcMode="spline"
                />
                <animateTransform
                    attributeName="transform"
                    type="translate"
                    additive="sum"
                    from={`-${randomAmplitude} 0`}
                    to={`${windowWidth + randomAmplitude} 0`}
                    dur={`${randomFrequency}s`}
                    repeatCount="indefinite"
                    keySplines="0.42 0 0.58 1"
                    calcMode="spline"
                />
            </text>
        </g>
    );
};

export default Particle;
