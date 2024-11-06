'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Sparkle } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

const questions = [
    {
        question: 'Which game features a plumber as its main character?',
        options: ['Sonic the Hedgehog', 'Mario', 'Crash Bandicoot', 'Pac-Man'],
        correctAnswer: 'Mario',
    },
    {
        question:
            "What's the name of the protagonist in The Legend of Zelda series?",
        options: ['Zelda', 'Ganon', 'Link', 'Epona'],
        correctAnswer: 'Link',
    },
    {
        question: 'Which of these is NOT a Pokémon type?',
        options: ['Fire', 'Water', 'Earth', 'Electric'],
        correctAnswer: 'Earth',
    },
    {
        question: 'What game series features a character named Master Chief?',
        options: ['Gears of War', 'Halo', 'Call of Duty', 'Destiny'],
        correctAnswer: 'Halo',
    },
    {
        question:
            'In Minecraft, what material do you need to create a Nether Portal?',
        options: ['Diamond', 'Gold', 'Obsidian', 'Bedrock'],
        correctAnswer: 'Obsidian',
    },
];

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [saveError, setSaveError] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [userAnswers, setUserAnswers] = useState<{ questionId: string; questionText: string; selectedAnswer: string }[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        setName(searchParams.get('name') || '');
        setEmployeeId(searchParams.get('employeeId') || '');
    }, [searchParams]);

    const handleAnswerClick = async (selectedAnswer: string) => {
        const currentQuestionData = questions[currentQuestion];
        
        // Temporarily store the answer to ensure the last answer is included
        const answer = {
            questionId: String(currentQuestion), // Assuming question index as ID
            questionText: currentQuestionData.question,
            selectedAnswer,
        };
    
        // Update the userAnswers state immediately with the new answer
        setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    
        // Update score if the answer is correct
        const isCorrect = selectedAnswer === currentQuestionData.correctAnswer;
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }
    
        // Move to the next question or end the quiz
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
            
            // Pass the updated answers array including the last answer to saveQuizResult
            await saveQuizResult(
                score + (isCorrect ? 1 : 0),
                [...userAnswers, answer] // Include the last answer directly
            );
        }
    };

    const saveQuizResult = async (finalScore: number, answers: { questionId: string; questionText: string; selectedAnswer: string }[]) => {
        setIsSaving(true);
        setSaveError(null);

        try {
            const response = await fetch('/api/save-quiz-result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    employeeId,
                    score: finalScore,
                    totalQuestions: questions.length,
                    timestamp: new Date().toISOString(),
                    answers,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to save quiz result');
            }

            const data = await response.json();
            if (!data.success) {
                throw new Error(data.error || 'Failed to save quiz result');
            }
        } catch (error) {
            console.error('Error saving quiz result:', error);
            setSaveError('Failed to save your quiz result. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSaveError(null);
        router.push('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 shadow-md">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-w-2xl w-full relative overflow-hidden border border-white/20"
            >
                {showScore ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center relative z-10"
                    >
                        <h2 className="text-4xl font-bold mb-4 text-primary">Game Over!</h2>
                        <div className="text-xl mb-6">
                            <p className="mb-2">Final Score:</p>
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', duration: 0.5 }}
                                className="text-3xl font-bold text-primary"
                            >
                                {score} / {questions.length}
                            </motion.div>
                        </div>
                        {isSaving && (
                            <p className="text-sm text-gray-600 mb-4">
                                Saving your result...
                            </p>
                        )}
                        {saveError && (
                            <p className="text-sm text-red-500 mb-4">{saveError}</p>
                        )}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={restartQuiz}
                            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-primary/90 transition-colors duration-300"
                        >
                            Play Again
                        </motion.button>
                    </motion.div>
                ) : (
                    <div>
                        <div className="relative z-10 grid gap-3">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold">
                                    Question {currentQuestion + 1}/{questions.length}
                                </h2>
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                >
                                    <Sparkle className="w-8 h-8 text-primary" />
                                </motion.div>
                            </div>
                            <p className="text-xl mb-8">
                                {questions[currentQuestion].question}
                            </p>
                            <div className="grid gap-4">
                                {questions[currentQuestion].options.map((option, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{
                                            scale: 1.02,
                                            backgroundColor: 'rgb(var(--primary-foreground) / 0.4)',
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        onClick={() => handleAnswerClick(option)}
                                        className="bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold text-lg shadow-md hover:bg-primary/90 transition-colors duration-300 flex items-center justify-between group"
                                    >
                                        <span>{option}</span>
                                        <motion.div
                                            initial={{ x: -10, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ duration: 0.2 }}
                                            className="opacity-0 group-hover:opacity-100"
                                        >
                                            <ChevronRight className="w-6 h-6" />
                                        </motion.div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                        <motion.div
                            initial={{ width: '0%' }}
                            animate={{
                                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                            }}
                            className="mt-3 h-1 bg-green-600 absolute bottom-0 left-0 rounded-full"
                            style={{ filter: 'blur(1px)' }}
                        />
                    </div>
                )}
            </motion.div>
        </div>
    );
}
const EditPrompt = () => {
    return <Suspense>
        <QuizPage />
    </Suspense>
}
export default EditPrompt