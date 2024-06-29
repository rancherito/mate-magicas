"use client"
import React, { useState } from 'react';

interface CardProps {
    title: string;
    content: string;
    label?: string;
}

const Card: React.FC<CardProps> = ({ title, content, label }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`bg-gradient-to-br from-purple-600 to-purple-800 border-4 border-purple-900 rounded-xl shadow-2xl p-6 w-80 text-white text-center relative overflow-hidden transition-all duration-300 ease-in-out ${isHovered ? 'transform scale-105' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animation: 'fadeInUp 0.3s ease-out'
            }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500 opacity-20 z-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                </svg>
            </div>

            <div className="relative z-10">
                <div 
                    className="mb-4 text-center"
                    style={{
                        animation: 'fadeInDown 0.3s ease-out 0.1s both'
                    }}
                >
                    <span className="text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                        {title}
                    </span>
                </div>

                <div 
                    className="bg-purple-800 bg-opacity-50 backdrop-filter backdrop-blur-sm border-2 border-purple-400 rounded-lg py-3 px-4 shadow-inner"
                    style={{
                        animation: 'fadeIn 0.3s ease-out 0.2s both'
                    }}
                >
                    <span className="text-lg font-semibold">{content}</span>
                </div>
            </div>

            {label && (
                <div 
                    className="absolute top-2 right-2 bg-yellow-400 text-purple-900 font-bold px-3 py-1 rounded-full text-xs transform rotate-12 shadow-lg"
                    style={{
                        animation: 'popIn 0.3s ease-out 0.3s both'
                    }}
                >
                    {label}
                </div>
            )}

            <div className="absolute bottom-2 right-2">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-6 h-6 text-yellow-300 opacity-50"
                    style={{
                        animation: 'spin 10s linear infinite'
                    }}
                >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            </div>

            <style jsx>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes popIn {
                    0% { opacity: 0; transform: scale(0) rotate(45deg); }
                    100% { opacity: 1; transform: scale(1) rotate(12deg); }
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Card;