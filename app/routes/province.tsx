import { Outlet, useLoaderData } from "@remix-run/react";
import MyMenu from "./menu";
import type { LoaderArgs, LoaderFunction, Session } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSession } from "~/session.server";
import { Theme, useTheme } from "../utils/theme-provider";

type LoaderData = {
  session: Session;
}; 

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const session = await getSession(request);

  return json<LoaderData>({session});
};

export default function Province() {
   const { session } = useLoaderData() as LoaderData;
   const [theme, setTheme] = useTheme();

   const toggleTheme = () => {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

   return (
      <main className="min-h-screen min-w-screen dark:bg-dark bg-main">
         <MyMenu session={session} toggleTheme={toggleTheme} theme={theme}/>
         <Outlet />
      </main>
   )
}