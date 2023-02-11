import { useEffect, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
} from "@material-tailwind/react";
import { Form, NavLink } from "@remix-run/react";
import { Theme } from "../utils/theme-provider";

export default function MyMenu(data: any) {
  const session = data.session;
  const toggleTheme = data.toggleTheme;

  const [openNav, setOpenNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [colorDropDown, setColorDropDown] = useState("white");
  const [colorDropDown2, setColorDropDown2] = useState("white");
  const [classDropDown, selectClassDropDown] = useState("rotate-[-90deg]");
  const [classDropDown2, selectClassDropDown2] = useState("rotate-[-90deg]");
  const [hoveringStat, setHoveringStat] = useState(false);
  const [hoveringStat2, setHoveringStat2] = useState(false);
  const active: string =
    "flex items-center text-main bg-white py-2 px-6 rounded group [&>*]:fill-main font-openSans text-white border";
  const notActive: string =
    "flex items-center hover:text-main hover:bg-white py-2 px-6 rounded group font-openSans text-white border";
  const activeSubClass: string = "hover:bg-[#02c3a5] hover:text-white";

  const showMenu = () => {
    setIsOpen(true);
    setHoveringStat(true);
    setColorDropDown2("#627282");
    selectClassDropDown2("");
  };

  const showOff = () => {
    setIsOpen(false);
    setHoveringStat(false);
    setColorDropDown2("white");
    selectClassDropDown2("rotate-[-90deg]");
  };

  const showMenu2 = () => {
    setIsOpen2(true);
    setHoveringStat2(true);
    setColorDropDown("#627282");
    selectClassDropDown("");
  };

  const showOff2 = () => {
    setIsOpen2(false);
    setHoveringStat2(false);
    setColorDropDown("white");
    selectClassDropDown("rotate-[-90deg]");
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const city = [
    {
      Id: 1,
      Nome: "Roma",
      Link: "/province/rm",
    },
    {
      Id: 2,
      Nome: "Milano",
      Link: "/province/mi",
    },
    {
      Id: 3,
      Nome: "Torino",
      Link: "/province/to",
    },
    {
      Id: 4,
      Nome: "Napoli",
      Link: "/province/na",
    },
    {
      Id: 5,
      Nome: "Bologna",
      Link: "/province/bo",
    },
    {
      Id: 6,
      Nome: "Firenze",
      Link: "/province/fi",
    },
    {
      Id: 7,
      Nome: "Venezia",
      Link: "/province/ve",
    },
    {
      Id: 8,
      Nome: "Genova",
      Link: "/province/ge",
    },
    {
      Id: 9,
      Nome: "L'Aquila",
      Link: "/province/aq",
    },
  ];

  const navList = (
    <ul className="mb-4 mt-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
          end
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/servizi"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
        >
          Servizi
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-normal text-black lg:text-white"
      >
        <NavLink
          to="/citta"
          className={({ isActive }) =>
            isActive
              ? "flex items-center text-[#79b73d]"
              : "flex items-center hover:text-[#79b73d]"
          }
        >
          Città
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar
      className="w-full max-w-full rounded-none bg-transparent py-4 px-4 lg:border-none lg:py-0"
      blurred={false}
      shadow={false}
    >
      {/* NAVIGAZIONE DESKTOP */}
      <div className="container mx-auto flex items-center text-blue-gray-900">
        <NavLink
          prefetch="intent"
          to="/"
          className="cursor-pointer font-normal lg:mx-4"
        >
          <img
            src="/images/logo/inrisonanza.png"
            alt="avatar"
            className="mx-auto h-20 w-auto"
          />
        </NavLink>

        <div className="hidden grow lg:flex">
          <ul className="my-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-2">
            {/* HOME */}
              <NavLink
                prefetch="intent"
                to="/"
                className={({ isActive }) => (isActive ? active : notActive)}
              >
                Home
              </NavLink>
            {/* SERVIZI */}
            <li onMouseEnter={showMenu} onMouseLeave={showOff}>
              <Menu
                open={isOpen}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                  <NavLink
                    prefetch="intent"
                    to="/Servizi"
                    className={({ isActive }) =>
                      isActive || hoveringStat ? active : notActive
                    }
                  >
                    Servizi
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      width="20"
                      fill={colorDropDown2}
                      className={classDropDown2}
                    >
                      <path d="M10 12 6 8h8Z" />
                    </svg>
                  </NavLink>
                </MenuHandler>
                <MenuList>
                  <NavLink
                    to="/operatori/Reiki"
                    className="outline-none"
                  >
                    <MenuItem className={activeSubClass}>Reiki</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/operatori/Tarologia"
                    className="outline-none"
                  >
                    <MenuItem className={activeSubClass}>Tarologia</MenuItem>
                  </NavLink>
                  <NavLink
                    to="/operatori/Cartomanzia"
                    className="outline-none"
                  >
                    <MenuItem className={activeSubClass}>Cartomanzia</MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </li>
            {/* CITTA / PROVINCE */}
            <li
              onMouseEnter={showMenu2}
              onMouseLeave={showOff2}
            >
              <Menu
                open={isOpen2}
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
              >
                <MenuHandler>
                    <NavLink
                      prefetch="intent"
                      to="/province"
                      className={({ isActive }) =>
                        isActive || hoveringStat2 ? active : notActive
                      }
                    >
                      Città
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        width="20"
                        fill={colorDropDown}
                        className={classDropDown}
                      >
                        <path d="M10 12 6 8h8Z" />
                      </svg>
                    </NavLink>
                </MenuHandler>
                <MenuList>
                  {city.map((citta) => (
                    <NavLink
                      to={citta.Link}
                      className="outline-none"
                      key={citta.Id}
                    >
                      <MenuItem className={activeSubClass}>
                        {citta.Nome}
                      </MenuItem>
                    </NavLink>
                  ))}
                  <NavLink to="/province" className="outline-none">
                    <MenuItem className={activeSubClass}>
                      Vedi Tutte...
                    </MenuItem>
                  </NavLink>
                </MenuList>
              </Menu>
            </li>
          </ul>
        </div>
        {/* CONTENITORE LOGIN USER / OPERATORE*/}
        {session.data.operatoreId && (
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="hidden rounded bg-white py-2 px-6 text-main hover:text-hearth active:bg-white md:block"
            >
              Logout
            </button>
          </Form>
        )}
        {!session.data.operatoreId && !session.data.userId && (
          <div className="hidden gap-2 md:flex">
            <NavLink
              to="/login/operatore"
              className="rounded border border-white py-2 px-6 text-white hover:text-main hover:bg-white"
            >
              Sei un Operatore?
            </NavLink>
            <NavLink
              to="/login"
              className="rounded border border-white py-2 px-6 text-white hover:text-main hover:bg-white" 
            >
              Accedi
            </NavLink>
          </div>
        )}
        {session.data.userId && (
          <Form action="/logout" method="post">
            <button
              type="submit"
              className="hidden rounded border border-white py-2 px-6 text-main hover:text-hearth active:bg-white md:block"
            >
              Logout
            </button>
          </Form>
        )}
        <Tooltip
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
          content={data.theme === Theme.DARK ? "Light Mode" : "Dark Mode"}
          placement="bottom"
          className={`${data.theme === Theme.DARK ? "bg-white text-main border-main" : "bg-dark text-white border-white"} border font-openSans`}
        >
          <IconButton
            onClick={toggleTheme}
            title="Set Theme Mode"
            ripple={false}
            className={`group mx-2 hidden rounded-full border dark:hover:bg-white hover:bg-dark border-white bg-inherit md:flex ${
              data.theme === Theme.DARK
                ? "hover:border-main"
                : "hover:border-white"
            }`}
          >
            {data.theme === Theme.DARK ? (
              <svg
                className="w-full group-hover:fill-[#33DDB3]"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-full group-hover:fill-white"
                viewBox="0 0 32 32"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z"
                ></path>
              </svg>
            )}
          </IconButton>
        </Tooltip>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden "
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      {/* NAVIGAZIONE MOBILE */}
      <MobileNav open={openNav}>
        {navList}
        <Button variant="gradient" size="sm" fullWidth className="mb-2">
          <span>Buy Now</span>
        </Button>
      </MobileNav>
    </Navbar>
  );
}
