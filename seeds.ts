import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const comuni = [
   {
      "comune": "Torino",
      "pro_com_t": "001272",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Milano",
      "pro_com_t": "015146",
      "den_prov": "Milano",
      "sigla": "MI",
      "den_reg": "Lombardia",
      "cod_reg": "3"
   },
   {
      "comune": "Roma",
      "pro_com_t": "058091",
      "den_prov": "Roma",
      "sigla": "RM",
      "den_reg": "Lazio",
      "cod_reg": "12"
   },
   {
      "comune": "Napoli",
      "pro_com_t": "063049",
      "den_prov": "Napoli",
      "sigla": "NA",
      "den_reg": "Campania",
      "cod_reg": "15"
   },
   {
      "comune": "Bologna",
      "pro_com_t": "037006",
      "den_prov": "Bologna",
      "sigla": "BO",
      "den_reg": "Emilia-Romagna",
      "cod_reg": "8"
   },
   {
      "comune": "Firenze",
      "pro_com_t": "048017",
      "den_prov": "Firenze",
      "sigla": "FI",
      "den_reg": "Toscana",
      "cod_reg": "9"
   },
   {
      "comune": "Venezia",
      "pro_com_t": "027042",
      "den_prov": "Venezia",
      "sigla": "VE",
      "den_reg": "Veneto",
      "cod_reg": "5"
   },
   {
      "comune": "Genova",
      "pro_com_t": "010025",
      "den_prov": "Genova",
      "sigla": "GE",
      "den_reg": "Liguria",
      "cod_reg": "7"
   },
   {
      "comune": "L'Aquila",
      "pro_com_t": "066049",
      "den_prov": "L'Aquila",
      "sigla": "AQ",
      "den_reg": "Abruzzo",
      "cod_reg": "13"
   },
   {
      "comune": "Aosta",
      "pro_com_t": "007003",
      "den_prov": "Valle d'Aosta/Vallée d'Aoste",
      "sigla": "AO",
      "den_reg": "Valle d'Aosta/Vallée d'Aoste",
      "cod_reg": "2"
   },
   {
      "comune": "Trieste",
      "pro_com_t": "032006",
      "den_prov": "Trieste",
      "sigla": "TS",
      "den_reg": "Friuli-Venezia Giulia",
      "cod_reg": "6"
   },
   {
      "comune": "Perugia",
      "pro_com_t": "054039",
      "den_prov": "Perugia",
      "sigla": "PG",
      "den_reg": "Umbria",
      "cod_reg": "10"
   },
   {
      "comune": "Ancona",
      "pro_com_t": "042002",
      "den_prov": "Ancona",
      "sigla": "AN",
      "den_reg": "Marche",
      "cod_reg": "11"
   },
   {
      "comune": "Trento",
      "pro_com_t": "022205",
      "den_prov": "Trento",
      "sigla": "TN",
      "den_reg": "Trentino-Alto Adige/Südtirol",
      "cod_reg": "4"
   },
   {
      "comune": "Campobasso",
      "pro_com_t": "070006",
      "den_prov": "Campobasso",
      "sigla": "CB",
      "den_reg": "Molise",
      "cod_reg": "14"
   },
   {
      "comune": "Bari",
      "pro_com_t": "072006",
      "den_prov": "Bari",
      "sigla": "BA",
      "den_reg": "Puglia",
      "cod_reg": "16"
   },
   {
      "comune": "Potenza",
      "pro_com_t": "076063",
      "den_prov": "Potenza",
      "sigla": "PZ",
      "den_reg": "Basilicata",
      "cod_reg": "17"
   },
   {
      "comune": "Catanzaro",
      "pro_com_t": "079023",
      "den_prov": "Catanzaro",
      "sigla": "CZ",
      "den_reg": "Calabria",
      "cod_reg": "18"
   },
   {
      "comune": "Cagliari",
      "pro_com_t": "092009",
      "den_prov": "Cagliari",
      "sigla": "CA",
      "den_reg": "Sardegna",
      "cod_reg": "20"
   },
   {
      "comune": "Palermo",
      "pro_com_t": "082053",
      "den_prov": "Palermo",
      "sigla": "PA",
      "den_reg": "Sicilia",
      "cod_reg": "19"
   },

]

async function seed() {

  const data = Array.from(comuni).map(data => ({
    nome : data.comune || "",
    nomeProv: data.den_prov || "",
    sigla: data.sigla || "",
    nomeReg: data.den_reg || "",
    codReg: data.cod_reg || "",
    id: data.pro_com_t || "",
  }));

  await prisma.comune.createMany({
    data
  });

  await prisma.servizio.create({
    data: {
    denominazione: "Consulto Tarologico",
  }
  })

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
