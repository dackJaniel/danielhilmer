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
import { sendEmail } from "./sendEmail";
import {
  SelectItem,
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

const formSchema = z.object({
  firstName: z
    .string({ message: "Bitte gib einen Vornamen ein." })
    .min(2, { message: "Bitte gib mindestens 2 Zeichen ein." })
    .max(50, { message: "Bitte gib maximal 50 Zeichen ein." }),
  lastName: z
    .string({ message: "Bitte gib einen Nachnamen ein." })
    .min(2, { message: "Bitte gib mindestens 2 Zeichen ein." })
    .max(50, { message: "Bitte gib maximal 50 Zeichen ein." }),
  business: z
    .string({ message: "Bitte gib ein Unternehmen ein." })
    .min(2, { message: "Bitte gib mindestens 2 Zeichen ein." })
    .max(50, { message: "Bitte gib maximal 50 Zeichen ein." }),
  email: z
    .string({ message: "Bitte gib deine E-Mail Adresse ein." })
    .email({ message: "Bitte gib eine gültige E-Mail ein." }),
  thema: z.string({ message: "Bitte gib ein Thema ein." }),
  message: z
    .string({ message: "Bitte gib eine Nachricht ein." })
    .min(5, { message: "Bitte gib mindestens 5 Zeichen ein." })
    .max(500, { message: "Bitte gib maximal 500 Zeichen ein." }),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Bitte akzeptiere die Datenschutzbestimmungen",
  }),
});

export function KontaktForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      business: "",
      email: "",
      thema: "",
      message: "",
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
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vorname</FormLabel>
              <FormControl>
                <Input placeholder="Vornamen eingeben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachname</FormLabel>
              <FormControl>
                <Input placeholder="Nachname eingeben" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="business"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unternehmen</FormLabel>
              <FormControl>
                <Input placeholder="Unternehmensnamen eingeben" {...field} />
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
          name="thema"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Thema</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitte eine Antwort auswählen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Allgemeines">
                    Allgemeine Anfrage
                  </SelectItem>
                  <SelectItem value="Individuell-Webseite">
                    Individuelle Webseite
                  </SelectItem>
                  <SelectItem value="WordPress-WebApp">
                    Individuelle WebApp
                  </SelectItem>
                  <SelectItem value="CMS">
                    Content Management System (z.B. WordPress)
                  </SelectItem>
                  <SelectItem value="Etwas anderes">Etwas anderes</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anfrage</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Nachricht eingeben"
                  className="resize-none"
                  {...field}
                />
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
        <Button type="submit">Anfrage stellen</Button>
      </form>
    </Form>
  );
}
