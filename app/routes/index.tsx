import { Form, useActionData, useLoaderData, useNavigate, useSearchParams } from "@remix-run/react";
import MyMenu from "./menu";
import Typewriter from "typewriter-effect";
import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { redirect} from "@remix-run/node";
import { Theme, useTheme } from "../utils/theme-provider";
import { json } from "@remix-run/node";
import { getSession } from "~/session.server";
import { useEffect, useRef, useState } from "react";
import { searchResult } from "~/models/servizi.server";
import type { Comune} from "~/models/comuni.server";
import { searchComune } from "~/models/comuni.server";
import { IconaSearch } from "~/components/icons/icons";
import _ from 'lodash';

export async function loader({ request }: LoaderArgs) {
  const session = await getSession(request);
  const url = new URL(request.url);
  const query = url.searchParams;
  const searchVal = query.get("query") || " ";
  const queryComune = query.get("comune") || " ";
  const comuni = await searchComune(queryComune);
  const res = await searchResult(searchVal);

  return json({ session, res, comuni });
};

export async function action({ request}: ActionArgs) {
  const formData = await request.formData();
  const servizio = formData.get("servizioHidden");
  const city = formData.get("cityHidden");
  console.log("type of servizio", typeof servizio,"servizzio is:" ,servizio)

  if (!city) {
    console.log("errore nella città")
    return json(
      { errors: { city: "Seleziona un Comune!" } },
      { status: 400 }
    );
  }


  if(city && (!servizio || servizio === "")) {
    console.log("inside city redirect")
    return redirect(`/comuni/${city}`)
  }


  console.log("servizio action is:", servizio,"and city is:",city);
  return null;
}

export default function Index() {
  const { session,res,comuni } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [theme, setTheme] = useTheme();

  const actionData = useActionData();
  const [viewSearchList, setViewSearchList] = useState(false);
  const [viewSearchCity, setViewSearchCity] = useState(false);
  const [servizioValue, setServizioValue] = useState<string|number>();
  const [arrayOfServizi, setArrayOfServizi ] = useState<any>([]);
  const [comuneId, setComuneId] = useState("");
  const servizioRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const navigate = useNavigate();


  const listRef = useRef<HTMLUListElement>(null);
  const selectedItemRef = useRef<HTMLLIElement>(null);  

  const handleKeyDown = (event : any) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % comuni.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + comuni.length) % comuni.length);
    }

    if(event.key === 'Enter') {
      if(viewSearchCity){
        event.preventDefault();
        const myArray = comuni[selectedIndex];
        let query = searchParams.get("query") || "";
        let comune = selectedItemRef.current?.textContent!
        setSearchParams({ query, comune });
        setComuneId(myArray.id);
        cityRef.current!.value = selectedItemRef.current?.textContent!;
        setViewSearchCity(false);
      }
    }
  };

  const handleKeyDownServizio = (event: any) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectedIndex2((prev) => (prev + 1) % arrayOfServizi.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectedIndex2((prev) => (prev - 1 + arrayOfServizi.length) % arrayOfServizi.length)
    }
    if (event.key === "Enter") {
      if(viewSearchList){
      event.preventDefault();
      const myArray = arrayOfServizi[selectedIndex2];
      if(typeof myArray.id !== 'string'){
        let query = myArray.id
        let comune = searchParams.get("comune") || "";
        setSearchParams({ query, comune });
        servizioRef.current!.value = myArray.denominazione;
        setServizioValue(query);
      }else{
        navigate(`/${myArray.id}`);
      }
      setViewSearchList(false);
      }
    }
  };

  useEffect(() => {
    if (actionData?.errors?.city) {
      cityRef.current?.focus();
    }
  },[actionData?.errors?.city])

  useEffect(() => {
    setArrayOfServizi([...res.servizi, ...res.operatori]);
  },[res]);

  useEffect(() => {
    if (selectedItemRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  },[selectedIndex, selectedIndex2])


  const searchFunction = _.debounce((e:any) => {
    if(e.target.value.length >= 3){
      let query = e.target.value
      let comune = searchParams.get("comune") || ""
      setSearchParams({query, comune})
      setViewSearchList(true);
    }
    if(!e.target.value){
      setServizioValue("");
      setViewSearchList(false)
    }
  },750)

  const searchCity = _.debounce((e:any) => {
    if(e.target.value.length >= 3){
      let comune = e.target.value
      let query = searchParams.get("query") || ""
      const comuneParams = new URLSearchParams(searchParams);
      comuneParams.set("comune", comune);
      setSearchParams({query, comune});
      setViewSearchCity(true);
    }
    if(!e.target.value){
      setComuneId("");
      setViewSearchCity(false)
    }
  },750)

  const toggleTheme = () => {
    setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };


  return (
    <main className="min-w-screen min-h-screen bg-main dark:bg-dark relative">
      <section className="min-w-screen relative max-h-screen min-h-screen">
        <div className="absolute z-10 flex h-full w-full flex-col">
          <MyMenu session={session} toggleTheme={toggleTheme} theme={theme}/>
          <div className="mt-20 justify-top flex h-full w-full flex-col items-center py-4 px-4">
            <h1 className="text-center font-semiBold text-3xl text-white lg:text-5xl">
              Cerca un Operatore
            </h1>
            <h5 className="my-2 flex items-center h-10 text-center font-semiBold text-lg text-white md:text-2xl lg:text-2xl">
              <Typewriter
                options={{
                  delay: 40,
                  strings: [
                    "Operatori Olistici",
                    "Operatori Bioenergetici",
                    "Operatori Spirituali",
                    "Consulenti",
                    "Life-Coach",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h5>
            {/* SEARCH BARS */}
            <div className="h-min my-2 w-full rounded-xl bg-white lg:w-3/4 p-4">
              <Form method="post" className="flex flex-col md:flex-row gap-3" noValidate>
                  <div className="mt-1 relative w-full">
                  <input type="hidden" name="servizioHidden" id="servizioHidden" value={servizioValue}/>
                    <input
                      ref={servizioRef}
                      id="servizio"
                      autoComplete="off"
                      name="servizio"
                      type="text"
                      placeholder="Cerca un operatore o servizio"
                      className="w-full rounded border border-blue-gray-500 px-2 py-1 font-openSans text-lg text-blue-gray-500 focus:border-main focus:ring-main"
                      onChange={searchFunction}
                      onKeyDown={handleKeyDownServizio}
                    />
                    
                    {viewSearchList && (
                    <ul className="space-y-2 bg-white absolute w-full p-4 my-2 rounded-xl drop-shadow-lg shadow-inner max-h-56 overflow-auto z-10">
                      {arrayOfServizi.length > 0 && arrayOfServizi.map((elemento: any, index: number) => (
                        typeof elemento.id === 'string' ? 
                        (
                        <li
                        key={elemento.id}
                        ref={index === selectedIndex2 ? selectedItemRef : null} 
                        className={`flex flex-row items-center gap-2 rounded-xl p-2 hover:bg-main cursor-pointer duration-300 font-openSans hover:text-white ${selectedIndex2 === index ? 'bg-main text-white' : 'bg-secondary text-blue-gray-500'}`}
                        onClick={() => {
                          navigate(`/${elemento.id}`);
                        }}
                        >
                          <span className="w-3 h-3 bg-main border border-white"></span>
                          <img src={elemento.pagina.profilePic} alt={`avatar di ${elemento.pagina.nominativo}`}
                          className="rounded-full w-10"
                          />
                          {elemento.pagina.nominativo}
                        </li>)
                        : 
                        (<li
                          className={`flex flex-row items-center gap-2 rounded-xl p-2 hover:bg-main cursor-pointer duration-300 font-openSans  hover:text-white ${selectedIndex2 === index ? 'bg-main text-white' : 'bg-secondary text-blue-gray-500'}`}
                          key={elemento.id} 
                          ref={index === selectedIndex2 ? selectedItemRef : null}
                          onClick={() => {
                          let query = elemento.id
                          let comune = searchParams.get("comune") || ""
                          setSearchParams({query, comune});
                          servizioRef.current!.value = elemento.denominazione
                          setServizioValue(elemento.id);
                          setViewSearchList(false);
                        }}>
                          <span className="w-3 h-3 bg-blue-300 border border-white"></span>{elemento.denominazione}
                        </li>)
                        ))}
                    </ul>
                    )}
                    
                  </div>
                {/* SEARCH OF CITY */}
                  <div className="mt-1 relative w-full">
                  <input type="hidden" name="cityHidden" id="cityHidden" value={comuneId}/>
                    <input
                      ref={cityRef}
                      id="city"
                      autoComplete="off"
                      name="city"
                      type="text"
                      placeholder="Roma, Milano, Torino..."
                      className="w-full rounded border border-blue-gray-500 px-2 py-1 font-openSans text-lg text-blue-gray-500 focus:border-main focus:ring-main"
                      onChange={searchCity}
                      aria-invalid={actionData?.errors?.city ? true : undefined}
                      onKeyDown={handleKeyDown}
                    />
                    {viewSearchCity && (
                    <ul
                    ref={listRef}
                     className="space-y-2 bg-white absolute w-full p-4 my-2 rounded-xl drop-shadow-lg shadow-inner max-h-56 overflow-auto z-10">
                      {comuni.length > 0 ? comuni.map((city: Comune, index: number) => (
                        <li
                          ref={index === selectedIndex ? selectedItemRef : null}
                          className={`
                            flex flex-row items-center gap-2 p-2
                            ${index === selectedIndex ? 'bg-main text-white' : 'bg-secondary text-blue-gray-500 hover:bg-main hover:text-white'}
                            rounded-xl cursor-pointer duration-300 font-openSans
                          `}
                          key={city.id}
                          value={city.id}
                          onClick={() => {
                            let comuneId = city.id;
                            let comune = city.nome;
                            let query = searchParams.get("query") || ""
                            setSearchParams({query,comune,comuneId});
                            setViewSearchCity(false);
                            cityRef.current!.value = city.nome;
                            setComuneId(city.id);
                        }}>
                          <span className="w-3 h-3 bg-orange-300 border border-white"></span>{city.nome}
                        </li>
                      )):(
                        <li className="font-openSans text-center text-white bg-hearth p-2 rounded-xl">Nessun Risultato!</li>
                      )}
                    </ul>
                    )}
                    {actionData?.errors?.city && (
                     <div className="bg-white absolute w-full p-4 my-2 rounded-xl drop-shadow-lg shadow-inner max-h-56 overflow-auto z-10">
                      <div className="w-full p-2 text-white bg-hearth rounded-xl font-openSans text-center" id="comune-error">
                        {actionData.errors.city}
                      </div>
                    </div>
              )}
                  </div>
                {/* SUBMIT BUTTON */}
                <button type="submit" className="duration-300 group bg-main hover:bg-white border-2 border-main rounded-lg p-2 flex flex-row gap-2 justify-center items-center text-white hover:text-main md:min-w-max w-full md:w-1/4"
                onClick={() => {
                    
                }}
                >
                  <IconaSearch />
                  Cerca
                </button>
              </Form>
            </div>
            {/* END OF SEARCH BARS */}
            <p className="font-openSans text-white text-center">Cerca un attività nella tua città/comune di residenza o ricerca un professionista qualificato e visualizza il profilo.</p>
          </div>
{/*           <div className="absolute bottom-0 w-full">
            <img
              src="/images/logo/operator.png"
              alt="operatore"
              className="mx-auto lg:w-60 w-40"
            />
          </div> */}
        </div>
      </section>
      <div className="h-screen">

      </div>
    </main>
  );
}
