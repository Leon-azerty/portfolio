'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(20).max(2000),
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
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
      } else {
        console.error("Erreur lors de l'envoi de la requête :", response.statusText);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête :", error);
    }
  }

  return (
    <section className="mt-20" id="contact">
      <p className="text-3xl">Contact Me</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Button type="submit">
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
    </section>
  );
}
