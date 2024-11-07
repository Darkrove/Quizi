import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';
import messages from '@/constants/messages';
import { z } from "zod"

const quizSchema = z.object({
  name: z.string(),
  employeeId: z.string(),
  score: z.number(),
  totalQuestions: z.number(),
  timestamp: z.string().transform((val) => new Date(val)),
  answers: z.array(
    z.object({
      questionId: z.string(),
      questionText: z.string(),
      selectedAnswer: z.string(),
    })
  ),
});

export async function POST(request: NextRequest) {
  try {
    const data = quizSchema.parse(await request.json());
    console.time("DatabaseOperation");
    const result = await prisma.quizResult.create({
      data: {
        ...data
      },
    });
    console.timeEnd("DatabaseOperation");
    console.time("Response");
    return NextResponse.json({ success: true, insertedId: result.id });
    console.timeEnd("Response");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error, message: messages.request.failed }, { status: 500 });
  }
}