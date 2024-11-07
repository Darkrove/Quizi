import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import messages from '@/constants/messages';
import { z } from "zod"

export async function POST(request: NextRequest) {
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
  }  catch (error) {
    if (error instanceof z.ZodError) {
      console.log(error)
      return NextResponse.json({ error: error.issues }, { status: 400 })
    }
    return NextResponse.json(
      { error, message: messages.request.failed },
      { status: 500 }
    )
  }
}