import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const { name, employeeId, score, totalQuestions, timestamp, answers } = await request.json();

    const result = await prisma.quizResult.create({
      data: {
        name,
        employeeId,
        score,
        totalQuestions,
        timestamp: new Date(timestamp),
        answers: answers.map((answer: { questionId: string; questionText: string; selectedAnswer: string }) => ({
          questionId: answer.questionId,
          questionText: answer.questionText,
          selectedAnswer: answer.selectedAnswer,
        })),
      },
    });

    return NextResponse.json({ success: true, insertedId: result.id });
  } catch (error) {
    console.error("Error saving quiz result:", error);
    return NextResponse.json({ success: false, error: "Failed to save quiz result" }, { status: 500 });
  }
}