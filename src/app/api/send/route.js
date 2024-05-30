import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/resend';

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log(email, subject, message);
    const data = await sendEmail({ email, subject, message });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}