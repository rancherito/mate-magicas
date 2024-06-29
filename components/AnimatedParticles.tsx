"use client";
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const shapes = ['+', '+', '−', '×', '÷', '=', 'π', '−', '×', '÷', '=', 'π'];

const moveVertically = keyframes`
  from { top: -10%; }
  to { top: 110%; }
`;

const moveHorizontally = (amplitude: number) => keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(${amplitude}vw); }
`;

interface ParticleProps {
    symbol: string;
    index: number;
    duration: number;
}

const Particle = styled.span<ParticleProps>`
  position: absolute;
  font-size: 4rem;
  color: ${props => `rgba(253, 224, 71, ${0.4 + props.index * 0.1})`};
  left: ${props => props.index * 16}vw;
  animation: 
    ${moveVertically} ${props => props.duration}s linear infinite,
    ${props => moveHorizontally(10 + props.index * 2)} ${props => 6 + props.index}s ease-in-out infinite;
  animation-delay: ${props => props.index * -3}s;
`;

const ParticleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const getRandomDuration = () => {
    return Math.random() * (40 - 20) + 20; // Random duration between 20 and 40 seconds
};

export const AnimatedParticles: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [particles, setParticles] = useState<Array<{ symbol: string; duration: number }>>([]);

    useEffect(() => {
        setMounted(true);
        setParticles(shapes.map(shape => ({ symbol: shape, duration: getRandomDuration() })));
    }, []);

    if (!mounted) return null; // Avoid rendering on the server

    return (
        <ParticleContainer>
            {particles.map((particle, index) => (
                <Particle key={particle.symbol} symbol={particle.symbol} index={index} duration={particle.duration}>
                    {particle.symbol}
                </Particle>
            ))}
        </ParticleContainer>
    );
};

export default AnimatedParticles;