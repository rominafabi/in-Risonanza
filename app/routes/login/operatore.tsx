import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";
import { AuthTitle } from "~/components/auth/authComponents";

import { verifyOperatoreLogin } from "~/models/operatore.server";
import { createOperatoreSession, getOperatoreId, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const operatoreId = await getOperatoreId(request);
  const userId = await getUserId(request);
  if (operatoreId || userId) return redirect("/");
  return json({});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email non valida", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { password: "Password richiesta", email: null } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { password: "Password troppo corta", email: null } },
      { status: 400 }
    );
  }

  const operatore = await verifyOperatoreLogin(email, password);

  if (!operatore) {
    return json(
      { errors: { email: "Email o Password invalide", password: null } },
      { status: 400 }
    );
  }

  return createOperatoreSession({
    request,
    operatoreId: operatore.id,
    operatoreRole: operatore.role,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Login Operatore",
  };
};

export default function LoginOperatorePage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/";
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
      <AuthTitle titleText="Effettua il Login come Operatore" />
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-openSans text-blue-gray-500"
            >
              Indirizzo Email
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
                className="w-full rounded border border-blue-gray-500 px-2 py-1 text-lg focus:ring-main focus:border-main font-openSans text-blue-gray-500"
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
                autoComplete="current-password"
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
            Login
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-blue-gray-300 text-main focus:ring-main accent-main"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-blue-gray-700 font-semiBold"
              >
                Remember me
              </label>
            </div>
            <div className="text-center text-sm text-gray-500 py-2">
              Vuoi diventare un Operatore?{" "}
              <Link
                className="text-main underline"
                to={{
                  pathname: "/registrazione/operatore",
                  search: searchParams.toString(),
                }}
              >
                Registrati
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
