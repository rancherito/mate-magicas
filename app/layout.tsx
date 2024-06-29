import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedParticles } from "@/components/AnimatedParticles";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "Matemágicas",
    description: "Un juego mágico de matemáticas para todas las mentes curiosas",
};

const MagicWand = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12.5 1.5l1.5 3 3 1.5-3 1.5-1.5 3-1.5-3-3-1.5 3-1.5 1.5-3zM5.5 9.5l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2zM18 15l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
    </svg>
);

const MathSymbol = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h16v2H4v-2z" />
    </svg>
);


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <div className="bg-cover bg-center min-h-screen w-screen relative overflow-hidden" style={{ backgroundImage: 'url(/fondo2.webp)' }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-purple-900/40"></div>
                    <AnimatedParticles />
                    <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-white p-4">
                        <div className="border-8 border-yellow-400 rounded-2xl p-8 shadow-2xl relative w-11/12 max-w-4xl min-h-[80vh] text-center bg-black/40 backdrop-blur-sm">
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black font-bold py-2 px-6 rounded-full text-xl shadow-lg flex items-center">
                                <MagicWand />
                                <span className="mx-2">Matemágicas</span>
                                <MathSymbol />
                            </div>
                            {['suma', 'resta', 'multiplicacion', 'division'].map((op, index) => (
                                <div key={op} className={`absolute ${index === 0 ? 'top-0 left-0 -translate-x-1/2 -translate-y-1/2' : index === 1 ? 'top-0 right-0 translate-x-1/2 -translate-y-1/2' : index === 2 ? 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2' : 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'} w-12 h-12 ${['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500'][index]} rounded-full shadow-lg flex items-center justify-center`}>
                                    <span className="text-2xl">{['+', '-', '×', '÷'][index]}</span>
                                </div>
                            ))}
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
                                    ¡Bienvenidos a la Aventura Matemágica!
                                </h1>
                                <p className="text-xl mb-8 text-yellow-200">
                                    Donde cada mente curiosa descubre la magia de los números
                                </p>
                                <div className="flex-grow w-full flex justify-center items-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-4 left-4 text-yellow-400 animate-bounce">
                        <MagicWand />
                    </div>
                    <div className="absolute top-4 right-4 text-yellow-400 animate-bounce">
                        <MathSymbol />
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                        © 2024 Matemágicas - Inspirando mentes jóvenes
                    </div>
                </div>
            </body>
        </html>
    );
}