import { EmailTemplate } from '@/components/emailTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const fileSchema = z.object({
  filename: z.string(),
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

    for (const attachment of attachments) {
      console.log(attachment);
    }
    
    const attachment = {
      filename: attachments[0].filename,
      content: attachments[0].content,
    };
    console.log("typeof(attachments[0].content) : ", typeof(attachments[0].content));
    console.log("attachments[0].content : ", attachments[0].content);
    console.log("attachment.content : ", attachment.content);

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['maxime.noel@epitech.eu'],
      subject: 'Nouveau message de ' + name,
      react: EmailTemplate({ name, email, message, subject}),
      text: 'useless text ??',
      attachments: [attachment],
    });

    if (data.error) {
      console.error("data.error :");
      console.error(data.error);
      return NextResponse.json({ data, error: data.error }, { status: 500 });
    } else {
      return NextResponse.json({ data, error: null }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({error});

  }
}
