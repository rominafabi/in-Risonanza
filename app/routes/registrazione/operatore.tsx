import type { ActionArgs, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Form, Link, useActionData, useLoaderData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createOperatoreSession } from "~/session.server";

import { createOperatore, getOperatoreByEmail } from "~/models/operatore.server";
import { safeRedirect, validateEmail } from "~/utils";
import type { Comune, Role } from "@prisma/client";
import { getComuneListByProv, getProvList } from "~/models/comuni.server";
import { AuthTitle } from "~/components/auth/authComponents";

export async function loader({ params, request }: LoaderArgs) {
  const url = new URL(request.url);
  const query = url.searchParams;
  const sigla = query.get("provincia") || " ";

  const province = await getProvList();
  const comuni = await getComuneListByProv(sigla);
  return json({comuni,province,sigla});
}

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const role = formData.get("role");
  const comune = formData.get("comune");
  const telefono = "332323323";
  const userIs : Role = "PENDING";
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");
  console.log("comune tipo:", typeof comune?.toString())

  if (!validateEmail(email)) {
    return json(
      { errors: { comune: null, email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { comune: null, email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { comune: null, email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  if(!comune || undefined) {
    return json(
      { errors: {email: null, password: null, comune: "Nessun comune selezionato" }},
      { status: 400}
    )
  }

  const existingUser = await getOperatoreByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          password: null,
          comune: null,
        },
      },
      { status: 400 }
    );
  }

  console.log("role is:", typeof role);

  const operatore = await createOperatore(email, password, userIs, comune?.toString(), telefono);

  return createOperatoreSession({
    request,
    operatoreId: operatore.id,
    operatoreRole: operatore.role,
    remember: false,
    redirectTo,
  });
}

export const meta: MetaFunction = () => {
  return {
    title: "Registrazione Operatore",
  };
};

export default function RegistrazioneOperatoreRoute() {
  const [searchParams, setSearchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const comuneRef = React.useRef<HTMLSelectElement>(null);
  const provinciaRef = React.useRef<HTMLSelectElement>(null);
  const data = useLoaderData();

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    } else if (actionData?.errors?.comune) {
      comuneRef.current?.focus();
    }

    if(searchParams.get("provincia") !== " " && searchParams.get("provincia") !== null){
      console.log("provincia is:",searchParams.get("provincia"))
      document.getElementById("comune")?.removeAttribute("disabled");
    }else if(searchParams.get("provincia") === " "){
      console.log("params is empty")
      document.getElementById("comune")?.setAttribute("disabled", '');
    }
  }, [actionData, searchParams]);
  return (
    <div className="flex min-h-full flex-col justify-center">
      <AuthTitle titleText="Crea il tuo profilo da operatore" />
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6" noValidate>

          {/* INPUT OF EMAIL */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-openSans text-blue-gray-500"
            >
              Email address
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
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>
          {/* INPUT OF PASSWORD*/}
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
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-2 ">
            {/* INPUT OF PROVINCE */}
            <div className="w-1/2">
              <label
                htmlFor="Provincia"
                className="block text-sm font-openSans text-blue-gray-500"
              >
                Provincia
              </label>
              <div className="mt-1">
                <select
                  id="provincia"
                  name="provincia"
                  ref={provinciaRef}
                  aria-invalid={actionData?.errors?.comune ? true : undefined}
                  aria-describedby="provincia-error"
                  className="w-full rounded border border-gray-500 px-2 py-2 text-xs focus:ring-main focus:border-main font-openSans text-blue-gray-500"
                  defaultValue={searchParams.get("provincia") || ""}
                  onChange={(e) => {
                    const provincia  = e.target.value
                    setSearchParams({provincia});
                  }}
                >
                  <option value={" "}> </option>
                  {data.province ? 
                  data.province.map((provincia : Comune) => (
                    <option value={provincia.sigla} key={provincia.sigla}>
                        {`${provincia.nomeProv} (${provincia.sigla})`}
                    </option>
                  ))
                  :
                  (<option value={" "}> </option>)}
                </select>
                {actionData?.errors?.comune && (
                <div className="pt-1 text-red-700" id="comune-error">
                    {actionData.errors.comune}
                </div>
                )}
              </div>
            </div>
            {/* INPUT OF COMUNE */}
            <div className="w-1/2">
              <label
                htmlFor="comune"
                className="block text-sm font-openSans text-blue-gray-500"
              >
                Comune
              </label>
              <div className="mt-1">
                <select
                  id="comune"
                  name="comune"
                  ref={comuneRef}
                  aria-invalid={actionData?.errors?.comune ? true : undefined}
                  aria-describedby="comune-error"
                  className="w-full rounded border border-gray-500 px-2 py-2 text-xs focus:ring-main focus:border-main font-openSans text-blue-gray-500"
                  disabled
                >
                  <option value={undefined}> </option>
                  {data.comuni ? 
                  data.comuni.map((comune : Comune) => (
                    <option value={comune.id} key={comune.id}>
                        {`${comune.nome}`}
                    </option>
                  )) : (<option value={undefined}> </option>)}
                </select>
                {actionData?.errors?.comune && (
                <div className="pt-1 text-red-700" id="comune-error">
                    {actionData.errors.comune}
                </div>
                )}
              </div>
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="font-openSans text-base lg:text-lg w-full rounded bg-main  py-2 px-4 text-white hover:bg-white hover:text-main focus:bg-white border-2 border-main"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500 py-2">
              Hai già un account?{" "}
              <Link
                className="text-main underline"
                to={{
                  pathname: "/login/operatore",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
