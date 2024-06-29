"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const CharacterContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  &:hover .thank-you {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ThankYouMessage = styled.div`
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 10px 20px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
`;

const CharacterSelection = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
    const router = useRouter();

    const handleCharacterSelection = (character: string) => {
        setSelectedCharacter(character);
        localStorage.setItem('selectedCharacter', character);
        setTimeout(() => location.href = "/nombre-jugador", 500); // Redirige después de 1.5 segundos
    };

    return (
        <div className="flex items-center px-10 flex-col relative">


            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-6">¿Con quién quieres jugar?</h1>
                <p className="text-xl">Elige tu compañero de aventuras matemágicas</p>
            </div>

            <div className="flex justify-between items-center px-10">
                <CharacterContainer className={selectedCharacter == "Pedro" ? "select-character" : ""} onClick={() => handleCharacterSelection('Pedro')}>
                    <ThankYouMessage className="thank-you">Ayudar a Pedrito</ThankYouMessage>
                    <Image src="/pedro.png" alt="Pedro" width={300} height={300} />
                    <p className="text-center text-white text-2xl mt-4 font-bold">Pedro</p>
                </CharacterContainer>

                <CharacterContainer className={selectedCharacter == "María" ? "select-character" : ""} onClick={() => handleCharacterSelection('María')}>
                    <ThankYouMessage className="thank-you">Ayudar a Marianita</ThankYouMessage>
                    <Image src="/maria.png" alt="María" width={300} height={300} />
                    <p className="text-center text-white text-2xl mt-4 font-bold">Mariana</p>
                </CharacterContainer>
            </div>
            {selectedCharacter != null && selectedCharacter != "" ? (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg">
                    Gracias por ayudarme {selectedCharacter === "Pedro" ? "Aventurero" : selectedCharacter === "María" ? "Aventurera" : ""}
                </div>
            ) : (<span></span>)}

            <style>
                {`
                    .select-character, .select-character:hover {
                        transform: scale(1.4);
                    }
                `}
            </style>

        </div>
    );
};

export default CharacterSelection;