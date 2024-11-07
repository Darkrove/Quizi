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
    const body = await request.json();
    
    // Validate input without throwing exception
    const parseResult = quizSchema.safeParse(body);
    if (!parseResult.success) {
      return NextResponse.json({ error: parseResult.error.issues }, { status: 400 });
    }
    const data = parseResult.data;

    console.time("DatabaseOperation");
    const result = await prisma.quizResult.create({
      data: {
        ...data
      },
    });
    console.timeEnd("DatabaseOperation");

    return NextResponse.json({ success: true, insertedId: result.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error, message: messages.request.failed }, { status: 500 });
  }
}