import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import HeaderNav from "~/components/auth/header";
import { getOperatoreId, getUserId } from "~/session.server";

export async function loader({ request }: LoaderArgs) {
  const operatoreId = await getOperatoreId(request);
  const userId = await getUserId(request);
  if (userId || operatoreId) return redirect("/");
  return json({});
}

export default function Registrazione() {
  return (
    <section className="flex h-full max-h-screen max-w-full flex-col md:flex-row">
      <HeaderNav
        toOperatore="/registrazione/operatore"
        textOperatore="Registrati come Operatore"
        toUser="/registrazione"
        textUtente="Registrati come Utente"
      />
      <div id="outlet-container" className="h-full w-full">
        <Outlet />
      </div>
    </section>
  );
}
