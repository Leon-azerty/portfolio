'use client';

import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Textarea } from '@/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import Spline from '@splinetool/react-spline/next';
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
      <p className="text-3xl">Contact Me</p>
      <div className="flex w-full justify-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex justify-between space-x-4 2xl:justify-around">
              <div className="flex w-full flex-col xl:w-[500px] 2xl:w-[600px]">
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
              <div className="hidden h-[350px] w-[500px] rounded-xl lg:block 2xl:h-[450px] 2xl:w-[800px]">
                <Spline className="rounded-xl" scene="https://prod.spline.design/coIGKTmEjqMmuZHW/scene.splinecode" />
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
            <div className="flex flex-row-reverse ">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <IconContext.Provider value={{ className: 'animate-spin mr-2' }}>
                    <AiOutlineLoading3Quarters />
                  </IconContext.Provider>
                ) : null}
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
}
