import { EmailTemplate } from '@/components/emailTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const fileSchema = z.object({
  name: z.string(),
  content: z.instanceof(ArrayBuffer),
});

const sendRouteSchema = z.object({
  name: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(20).max(2000),
  attachments: z.array(fileSchema),
});

export async function POST(req: NextRequest) {
  try {
    const json = req.json();
    
    json.then((body) => {
      console.log("body");
      console.log(body);
    });


    // const { name, email, message, subject, attachments } = await json.then((body) => 
    // sendRouteSchema.parse(body));
    
    
    const { name, email, message, subject, attachments } = await json; 

    const attachment = {
      filename: 'example.txt',
      content: Buffer.from('This is an example attachment.'),
    };

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['maxime.noel@epitech.eu'],
      subject: 'Nouveau message de ' + name,
      react: EmailTemplate({ name, email, message, subject}),
      text: 'useless text ??',
      attachments: [attachment], 
      // attachments.map(({ name, content }: {name: string, content: Buffer}) => ({
      //   name,
      //   content: Buffer.from(content),
      // })),
    });

    console.log("data");
    console.log(data);
    
    return NextResponse.json({ data, error: null }, { status: 200 });
  } catch (error) {
    return NextResponse.json({error});

  }
}
