"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PlayerSetup = () => {
    const [character, setCharacter] = useState<string | null>(null);
    const [playerName, setPlayerName] = useState('');
    const router = useRouter();

    useEffect(() => {
        const savedCharacter = localStorage.getItem('selectedCharacter');
        if (savedCharacter) {
            setCharacter(savedCharacter);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (playerName.trim()) {
            localStorage.setItem('playerName', playerName);
            router.push('/juego');
        }
    };

    if (!character) {
        return <div className="flex justify-center items-center">Cargando...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center">

            <h1 className="text-3xl font-bold mb-4 mt-10">
                {character === 'Pedro' ? '¡Hola, aventurero!' : '¡Hola, aventurera!'}
            </h1>
            <form onSubmit={handleSubmit} className="w-full max-w-xs">
                <div className="mb-4">
                    <input
                        type="text"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        placeholder={character === 'Pedro' ? 'Ingresa tu nombre, aventurero' : 'Ingresa tu nombre, aventurera'}
                        required
                        className="w-full px-4 py-2 rounded-full bg-white bg-opacity-20 border-2 border-yellow-400 focus:border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 placeholder-gray-300 text-white"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-400 text-purple-700 font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-125"
                >
                    ¡Comenzar aventura!
                </button>
                <button
                    type="button"
                    onClick={() => { localStorage.removeItem("selectedCharacter"); location.href = "/";}}
                    className="mt-1 w-full text-black-700 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Regresar
                </button>
            </form>
        </div>
    );
};

export default PlayerSetup;