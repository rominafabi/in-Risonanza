import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import { NavLink } from "@remix-run/react";
import { IconaHome, IconaOperatore, IconaUtente } from "../icons/icons"

export default function HeaderNav(data: any){
   const active: string = "group bg-white border-2 border-main rounded-lg p-2 hover:bg-main flex flex-row gap-2 justify-center items-center text-main hover:text-white md:min-w-max w-min md:w-full";
   const notActive: string =
     "group bg-main hover:bg-white border-2 border-main rounded-lg p-2 flex flex-row gap-2 justify-center items-center text-white hover:text-main md:min-w-max w-min md:w-full";
   return(
      <header className="md:h-full h-min md:w-max w-full gap-2 border-b-2 flex md:flex-col flex-row-reverse p-2">
          <div className="flex gap-2 md:flex-col flex-row grow-0 md:grow md:w-full w-min">
                <NavLink to={data.toOperatore} prefetch="intent">
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaOperatore fill={isActive ? "fill-main group-hover:fill-white" : "fill-white group-hover:fill-main"}/><p className="hidden md:block">Login Operatore</p>
                    </button>
                  )}
                </NavLink>
                <NavLink to={data.toUser} prefetch="intent" end>
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaUtente fill={isActive ? "fill-main group-hover:fill-white" : "fill-white group-hover:fill-main"} /><p className="hidden md:block">Login Utente</p>
                    </button>
                  )}
                </NavLink>
          </div>
          <div className="w-full grow md:grow-0">
                <NavLink to="/" prefetch="intent">
                  {({ isActive }) => (
                    <button className={isActive ? active : notActive}>
                      <IconaHome fill={isActive ? "fill-main group-hover:fill-white" : "fill-white group-hover:fill-main"}/><p className="hidden md:block">Home</p>
                    </button>
                  )}
                </NavLink>
          </div>
      </header>
   )
}