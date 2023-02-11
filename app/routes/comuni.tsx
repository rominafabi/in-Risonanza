import type { LoaderArgs, LoaderFunction, MetaFunction, Session } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import MyMenu from "./menu";
import { getSession } from "~/session.server";

export const meta: MetaFunction = () => {
   return {
     title: "Operatori Olistici per città",
   };
 };

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