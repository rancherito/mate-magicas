"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definimos el tipo para nuestras preguntas
type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

// Array de 15 preguntas
const allQuestions: Question[] = [
  { id: 1, question: "¿Cuánto es 2 + 2?", options: ["3", "4", "5"], correctAnswer: 1 },
  { id: 2, question: "¿Cuánto es 5 x 3?", options: ["10", "15", "20"], correctAnswer: 1 },
  { id: 3, question: "¿Cuánto es 10 - 7?", options: ["2", "3", "4"], correctAnswer: 1 },
  { id: 4, question: "¿Cuánto es 12 ÷ 3?", options: ["3", "4", "5"], correctAnswer: 1 },
  { id: 5, question: "¿Cuánto es 7 + 8?", options: ["13", "14", "15"], correctAnswer: 2 },
  { id: 6, question: "¿Cuánto es 9 x 2?", options: ["16", "17", "18"], correctAnswer: 2 },
  { id: 7, question: "¿Cuánto es 20 - 5?", options: ["13", "14", "15"], correctAnswer: 2 },
  { id: 8, question: "¿Cuánto es 18 ÷ 2?", options: ["7", "8", "9"], correctAnswer: 2 },
  { id: 9, question: "¿Cuánto es 6 + 7?", options: ["11", "12", "13"], correctAnswer: 2 },
  { id: 10, question: "¿Cuánto es 4 x 4?", options: ["14", "15", "16"], correctAnswer: 2 },
  { id: 11, question: "¿Cuánto es 25 - 8?", options: ["15", "16", "17"], correctAnswer: 2 },
  { id: 12, question: "¿Cuánto es 30 ÷ 5?", options: ["5", "6", "7"], correctAnswer: 1 },
  { id: 13, question: "¿Cuánto es 11 + 12?", options: ["21", "22", "23"], correctAnswer: 2 },
  { id: 14, question: "¿Cuánto es 3 x 7?", options: ["20", "21", "22"], correctAnswer: 1 },
  { id: 15, question: "¿Cuánto es 40 - 15?", options: ["23", "24", "25"], correctAnswer: 2 },
];

const GameComponent = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [character, setCharacter] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Seleccionar 10 preguntas al azar
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));

    // Obtener el nombre del jugador y el personaje del localStorage
    const name = localStorage.getItem('playerName');
    const char = localStorage.getItem('selectedCharacter');
    if (name) setPlayerName(name);
    if (char) setCharacter(char);
  }, []);

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameOver(true);
    }
  };

  const restartGame = () => {
    localStorage.removeItem('playerName');
    localStorage.removeItem('selectedCharacter');
    location.href = '/';
  };

  if (questions.length === 0) {
    return <div className="text-center">Cargando preguntas...</div>;
  }

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">¡Juego terminado!</h1>
        <p className="text-2xl mb-4">
          {playerName}, tu puntaje final es: {score} de {questions.length}
        </p>
        <button
          onClick={restartGame}
          className="bg-yellow-400 text-purple-700 font-bold py-2 px-4 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
        >
          Jugar de nuevo
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Pregunta {currentQuestionIndex + 1} de {questions.length}</h1>
      <p className="text-xl mb-6">{currentQuestion.question}</p>
      <div className="space-y-4 w-full max-w-md">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-6 text-xl">Puntaje actual: {score}</p>
    </div>
  );
};

export default GameComponent;