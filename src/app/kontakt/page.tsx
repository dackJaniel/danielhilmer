"use client";

import { Field, Form, Formik } from "formik";
import { ZodError, z } from "zod";
import Link from "next/link";
import { sendEmail } from "./sendEmail";
import { toast } from "react-toastify";

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  privacy: boolean;
}

const formValidationSchema = z.object({
  firstName: z
    .string({ message: "Bitte gib einen Vornamen ein." })
    .min(2, { message: "Bitte gib mindestens 2 Zeichen ein." })
    .max(50, { message: "Bitte gib maximal 50 Zeichen ein." }),
  lastName: z
    .string({ message: "Bitte gib einen Nachnamen ein." })
    .min(2, { message: "Bitte gib mindestens 2 Zeichen ein." })
    .max(50, { message: "Bitte gib maximal 50 Zeichen ein." }),
  email: z
    .string({ message: "Bitte gib deine E-Mail Adresse ein." })
    .email({ message: "Bitte gib eine gültige E-Mail ein." }),
  message: z
    .string({ message: "Bitte gib eine Nachricht ein." })
    .min(5, { message: "Bitte gib mindestens 5 Zeichen ein." })
    .max(500, { message: "Bitte gib maximal 500 Zeichen ein." }),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Bitte akzeptiere die Datenschutzbestimmungen",
  }),
});

type FormValues = z.infer<typeof formValidationSchema>;

export function ThankYou() {
  return (
    <div className="w-full bg-white p-14 rounded-3xl">
      <h1 className="text-4xl mb-8">Vielen Dank für deine Nachricht!</h1>
      <p className="text-lg">
        Ich werde mich so schnell wie möglich bei dir melden.
      </p>
    </div>
  );
}

export default function Kontakt() {
  const validateForm = (values: FormValues) => {
    try {
      formValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  return (
    <>
      <main className="py-8 flex flex-col md:flex-row gap-4 items-center max-w-lg md:max-w-xl m-auto">
        <div className="w-full bg-white p-14 rounded-3xl">
          <h1 className="text-4xl mb-8">Kontakt aufnehmen</h1>
          <Formik<FormValues>
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              message: "",
              privacy: false,
            }}
            validate={validateForm}
            onSubmit={async (values: IFormValues, { resetForm }) => {
              toast.promise(sendEmail(values), {
                pending: "Nachricht wird gesendet...",
                success: {
                  render() {
                    resetForm();
                    return "Nachricht wurde erfolgreich versendet.";
                  },
                },
                error:
                  "Es ist ein Fehler aufgetreten. Bitte versuche es erneut.",
              });
            }}>
            {({ errors, touched }) => (
              <Form className="flex flex-col w-full gap-3">
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName" className="text-sm">
                    Vorname
                  </label>
                  <Field
                    id="firstName"
                    name="firstName"
                    placeholder="Vorname"
                    className={`border border-gray-100 rounded-md p-2 ${
                      errors.firstName && touched.firstName && "border-red-500"
                    }`}
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="text-red-500">{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="text-sm">
                    Nachname
                  </label>
                  <Field
                    id="lastName"
                    name="lastName"
                    placeholder="Nachname"
                    className={`border border-gray-100 rounded-md p-2 ${
                      errors.lastName && touched.lastName && "border-red-500"
                    }`}
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="text-red-500">{errors.lastName}</div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="text-sm">
                    E-Mail
                  </label>
                  <Field
                    id="email"
                    name="email"
                    placeholder="E-Mail Adresse"
                    type="email"
                    className={`border border-gray-100 rounded-md p-2 ${
                      errors.email && touched.email && "border-red-500"
                    }`}
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="message" className="text-sm">
                    Nachricht
                  </label>
                  <Field
                    id="message"
                    name="message"
                    placeholder="Deine Nachricht"
                    as="textarea"
                    className={`border border-gray-100 rounded-md p-2 ${
                      errors.message && touched.message && "border-red-500"
                    }`}
                  />
                  {errors.message && touched.message ? (
                    <div className="text-red-500">{errors.message}</div>
                  ) : null}
                </div>

                <div>
                  <label>
                    <Field type="checkbox" name="privacy" /> Ich stimme den{" "}
                    <Link href="/datenschutz" className="underline">
                      Datenschutzbestimmungen
                    </Link>{" "}
                    zu und akzeptiere, dass meine Daten für diese Anfrage
                    gespeichert und verarbeitet werden.
                  </label>
                  {errors.privacy && touched.privacy ? (
                    <div className="text-red-500">{errors.privacy}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 inline-block rounded-full transition-colors text-slate-100 bg-cyan-900 hover:bg-cyan-700">
                  Absenden
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </main>
    </>
  );
}
