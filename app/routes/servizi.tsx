import MainSection from "~/components/mainSection";
import MyMenu from "./menu";
import type { LoaderArgs, LoaderFunction, Session } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getSession } from "~/session.server";
import { useLoaderData } from "@remix-run/react";
import { Theme, useTheme } from "../utils/theme-provider";

type LoaderData = {
  session: Session;
}; 

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const session = await getSession(request);

  return json<LoaderData>({session});
};


export default function Servizi() {
   const { session } = useLoaderData() as LoaderData;
   const [theme, setTheme] = useTheme();

   const toggleTheme = () => {
      setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    };

   return (
      <main className="min-h-screen min-w-screen bg-main dark:bg-dark">
         <MyMenu session={session} toggleTheme={toggleTheme} theme={theme}/>
         <MainSection title="Servizi degli Operatori" typeList={['Naturopatia', 'Tarologia e Cartomanzia', 'Pranoterapia', 'Medicina Tradizionale Cinese', 'Counseling', 'Ipnosi Regressiva ed altro ancora..','']}
         description="Scegli il servizio che più ti interessa e consulta l'elenco degli operatori disponibili per la prenotazione di un trattamento o di un consulto."
         />
      </main>
   )
}