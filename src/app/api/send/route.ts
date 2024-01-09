import { EmailTemplate } from '@/components/emailTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendRouteSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(2),
  subject: z.string().min(2),
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, subject }  = await req
    .json()
    .then((body) => sendRouteSchema.parse(body));

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['maxime.noel@epitech.eu'],
      subject: 'Hello world',
      react: EmailTemplate({ name, email, message, subject}),
      text: 'Hello world text',
    });

    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({error});

  }
}
