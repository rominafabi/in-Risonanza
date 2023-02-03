import type { ActionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";
import { AuthTitle } from "~/components/auth/authComponents";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email non valida", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password richiesta" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password troppo corta" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "Esiste già un utente con questa email",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Registrazione Utente",
  };
};

export default function IndexRegistrazioneRoute() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <AuthTitle titleText="Crea il tuo profilo" />
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-openSans text-blue-gray-500"
            >
              Indirizzo email
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-blue-gray-500 px-2 py-1 text-lg focus:border-main focus:ring-main font-openSans text-blue-gray-500"
              />
              {actionData?.errors?.email && (
                <div className="py-1 my-1 rounded px-2 text-white bg-hearth" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-openSans text-blue-gray-500"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-blue-gray-500 px-2 py-1 text-lg focus:ring-main focus:border-main font-openSans text-blue-gray-500"
              />
              {actionData?.errors?.password && (
                <div className="py-1 my-1 rounded px-2 text-white bg-hearth" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>
          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="font-openSans text-base lg:text-lg w-full rounded bg-main  py-2 px-4 text-white hover:bg-white hover:text-main focus:bg-white border-2 border-main"
          >
            Crea un Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500 py-2">
              Hai già un account?{" "}
              <Link
                className="text-main underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
               Effettua il Login
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
