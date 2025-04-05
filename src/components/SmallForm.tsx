"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { sendEmail } from "@/app/kontakt/sendEmail";

const formSchema = z.object({
  email: z
    .string({ message: "Bitte gib deine E-Mail Adresse ein." })
    .email({ message: "Bitte gib eine gültige E-Mail ein." }),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Bitte akzeptiere die Datenschutzbestimmungen",
  }),
});

export function SmallForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      privacy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await sendEmail(values);

    if (res.success) {
      toast({
        title: "Anfrage erfolgreich gesendet",
        description:
          "Vielen Dank für Ihre Anfrage. Ich melde mich bald bei Ihnen.",
      });
    } else {
      toast({
        title: "Fehler beim Senden der Anfrage",
        description: `Bitte versuche es später erneut:${res.error}`,
      });
    }

    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Mail</FormLabel>
              <FormControl>
                <Input placeholder="E-Mail eingeben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Ich habe die{" "}
                  <Link href="/datenschutz">Datenschutzbestimmungen</Link>{" "}
                  gelesen und akzeptiere diese.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-orange-600 hover:bg-orange-600/80 w-full"
        >
          Kostenloses Erstgespräch anfragen
        </Button>
      </form>
    </Form>
  );
}
