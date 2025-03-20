'use client';

import { ConfettiButton } from '@/ui/confetti';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import HyperText from '@/ui/hyper-text';
import { Input } from '@/ui/input';
import Ripple from '@/ui/ripple';
import { Textarea } from '@/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IconContext } from 'react-icons';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'sonner';
import * as z from 'zod';

const fileSchema = z.object({
  filename: z.string(),
  content: z.any(),
});

const formSchema = z.object({
  name: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  email: z.string().email().min(2).max(50),
  message: z.string().min(20).max(2000),
  attachments: z.array(fileSchema),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      message: '',
      attachments: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      const response = await fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
          attachments: values.attachments,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        toast.success('Request send. See you soon ;)');
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      toast.error('Error sending the request.');
      console.error('error :', error);
      setIsSubmitting(false);
    }
  }

  return (
    <section className="mt-20" id="contact">
      <div className="flex w-full items-center justify-center space-x-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-between space-x-4 2xl:justify-around">
              <div className="flex w-full flex-col xl:w-[500px] 2xl:w-[700px]">
                <h1 className="text-5xl">Love to hear from you,</h1>
                <h1 className="text-5xl">Get in touch 👋</h1>
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="placeholder" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@gmail.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="attachments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Attachments</FormLabel>
                        <FormControl>
                          <Input
                            type="file"
                            multiple
                            onChange={(e) => {
                              const files = e.target.files;
                              if (files) {
                                Promise.all(
                                  Array.from(files).map(async (file) => ({
                                    filename: file.name,
                                    content: Buffer.from(await file.arrayBuffer()).toString('base64'),
                                  }))
                                ).then((filesArray) => {
                                  field.onChange(filesArray);
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-row-reverse">
              <ConfettiButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <IconContext.Provider value={{ className: 'animate-spin mr-2' }}>
                    <AiOutlineLoading3Quarters />
                  </IconContext.Provider>
                ) : null}
                Submit
              </ConfettiButton>
            </div>
          </form>
        </Form>
        <div className="bg-background relative hidden h-[650px] w-[650px] flex-col items-center justify-center overflow-hidden rounded-lg lg:flex">
          <HyperText className="text-foreground z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap">
            Contact
          </HyperText>
          <Ripple />
        </div>
      </div>
    </section>
  );
}
