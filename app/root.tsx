import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getOperatore, getUser } from "./session.server";
import { ThemeProvider, useTheme , NonFlashOfWrongThemeEls} from './utils/theme-provider';
import tailwindStylesheetUrl from "./styles/tailwind.css";
import globals from "./styles/globals.css";
import { clsx } from "clsx";
import type { LoaderFunction } from '@remix-run/node';
import { getThemeSession } from './utils/theme.server';

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl },{rel: "stylesheet" , href: globals}];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "in Risonanza",
  viewport: "width=device-width,initial-scale=1",
});


export const loader: LoaderFunction = async({ request }: LoaderArgs) => {
  const themeSession = await getThemeSession(request);
  const data = {
    theme: themeSession.getTheme(),
  };
  return json({
    data: data,
    user: await getUser(request),
    operatore: await getOperatore(request),
  });
}

function App() {
  const [theme] = useTheme();
  const data = useLoaderData();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.data.theme)}/>
      </head>
      <body className="h-full">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function AppWithProviders() {
  const data = useLoaderData();
  return (
    <ThemeProvider specifiedTheme={data.data.theme}>
      <App />
    </ThemeProvider>
  );
}
