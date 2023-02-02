import { Outlet, useLoaderData } from "@remix-run/react";
import MyMenu from "./menu";
import type { LoaderArgs, LoaderFunction, Session } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSession } from "~/session.server";

type LoaderData = {
  session: Session;
}; 

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const session = await getSession(request);

  return json<LoaderData>({session});
};

export default function Province() {
   const { session } = useLoaderData() as LoaderData;

   return (
      <main className="min-h-screen min-w-screen">
         <MyMenu session={session}/>
         <Outlet />
      </main>
   )
}