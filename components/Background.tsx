import React from 'react';

const Background: React.FC = () => {
    return (
        <div className="bg-cover bg-center h-screen w-screen" style={{ backgroundImage: 'url(/fondo.webp)' }}>
            <div className="flex flex-col items-center justify-center h-full w-full text-white">
                <h1 className="text-4xl font-bold mb-4">You’ve been promoted!</h1>
                <img src="https://i.imgur.com/0jhtl7y.png" alt="League Icon" className="w-32 h-32 mb-4" />
                <h2 className="text-2xl font-semibold">League level: Legend</h2>
                <p className="text-lg mt-2">In your new League, winning a match can give a maximum Loot Bonus of:</p>
               {}
                 
            </div>
        </div>
    );
};

export default Background;
