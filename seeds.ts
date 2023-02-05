import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const comuni = [
   {
      "comune": "Agliè",
      "pro_com_t": "001001",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Airasca",
      "pro_com_t": "001002",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ala di Stura",
      "pro_com_t": "001003",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Albiano d'Ivrea",
      "pro_com_t": "001004",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Almese",
      "pro_com_t": "001006",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alpette",
      "pro_com_t": "001007",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alpignano",
      "pro_com_t": "001008",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Andezeno",
      "pro_com_t": "001009",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Andrate",
      "pro_com_t": "001010",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Angrogna",
      "pro_com_t": "001011",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arignano",
      "pro_com_t": "001012",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Avigliana",
      "pro_com_t": "001013",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Azeglio",
      "pro_com_t": "001014",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bairo",
      "pro_com_t": "001015",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Balangero",
      "pro_com_t": "001016",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baldissero Canavese",
      "pro_com_t": "001017",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baldissero Torinese",
      "pro_com_t": "001018",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Balme",
      "pro_com_t": "001019",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Banchette",
      "pro_com_t": "001020",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barbania",
      "pro_com_t": "001021",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bardonecchia",
      "pro_com_t": "001022",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barone Canavese",
      "pro_com_t": "001023",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Beinasco",
      "pro_com_t": "001024",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bibiana",
      "pro_com_t": "001025",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bobbio Pellice",
      "pro_com_t": "001026",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bollengo",
      "pro_com_t": "001027",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgaro Torinese",
      "pro_com_t": "001028",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgiallo",
      "pro_com_t": "001029",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgofranco d'Ivrea",
      "pro_com_t": "001030",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgomasino",
      "pro_com_t": "001031",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgone Susa",
      "pro_com_t": "001032",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bosconero",
      "pro_com_t": "001033",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brandizzo",
      "pro_com_t": "001034",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bricherasio",
      "pro_com_t": "001035",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brosso",
      "pro_com_t": "001036",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brozolo",
      "pro_com_t": "001037",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bruino",
      "pro_com_t": "001038",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brusasco",
      "pro_com_t": "001039",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bruzolo",
      "pro_com_t": "001040",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Buriasco",
      "pro_com_t": "001041",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Burolo",
      "pro_com_t": "001042",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Busano",
      "pro_com_t": "001043",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bussoleno",
      "pro_com_t": "001044",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Buttigliera Alta",
      "pro_com_t": "001045",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cafasse",
      "pro_com_t": "001046",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caluso",
      "pro_com_t": "001047",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cambiano",
      "pro_com_t": "001048",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Campiglione Fenile",
      "pro_com_t": "001049",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Candia Canavese",
      "pro_com_t": "001050",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Candiolo",
      "pro_com_t": "001051",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Canischio",
      "pro_com_t": "001052",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cantalupa",
      "pro_com_t": "001053",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cantoira",
      "pro_com_t": "001054",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caprie",
      "pro_com_t": "001055",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caravino",
      "pro_com_t": "001056",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carema",
      "pro_com_t": "001057",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carignano",
      "pro_com_t": "001058",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carmagnola",
      "pro_com_t": "001059",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalborgone",
      "pro_com_t": "001060",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cascinette d'Ivrea",
      "pro_com_t": "001061",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caselette",
      "pro_com_t": "001062",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caselle Torinese",
      "pro_com_t": "001063",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castagneto Po",
      "pro_com_t": "001064",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castagnole Piemonte",
      "pro_com_t": "001065",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellamonte",
      "pro_com_t": "001066",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Nigra",
      "pro_com_t": "001067",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castiglione Torinese",
      "pro_com_t": "001068",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavagnolo",
      "pro_com_t": "001069",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavour",
      "pro_com_t": "001070",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cercenasco",
      "pro_com_t": "001071",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ceres",
      "pro_com_t": "001072",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ceresole Reale",
      "pro_com_t": "001073",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cesana Torinese",
      "pro_com_t": "001074",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chialamberto",
      "pro_com_t": "001075",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chianocco",
      "pro_com_t": "001076",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiaverano",
      "pro_com_t": "001077",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chieri",
      "pro_com_t": "001078",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiesanuova",
      "pro_com_t": "001079",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiomonte",
      "pro_com_t": "001080",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiusa di San Michele",
      "pro_com_t": "001081",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chivasso",
      "pro_com_t": "001082",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ciconio",
      "pro_com_t": "001083",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cintano",
      "pro_com_t": "001084",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cinzano",
      "pro_com_t": "001085",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ciriè",
      "pro_com_t": "001086",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Claviere",
      "pro_com_t": "001087",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Coassolo Torinese",
      "pro_com_t": "001088",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Coazze",
      "pro_com_t": "001089",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Collegno",
      "pro_com_t": "001090",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Colleretto Castelnuovo",
      "pro_com_t": "001091",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Colleretto Giacosa",
      "pro_com_t": "001092",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Condove",
      "pro_com_t": "001093",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Corio",
      "pro_com_t": "001094",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cossano Canavese",
      "pro_com_t": "001095",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cuceglio",
      "pro_com_t": "001096",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cumiana",
      "pro_com_t": "001097",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cuorgnè",
      "pro_com_t": "001098",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Druento",
      "pro_com_t": "001099",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Exilles",
      "pro_com_t": "001100",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Favria",
      "pro_com_t": "001101",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Feletto",
      "pro_com_t": "001102",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fenestrelle",
      "pro_com_t": "001103",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fiano",
      "pro_com_t": "001104",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fiorano Canavese",
      "pro_com_t": "001105",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Foglizzo",
      "pro_com_t": "001106",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Forno Canavese",
      "pro_com_t": "001107",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frassinetto",
      "pro_com_t": "001108",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Front",
      "pro_com_t": "001109",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frossasco",
      "pro_com_t": "001110",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Garzigliana",
      "pro_com_t": "001111",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gassino Torinese",
      "pro_com_t": "001112",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Germagnano",
      "pro_com_t": "001113",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Giaglione",
      "pro_com_t": "001114",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Giaveno",
      "pro_com_t": "001115",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Givoletto",
      "pro_com_t": "001116",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gravere",
      "pro_com_t": "001117",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Groscavallo",
      "pro_com_t": "001118",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grosso",
      "pro_com_t": "001119",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grugliasco",
      "pro_com_t": "001120",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ingria",
      "pro_com_t": "001121",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Inverso Pinasca",
      "pro_com_t": "001122",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Isolabella",
      "pro_com_t": "001123",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Issiglio",
      "pro_com_t": "001124",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ivrea",
      "pro_com_t": "001125",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "La Cassa",
      "pro_com_t": "001126",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "La Loggia",
      "pro_com_t": "001127",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lanzo Torinese",
      "pro_com_t": "001128",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lauriano",
      "pro_com_t": "001129",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Leini",
      "pro_com_t": "001130",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lemie",
      "pro_com_t": "001131",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lessolo",
      "pro_com_t": "001132",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Levone",
      "pro_com_t": "001133",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Locana",
      "pro_com_t": "001134",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lombardore",
      "pro_com_t": "001135",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lombriasco",
      "pro_com_t": "001136",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Loranzè",
      "pro_com_t": "001137",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Luserna San Giovanni",
      "pro_com_t": "001139",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lusernetta",
      "pro_com_t": "001140",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lusigliè",
      "pro_com_t": "001141",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Macello",
      "pro_com_t": "001142",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Maglione",
      "pro_com_t": "001143",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Marentino",
      "pro_com_t": "001144",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Massello",
      "pro_com_t": "001145",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mathi",
      "pro_com_t": "001146",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mattie",
      "pro_com_t": "001147",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mazzè",
      "pro_com_t": "001148",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Meana di Susa",
      "pro_com_t": "001149",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mercenasco",
      "pro_com_t": "001150",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mezzenile",
      "pro_com_t": "001152",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombello di Torino",
      "pro_com_t": "001153",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mompantero",
      "pro_com_t": "001154",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monastero di Lanzo",
      "pro_com_t": "001155",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncalieri",
      "pro_com_t": "001156",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncenisio",
      "pro_com_t": "001157",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldo Torinese",
      "pro_com_t": "001158",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montalenghe",
      "pro_com_t": "001159",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montalto Dora",
      "pro_com_t": "001160",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montanaro",
      "pro_com_t": "001161",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monteu da Po",
      "pro_com_t": "001162",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moriondo Torinese",
      "pro_com_t": "001163",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nichelino",
      "pro_com_t": "001164",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Noasca",
      "pro_com_t": "001165",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nole",
      "pro_com_t": "001166",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nomaglio",
      "pro_com_t": "001167",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "None",
      "pro_com_t": "001168",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Novalesa",
      "pro_com_t": "001169",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oglianico",
      "pro_com_t": "001170",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Orbassano",
      "pro_com_t": "001171",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Orio Canavese",
      "pro_com_t": "001172",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Osasco",
      "pro_com_t": "001173",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Osasio",
      "pro_com_t": "001174",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oulx",
      "pro_com_t": "001175",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ozegna",
      "pro_com_t": "001176",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Palazzo Canavese",
      "pro_com_t": "001177",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pancalieri",
      "pro_com_t": "001178",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Parella",
      "pro_com_t": "001179",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pavarolo",
      "pro_com_t": "001180",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pavone Canavese",
      "pro_com_t": "001181",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pecetto Torinese",
      "pro_com_t": "001183",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Perosa Argentina",
      "pro_com_t": "001184",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Perosa Canavese",
      "pro_com_t": "001185",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Perrero",
      "pro_com_t": "001186",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pertusio",
      "pro_com_t": "001187",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pessinetto",
      "pro_com_t": "001188",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pianezza",
      "pro_com_t": "001189",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pinasca",
      "pro_com_t": "001190",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pinerolo",
      "pro_com_t": "001191",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pino Torinese",
      "pro_com_t": "001192",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piobesi Torinese",
      "pro_com_t": "001193",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piossasco",
      "pro_com_t": "001194",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piscina",
      "pro_com_t": "001195",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piverone",
      "pro_com_t": "001196",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Poirino",
      "pro_com_t": "001197",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pomaretto",
      "pro_com_t": "001198",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pont Canavese",
      "pro_com_t": "001199",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Porte",
      "pro_com_t": "001200",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pragelato",
      "pro_com_t": "001201",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prali",
      "pro_com_t": "001202",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pralormo",
      "pro_com_t": "001203",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pramollo",
      "pro_com_t": "001204",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prarostino",
      "pro_com_t": "001205",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prascorsano",
      "pro_com_t": "001206",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pratiglione",
      "pro_com_t": "001207",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quagliuzzo",
      "pro_com_t": "001208",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quassolo",
      "pro_com_t": "001209",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quincinetto",
      "pro_com_t": "001210",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Reano",
      "pro_com_t": "001211",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ribordone",
      "pro_com_t": "001212",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivalba",
      "pro_com_t": "001213",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivalta di Torino",
      "pro_com_t": "001214",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Riva presso Chieri",
      "pro_com_t": "001215",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivara",
      "pro_com_t": "001216",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivarolo Canavese",
      "pro_com_t": "001217",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivarossa",
      "pro_com_t": "001218",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivoli",
      "pro_com_t": "001219",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Robassomero",
      "pro_com_t": "001220",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocca Canavese",
      "pro_com_t": "001221",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roletto",
      "pro_com_t": "001222",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Romano Canavese",
      "pro_com_t": "001223",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ronco Canavese",
      "pro_com_t": "001224",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rondissone",
      "pro_com_t": "001225",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rorà",
      "pro_com_t": "001226",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roure",
      "pro_com_t": "001227",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rosta",
      "pro_com_t": "001228",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rubiana",
      "pro_com_t": "001229",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rueglio",
      "pro_com_t": "001230",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salassa",
      "pro_com_t": "001231",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salbertrand",
      "pro_com_t": "001232",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salerano Canavese",
      "pro_com_t": "001233",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salza di Pinerolo",
      "pro_com_t": "001234",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Samone",
      "pro_com_t": "001235",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Benigno Canavese",
      "pro_com_t": "001236",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Carlo Canavese",
      "pro_com_t": "001237",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Colombano Belmonte",
      "pro_com_t": "001238",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Didero",
      "pro_com_t": "001239",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Francesco al Campo",
      "pro_com_t": "001240",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sangano",
      "pro_com_t": "001241",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Germano Chisone",
      "pro_com_t": "001242",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Gillio",
      "pro_com_t": "001243",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giorgio Canavese",
      "pro_com_t": "001244",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giorio di Susa",
      "pro_com_t": "001245",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giusto Canavese",
      "pro_com_t": "001246",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Martino Canavese",
      "pro_com_t": "001247",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Maurizio Canavese",
      "pro_com_t": "001248",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Mauro Torinese",
      "pro_com_t": "001249",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Pietro Val Lemina",
      "pro_com_t": "001250",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Ponso",
      "pro_com_t": "001251",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Raffaele Cimena",
      "pro_com_t": "001252",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Sebastiano da Po",
      "pro_com_t": "001253",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Secondo di Pinerolo",
      "pro_com_t": "001254",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sant'Ambrogio di Torino",
      "pro_com_t": "001255",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sant'Antonino di Susa",
      "pro_com_t": "001256",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santena",
      "pro_com_t": "001257",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sauze di Cesana",
      "pro_com_t": "001258",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sauze d'Oulx",
      "pro_com_t": "001259",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scalenghe",
      "pro_com_t": "001260",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scarmagno",
      "pro_com_t": "001261",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sciolze",
      "pro_com_t": "001262",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sestriere",
      "pro_com_t": "001263",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Settimo Rottaro",
      "pro_com_t": "001264",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Settimo Torinese",
      "pro_com_t": "001265",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Settimo Vittone",
      "pro_com_t": "001266",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sparone",
      "pro_com_t": "001267",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Strambinello",
      "pro_com_t": "001268",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Strambino",
      "pro_com_t": "001269",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Susa",
      "pro_com_t": "001270",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tavagnasco",
      "pro_com_t": "001271",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torino",
      "pro_com_t": "001272",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torrazza Piemonte",
      "pro_com_t": "001273",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torre Canavese",
      "pro_com_t": "001274",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torre Pellice",
      "pro_com_t": "001275",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trana",
      "pro_com_t": "001276",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Traversella",
      "pro_com_t": "001278",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Traves",
      "pro_com_t": "001279",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trofarello",
      "pro_com_t": "001280",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Usseaux",
      "pro_com_t": "001281",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Usseglio",
      "pro_com_t": "001282",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vaie",
      "pro_com_t": "001283",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Val della Torre",
      "pro_com_t": "001284",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valgioie",
      "pro_com_t": "001285",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vallo Torinese",
      "pro_com_t": "001286",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valperga",
      "pro_com_t": "001287",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valprato Soana",
      "pro_com_t": "001288",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Varisella",
      "pro_com_t": "001289",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vauda Canavese",
      "pro_com_t": "001290",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Venaus",
      "pro_com_t": "001291",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Venaria Reale",
      "pro_com_t": "001292",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verolengo",
      "pro_com_t": "001293",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verrua Savoia",
      "pro_com_t": "001294",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vestignè",
      "pro_com_t": "001295",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vialfrè",
      "pro_com_t": "001296",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vidracco",
      "pro_com_t": "001298",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vigone",
      "pro_com_t": "001299",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villafranca Piemonte",
      "pro_com_t": "001300",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova Canavese",
      "pro_com_t": "001301",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villarbasse",
      "pro_com_t": "001302",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villar Dora",
      "pro_com_t": "001303",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villareggia",
      "pro_com_t": "001304",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villar Focchiardo",
      "pro_com_t": "001305",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villar Pellice",
      "pro_com_t": "001306",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villar Perosa",
      "pro_com_t": "001307",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villastellone",
      "pro_com_t": "001308",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vinovo",
      "pro_com_t": "001309",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Virle Piemonte",
      "pro_com_t": "001310",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vische",
      "pro_com_t": "001311",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vistrorio",
      "pro_com_t": "001312",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viù",
      "pro_com_t": "001313",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Volpiano",
      "pro_com_t": "001314",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Volvera",
      "pro_com_t": "001315",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mappano",
      "pro_com_t": "001316",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Val di Chy",
      "pro_com_t": "001317",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valchiusa",
      "pro_com_t": "001318",
      "den_prov": "Torino",
      "sigla": "TO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alagna Valsesia",
      "pro_com_t": "002002",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Albano Vercellese",
      "pro_com_t": "002003",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alice Castello",
      "pro_com_t": "002004",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arborio",
      "pro_com_t": "002006",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Asigliano Vercellese",
      "pro_com_t": "002007",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Balmuccia",
      "pro_com_t": "002008",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Balocco",
      "pro_com_t": "002009",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bianzè",
      "pro_com_t": "002011",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Boccioleto",
      "pro_com_t": "002014",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgo d'Ale",
      "pro_com_t": "002015",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgosesia",
      "pro_com_t": "002016",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgo Vercelli",
      "pro_com_t": "002017",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Buronzo",
      "pro_com_t": "002021",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Campertogno",
      "pro_com_t": "002025",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carcoforo",
      "pro_com_t": "002029",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caresana",
      "pro_com_t": "002030",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caresanablot",
      "pro_com_t": "002031",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carisio",
      "pro_com_t": "002032",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casanova Elvo",
      "pro_com_t": "002033",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giacomo Vercellese",
      "pro_com_t": "002035",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cervatto",
      "pro_com_t": "002041",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cigliano",
      "pro_com_t": "002042",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Civiasco",
      "pro_com_t": "002043",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Collobiano",
      "pro_com_t": "002045",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Costanzana",
      "pro_com_t": "002047",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cravagliana",
      "pro_com_t": "002048",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crescentino",
      "pro_com_t": "002049",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crova",
      "pro_com_t": "002052",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Desana",
      "pro_com_t": "002054",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fobello",
      "pro_com_t": "002057",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fontanetto Po",
      "pro_com_t": "002058",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Formigliana",
      "pro_com_t": "002059",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gattinara",
      "pro_com_t": "002061",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ghislarengo",
      "pro_com_t": "002062",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Greggio",
      "pro_com_t": "002065",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Guardabosone",
      "pro_com_t": "002066",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lamporo",
      "pro_com_t": "002067",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lenta",
      "pro_com_t": "002068",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lignana",
      "pro_com_t": "002070",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Livorno Ferraris",
      "pro_com_t": "002071",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lozzolo",
      "pro_com_t": "002072",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mollia",
      "pro_com_t": "002078",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncrivello",
      "pro_com_t": "002079",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Motta de' Conti",
      "pro_com_t": "002082",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Olcenengo",
      "pro_com_t": "002088",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oldenico",
      "pro_com_t": "002089",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Palazzolo Vercellese",
      "pro_com_t": "002090",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pertengo",
      "pro_com_t": "002091",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pezzana",
      "pro_com_t": "002093",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pila",
      "pro_com_t": "002096",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piode",
      "pro_com_t": "002097",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Postua",
      "pro_com_t": "002102",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prarolo",
      "pro_com_t": "002104",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quarona",
      "pro_com_t": "002107",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quinto Vercellese",
      "pro_com_t": "002108",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rassa",
      "pro_com_t": "002110",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rimella",
      "pro_com_t": "002113",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rive",
      "pro_com_t": "002115",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roasio",
      "pro_com_t": "002116",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ronsecco",
      "pro_com_t": "002118",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rossa",
      "pro_com_t": "002121",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rovasenda",
      "pro_com_t": "002122",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salasco",
      "pro_com_t": "002126",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sali Vercellese",
      "pro_com_t": "002127",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Saluggia",
      "pro_com_t": "002128",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Germano Vercellese",
      "pro_com_t": "002131",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santhià",
      "pro_com_t": "002133",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scopa",
      "pro_com_t": "002134",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scopello",
      "pro_com_t": "002135",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serravalle Sesia",
      "pro_com_t": "002137",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Stroppiana",
      "pro_com_t": "002142",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tricerro",
      "pro_com_t": "002147",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trino",
      "pro_com_t": "002148",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tronzano Vercellese",
      "pro_com_t": "002150",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valduggia",
      "pro_com_t": "002152",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Varallo",
      "pro_com_t": "002156",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vercelli",
      "pro_com_t": "002158",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villarboit",
      "pro_com_t": "002163",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villata",
      "pro_com_t": "002164",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vocca",
      "pro_com_t": "002166",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alto Sermenza",
      "pro_com_t": "002170",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cellio con Breia",
      "pro_com_t": "002171",
      "den_prov": "Vercelli",
      "sigla": "VC",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Agrate Conturbia",
      "pro_com_t": "003001",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ameno",
      "pro_com_t": "003002",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Armeno",
      "pro_com_t": "003006",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arona",
      "pro_com_t": "003008",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barengo",
      "pro_com_t": "003012",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bellinzago Novarese",
      "pro_com_t": "003016",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Biandrate",
      "pro_com_t": "003018",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Boca",
      "pro_com_t": "003019",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bogogno",
      "pro_com_t": "003021",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bolzano Novarese",
      "pro_com_t": "003022",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgolavezzaro",
      "pro_com_t": "003023",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgomanero",
      "pro_com_t": "003024",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgo Ticino",
      "pro_com_t": "003025",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Briga Novarese",
      "pro_com_t": "003026",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Briona",
      "pro_com_t": "003027",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caltignaga",
      "pro_com_t": "003030",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cameri",
      "pro_com_t": "003032",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carpignano Sesia",
      "pro_com_t": "003036",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalbeltrame",
      "pro_com_t": "003037",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casaleggio Novara",
      "pro_com_t": "003039",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalino",
      "pro_com_t": "003040",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalvolone",
      "pro_com_t": "003041",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellazzo Novarese",
      "pro_com_t": "003042",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto sopra Ticino",
      "pro_com_t": "003043",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavaglietto",
      "pro_com_t": "003044",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavaglio d'Agogna",
      "pro_com_t": "003045",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavallirio",
      "pro_com_t": "003047",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerano",
      "pro_com_t": "003049",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Colazza",
      "pro_com_t": "003051",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Comignago",
      "pro_com_t": "003052",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cressa",
      "pro_com_t": "003055",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cureggio",
      "pro_com_t": "003058",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Divignano",
      "pro_com_t": "003060",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dormelletto",
      "pro_com_t": "003062",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fara Novarese",
      "pro_com_t": "003065",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fontaneto d'Agogna",
      "pro_com_t": "003066",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Galliate",
      "pro_com_t": "003068",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Garbagna Novarese",
      "pro_com_t": "003069",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gargallo",
      "pro_com_t": "003070",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ghemme",
      "pro_com_t": "003073",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gozzano",
      "pro_com_t": "003076",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Granozzo con Monticello",
      "pro_com_t": "003077",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grignasco",
      "pro_com_t": "003079",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Invorio",
      "pro_com_t": "003082",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Landiona",
      "pro_com_t": "003083",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lesa",
      "pro_com_t": "003084",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Maggiora",
      "pro_com_t": "003088",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mandello Vitta",
      "pro_com_t": "003090",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Marano Ticino",
      "pro_com_t": "003091",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Massino Visconti",
      "pro_com_t": "003093",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Meina",
      "pro_com_t": "003095",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mezzomerico",
      "pro_com_t": "003097",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Miasino",
      "pro_com_t": "003098",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Momo",
      "pro_com_t": "003100",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nebbiuno",
      "pro_com_t": "003103",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nibbiola",
      "pro_com_t": "003104",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Novara",
      "pro_com_t": "003106",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oleggio",
      "pro_com_t": "003108",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oleggio Castello",
      "pro_com_t": "003109",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Orta San Giulio",
      "pro_com_t": "003112",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Paruzzaro",
      "pro_com_t": "003114",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pella",
      "pro_com_t": "003115",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pettenasco",
      "pro_com_t": "003116",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pisano",
      "pro_com_t": "003119",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pogno",
      "pro_com_t": "003120",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pombia",
      "pro_com_t": "003121",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prato Sesia",
      "pro_com_t": "003122",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Recetto",
      "pro_com_t": "003129",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Romagnano Sesia",
      "pro_com_t": "003130",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Romentino",
      "pro_com_t": "003131",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Maurizio d'Opaglio",
      "pro_com_t": "003133",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Nazzaro Sesia",
      "pro_com_t": "003134",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Pietro Mosezzo",
      "pro_com_t": "003135",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sillavengo",
      "pro_com_t": "003138",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sizzano",
      "pro_com_t": "003139",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Soriso",
      "pro_com_t": "003140",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sozzago",
      "pro_com_t": "003141",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Suno",
      "pro_com_t": "003143",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Terdobbiate",
      "pro_com_t": "003144",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tornaco",
      "pro_com_t": "003146",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trecate",
      "pro_com_t": "003149",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vaprio d'Agogna",
      "pro_com_t": "003153",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Varallo Pombia",
      "pro_com_t": "003154",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vespolate",
      "pro_com_t": "003158",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vicolungo",
      "pro_com_t": "003159",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vinzaglio",
      "pro_com_t": "003164",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gattico-Veruno",
      "pro_com_t": "003166",
      "den_prov": "Novara",
      "sigla": "NO",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Acceglio",
      "pro_com_t": "004001",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Aisone",
      "pro_com_t": "004002",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alba",
      "pro_com_t": "004003",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Albaretto della Torre",
      "pro_com_t": "004004",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alto",
      "pro_com_t": "004005",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Argentera",
      "pro_com_t": "004006",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arguello",
      "pro_com_t": "004007",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bagnasco",
      "pro_com_t": "004008",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bagnolo Piemonte",
      "pro_com_t": "004009",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baldissero d'Alba",
      "pro_com_t": "004010",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barbaresco",
      "pro_com_t": "004011",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barge",
      "pro_com_t": "004012",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Barolo",
      "pro_com_t": "004013",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bastia Mondovì",
      "pro_com_t": "004014",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Battifollo",
      "pro_com_t": "004015",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Beinette",
      "pro_com_t": "004016",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bellino",
      "pro_com_t": "004017",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Belvedere Langhe",
      "pro_com_t": "004018",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bene Vagienna",
      "pro_com_t": "004019",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Benevello",
      "pro_com_t": "004020",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bergolo",
      "pro_com_t": "004021",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bernezzo",
      "pro_com_t": "004022",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bonvicino",
      "pro_com_t": "004023",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgomale",
      "pro_com_t": "004024",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgo San Dalmazzo",
      "pro_com_t": "004025",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bosia",
      "pro_com_t": "004026",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bossolasco",
      "pro_com_t": "004027",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Boves",
      "pro_com_t": "004028",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bra",
      "pro_com_t": "004029",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Briaglia",
      "pro_com_t": "004030",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Briga Alta",
      "pro_com_t": "004031",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brondello",
      "pro_com_t": "004032",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brossasco",
      "pro_com_t": "004033",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Busca",
      "pro_com_t": "004034",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camerana",
      "pro_com_t": "004035",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Canale",
      "pro_com_t": "004037",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Canosio",
      "pro_com_t": "004038",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caprauna",
      "pro_com_t": "004039",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caraglio",
      "pro_com_t": "004040",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caramagna Piemonte",
      "pro_com_t": "004041",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cardè",
      "pro_com_t": "004042",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carrù",
      "pro_com_t": "004043",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cartignano",
      "pro_com_t": "004044",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalgrasso",
      "pro_com_t": "004045",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castagnito",
      "pro_com_t": "004046",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casteldelfino",
      "pro_com_t": "004047",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Stura",
      "pro_com_t": "004049",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Uzzone",
      "pro_com_t": "004050",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellinaldo d'Alba",
      "pro_com_t": "004051",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellino Tanaro",
      "pro_com_t": "004052",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelmagno",
      "pro_com_t": "004053",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo di Ceva",
      "pro_com_t": "004054",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castiglione Falletto",
      "pro_com_t": "004055",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castiglione Tinella",
      "pro_com_t": "004056",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castino",
      "pro_com_t": "004057",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavallerleone",
      "pro_com_t": "004058",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavallermaggiore",
      "pro_com_t": "004059",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Celle di Macra",
      "pro_com_t": "004060",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Centallo",
      "pro_com_t": "004061",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ceresole Alba",
      "pro_com_t": "004062",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerretto Langhe",
      "pro_com_t": "004063",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cervasca",
      "pro_com_t": "004064",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cervere",
      "pro_com_t": "004065",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ceva",
      "pro_com_t": "004066",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cherasco",
      "pro_com_t": "004067",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiusa di Pesio",
      "pro_com_t": "004068",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cigliè",
      "pro_com_t": "004069",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cissone",
      "pro_com_t": "004070",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Clavesana",
      "pro_com_t": "004071",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Corneliano d'Alba",
      "pro_com_t": "004072",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cortemilia",
      "pro_com_t": "004073",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cossano Belbo",
      "pro_com_t": "004074",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Costigliole Saluzzo",
      "pro_com_t": "004075",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cravanzana",
      "pro_com_t": "004076",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crissolo",
      "pro_com_t": "004077",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cuneo",
      "pro_com_t": "004078",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Demonte",
      "pro_com_t": "004079",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Diano d'Alba",
      "pro_com_t": "004080",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dogliani",
      "pro_com_t": "004081",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dronero",
      "pro_com_t": "004082",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Elva",
      "pro_com_t": "004083",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Entracque",
      "pro_com_t": "004084",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Envie",
      "pro_com_t": "004085",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Farigliano",
      "pro_com_t": "004086",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Faule",
      "pro_com_t": "004087",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Feisoglio",
      "pro_com_t": "004088",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fossano",
      "pro_com_t": "004089",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frabosa Soprana",
      "pro_com_t": "004090",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frabosa Sottana",
      "pro_com_t": "004091",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frassino",
      "pro_com_t": "004092",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gaiola",
      "pro_com_t": "004093",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gambasca",
      "pro_com_t": "004094",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Garessio",
      "pro_com_t": "004095",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Genola",
      "pro_com_t": "004096",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gorzegno",
      "pro_com_t": "004097",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gottasecca",
      "pro_com_t": "004098",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Govone",
      "pro_com_t": "004099",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grinzane Cavour",
      "pro_com_t": "004100",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Guarene",
      "pro_com_t": "004101",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Igliano",
      "pro_com_t": "004102",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Isasca",
      "pro_com_t": "004103",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lagnasco",
      "pro_com_t": "004104",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "La Morra",
      "pro_com_t": "004105",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lequio Berria",
      "pro_com_t": "004106",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lequio Tanaro",
      "pro_com_t": "004107",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lesegno",
      "pro_com_t": "004108",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Levice",
      "pro_com_t": "004109",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Limone Piemonte",
      "pro_com_t": "004110",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lisio",
      "pro_com_t": "004111",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Macra",
      "pro_com_t": "004112",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Magliano Alfieri",
      "pro_com_t": "004113",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Magliano Alpi",
      "pro_com_t": "004114",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mango",
      "pro_com_t": "004115",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Manta",
      "pro_com_t": "004116",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Marene",
      "pro_com_t": "004117",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Margarita",
      "pro_com_t": "004118",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Marmora",
      "pro_com_t": "004119",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Marsaglia",
      "pro_com_t": "004120",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Martiniana Po",
      "pro_com_t": "004121",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Melle",
      "pro_com_t": "004122",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moiola",
      "pro_com_t": "004123",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombarcaro",
      "pro_com_t": "004124",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombasiglio",
      "pro_com_t": "004125",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monastero di Vasco",
      "pro_com_t": "004126",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monasterolo Casotto",
      "pro_com_t": "004127",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monasterolo di Savigliano",
      "pro_com_t": "004128",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monchiero",
      "pro_com_t": "004129",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mondovì",
      "pro_com_t": "004130",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monesiglio",
      "pro_com_t": "004131",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monforte d'Alba",
      "pro_com_t": "004132",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montà",
      "pro_com_t": "004133",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldo di Mondovì",
      "pro_com_t": "004134",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldo Roero",
      "pro_com_t": "004135",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montanera",
      "pro_com_t": "004136",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montelupo Albese",
      "pro_com_t": "004137",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montemale di Cuneo",
      "pro_com_t": "004138",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monterosso Grana",
      "pro_com_t": "004139",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monteu Roero",
      "pro_com_t": "004140",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montezemolo",
      "pro_com_t": "004141",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monticello d'Alba",
      "pro_com_t": "004142",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moretta",
      "pro_com_t": "004143",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Morozzo",
      "pro_com_t": "004144",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Murazzano",
      "pro_com_t": "004145",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Murello",
      "pro_com_t": "004146",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Narzole",
      "pro_com_t": "004147",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Neive",
      "pro_com_t": "004148",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Neviglie",
      "pro_com_t": "004149",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Niella Belbo",
      "pro_com_t": "004150",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Niella Tanaro",
      "pro_com_t": "004151",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Novello",
      "pro_com_t": "004152",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nucetto",
      "pro_com_t": "004153",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oncino",
      "pro_com_t": "004154",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ormea",
      "pro_com_t": "004155",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ostana",
      "pro_com_t": "004156",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Paesana",
      "pro_com_t": "004157",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pagno",
      "pro_com_t": "004158",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pamparato",
      "pro_com_t": "004159",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Paroldo",
      "pro_com_t": "004160",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Perletto",
      "pro_com_t": "004161",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Perlo",
      "pro_com_t": "004162",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Peveragno",
      "pro_com_t": "004163",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pezzolo Valle Uzzone",
      "pro_com_t": "004164",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pianfei",
      "pro_com_t": "004165",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piasco",
      "pro_com_t": "004166",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pietraporzio",
      "pro_com_t": "004167",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piobesi d'Alba",
      "pro_com_t": "004168",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piozzo",
      "pro_com_t": "004169",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pocapaglia",
      "pro_com_t": "004170",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Polonghera",
      "pro_com_t": "004171",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pontechianale",
      "pro_com_t": "004172",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pradleves",
      "pro_com_t": "004173",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prazzo",
      "pro_com_t": "004174",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Priero",
      "pro_com_t": "004175",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Priocca",
      "pro_com_t": "004176",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Priola",
      "pro_com_t": "004177",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prunetto",
      "pro_com_t": "004178",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Racconigi",
      "pro_com_t": "004179",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Revello",
      "pro_com_t": "004180",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rifreddo",
      "pro_com_t": "004181",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rittana",
      "pro_com_t": "004182",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roaschia",
      "pro_com_t": "004183",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roascio",
      "pro_com_t": "004184",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Robilante",
      "pro_com_t": "004185",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roburent",
      "pro_com_t": "004186",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccabruna",
      "pro_com_t": "004187",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocca Cigliè",
      "pro_com_t": "004188",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocca de' Baldi",
      "pro_com_t": "004189",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccaforte Mondovì",
      "pro_com_t": "004190",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccasparvera",
      "pro_com_t": "004191",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccavione",
      "pro_com_t": "004192",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocchetta Belbo",
      "pro_com_t": "004193",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roddi",
      "pro_com_t": "004194",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roddino",
      "pro_com_t": "004195",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rodello",
      "pro_com_t": "004196",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rossana",
      "pro_com_t": "004197",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ruffia",
      "pro_com_t": "004198",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sale delle Langhe",
      "pro_com_t": "004199",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sale San Giovanni",
      "pro_com_t": "004200",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Saliceto",
      "pro_com_t": "004201",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salmour",
      "pro_com_t": "004202",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Saluzzo",
      "pro_com_t": "004203",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sambuco",
      "pro_com_t": "004204",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sampeyre",
      "pro_com_t": "004205",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Benedetto Belbo",
      "pro_com_t": "004206",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Damiano Macra",
      "pro_com_t": "004207",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sanfrè",
      "pro_com_t": "004208",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sanfront",
      "pro_com_t": "004209",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Michele Mondovì",
      "pro_com_t": "004210",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sant'Albano Stura",
      "pro_com_t": "004211",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santa Vittoria d'Alba",
      "pro_com_t": "004212",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santo Stefano Belbo",
      "pro_com_t": "004213",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santo Stefano Roero",
      "pro_com_t": "004214",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Savigliano",
      "pro_com_t": "004215",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scagnello",
      "pro_com_t": "004216",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scarnafigi",
      "pro_com_t": "004217",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serralunga d'Alba",
      "pro_com_t": "004218",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serravalle Langhe",
      "pro_com_t": "004219",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sinio",
      "pro_com_t": "004220",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Somano",
      "pro_com_t": "004221",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sommariva del Bosco",
      "pro_com_t": "004222",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sommariva Perno",
      "pro_com_t": "004223",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Stroppo",
      "pro_com_t": "004224",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tarantasca",
      "pro_com_t": "004225",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torre Bormida",
      "pro_com_t": "004226",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torre Mondovì",
      "pro_com_t": "004227",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torre San Giorgio",
      "pro_com_t": "004228",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torresina",
      "pro_com_t": "004229",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Treiso",
      "pro_com_t": "004230",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trezzo Tinella",
      "pro_com_t": "004231",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trinità",
      "pro_com_t": "004232",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valdieri",
      "pro_com_t": "004233",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valgrana",
      "pro_com_t": "004234",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valloriate",
      "pro_com_t": "004235",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Venasca",
      "pro_com_t": "004237",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verduno",
      "pro_com_t": "004238",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vernante",
      "pro_com_t": "004239",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verzuolo",
      "pro_com_t": "004240",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vezza d'Alba",
      "pro_com_t": "004241",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vicoforte",
      "pro_com_t": "004242",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vignolo",
      "pro_com_t": "004243",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villafalletto",
      "pro_com_t": "004244",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova Mondovì",
      "pro_com_t": "004245",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova Solaro",
      "pro_com_t": "004246",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villar San Costanzo",
      "pro_com_t": "004247",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vinadio",
      "pro_com_t": "004248",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viola",
      "pro_com_t": "004249",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vottignasco",
      "pro_com_t": "004250",
      "den_prov": "Cuneo",
      "sigla": "CN",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Agliano Terme",
      "pro_com_t": "005001",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Albugnano",
      "pro_com_t": "005002",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Antignano",
      "pro_com_t": "005003",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Aramengo",
      "pro_com_t": "005004",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Asti",
      "pro_com_t": "005005",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Azzano d'Asti",
      "pro_com_t": "005006",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baldichieri d'Asti",
      "pro_com_t": "005007",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Belveglio",
      "pro_com_t": "005008",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Berzano di San Pietro",
      "pro_com_t": "005009",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bruno",
      "pro_com_t": "005010",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bubbio",
      "pro_com_t": "005011",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Buttigliera d'Asti",
      "pro_com_t": "005012",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Calamandrana",
      "pro_com_t": "005013",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Calliano",
      "pro_com_t": "005014",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Calosso",
      "pro_com_t": "005015",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camerano Casasco",
      "pro_com_t": "005016",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Canelli",
      "pro_com_t": "005017",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cantarana",
      "pro_com_t": "005018",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Capriglio",
      "pro_com_t": "005019",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casorzo",
      "pro_com_t": "005020",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cassinasco",
      "pro_com_t": "005021",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castagnole delle Lanze",
      "pro_com_t": "005022",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castagnole Monferrato",
      "pro_com_t": "005023",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castel Boglione",
      "pro_com_t": "005024",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castell'Alfero",
      "pro_com_t": "005025",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellero",
      "pro_com_t": "005026",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Molina",
      "pro_com_t": "005027",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castello di Annone",
      "pro_com_t": "005028",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Belbo",
      "pro_com_t": "005029",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Calcea",
      "pro_com_t": "005030",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Don Bosco",
      "pro_com_t": "005031",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castel Rocchero",
      "pro_com_t": "005032",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cellarengo",
      "pro_com_t": "005033",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Celle Enomondo",
      "pro_com_t": "005034",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerreto d'Asti",
      "pro_com_t": "005035",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerro Tanaro",
      "pro_com_t": "005036",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cessole",
      "pro_com_t": "005037",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Chiusano d'Asti",
      "pro_com_t": "005038",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cinaglio",
      "pro_com_t": "005039",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cisterna d'Asti",
      "pro_com_t": "005040",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Coazzolo",
      "pro_com_t": "005041",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cocconato",
      "pro_com_t": "005042",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Corsione",
      "pro_com_t": "005044",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cortandone",
      "pro_com_t": "005045",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cortanze",
      "pro_com_t": "005046",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cortazzone",
      "pro_com_t": "005047",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cortiglione",
      "pro_com_t": "005048",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cossombrato",
      "pro_com_t": "005049",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Costigliole d'Asti",
      "pro_com_t": "005050",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cunico",
      "pro_com_t": "005051",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dusino San Michele",
      "pro_com_t": "005052",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ferrere",
      "pro_com_t": "005053",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fontanile",
      "pro_com_t": "005054",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frinco",
      "pro_com_t": "005055",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grana",
      "pro_com_t": "005056",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grazzano Badoglio",
      "pro_com_t": "005057",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Incisa Scapaccino",
      "pro_com_t": "005058",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Isola d'Asti",
      "pro_com_t": "005059",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Loazzolo",
      "pro_com_t": "005060",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Maranzana",
      "pro_com_t": "005061",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Maretto",
      "pro_com_t": "005062",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moasca",
      "pro_com_t": "005063",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombaldone",
      "pro_com_t": "005064",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombaruzzo",
      "pro_com_t": "005065",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombercelli",
      "pro_com_t": "005066",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monale",
      "pro_com_t": "005067",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monastero Bormida",
      "pro_com_t": "005068",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncalvo",
      "pro_com_t": "005069",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncucco Torinese",
      "pro_com_t": "005070",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mongardino",
      "pro_com_t": "005071",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montabone",
      "pro_com_t": "005072",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montafia",
      "pro_com_t": "005073",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldo Scarampi",
      "pro_com_t": "005074",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montechiaro d'Asti",
      "pro_com_t": "005075",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montegrosso d'Asti",
      "pro_com_t": "005076",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montemagno",
      "pro_com_t": "005077",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moransengo",
      "pro_com_t": "005079",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nizza Monferrato",
      "pro_com_t": "005080",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Olmo Gentile",
      "pro_com_t": "005081",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Passerano Marmorito",
      "pro_com_t": "005082",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Penango",
      "pro_com_t": "005083",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piea",
      "pro_com_t": "005084",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pino d'Asti",
      "pro_com_t": "005085",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piovà Massaia",
      "pro_com_t": "005086",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Portacomaro",
      "pro_com_t": "005087",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quaranti",
      "pro_com_t": "005088",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Refrancore",
      "pro_com_t": "005089",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Revigliasco d'Asti",
      "pro_com_t": "005090",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roatto",
      "pro_com_t": "005091",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Robella",
      "pro_com_t": "005092",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocca d'Arazzo",
      "pro_com_t": "005093",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccaverano",
      "pro_com_t": "005094",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocchetta Palafea",
      "pro_com_t": "005095",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocchetta Tanaro",
      "pro_com_t": "005096",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Damiano d'Asti",
      "pro_com_t": "005097",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giorgio Scarampi",
      "pro_com_t": "005098",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Martino Alfieri",
      "pro_com_t": "005099",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Marzano Oliveto",
      "pro_com_t": "005100",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Paolo Solbrito",
      "pro_com_t": "005101",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Scurzolengo",
      "pro_com_t": "005103",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serole",
      "pro_com_t": "005104",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sessame",
      "pro_com_t": "005105",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Settime",
      "pro_com_t": "005106",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Soglio",
      "pro_com_t": "005107",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tigliole",
      "pro_com_t": "005108",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tonco",
      "pro_com_t": "005109",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tonengo",
      "pro_com_t": "005110",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vaglio Serra",
      "pro_com_t": "005111",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valfenera",
      "pro_com_t": "005112",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vesime",
      "pro_com_t": "005113",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viale",
      "pro_com_t": "005114",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viarigi",
      "pro_com_t": "005115",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vigliano d'Asti",
      "pro_com_t": "005116",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villafranca d'Asti",
      "pro_com_t": "005117",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova d'Asti",
      "pro_com_t": "005118",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villa San Secondo",
      "pro_com_t": "005119",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vinchio",
      "pro_com_t": "005120",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montiglio Monferrato",
      "pro_com_t": "005121",
      "den_prov": "Asti",
      "sigla": "AT",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Acqui Terme",
      "pro_com_t": "006001",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Albera Ligure",
      "pro_com_t": "006002",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alessandria",
      "pro_com_t": "006003",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alfiano Natta",
      "pro_com_t": "006004",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alice Bel Colle",
      "pro_com_t": "006005",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Altavilla Monferrato",
      "pro_com_t": "006007",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alzano Scrivia",
      "pro_com_t": "006008",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arquata Scrivia",
      "pro_com_t": "006009",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Avolasca",
      "pro_com_t": "006010",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Balzola",
      "pro_com_t": "006011",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Basaluzzo",
      "pro_com_t": "006012",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bassignana",
      "pro_com_t": "006013",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Belforte Monferrato",
      "pro_com_t": "006014",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bergamasco",
      "pro_com_t": "006015",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Berzano di Tortona",
      "pro_com_t": "006016",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bistagno",
      "pro_com_t": "006017",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borghetto di Borbera",
      "pro_com_t": "006018",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgoratto Alessandrino",
      "pro_com_t": "006019",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgo San Martino",
      "pro_com_t": "006020",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bosco Marengo",
      "pro_com_t": "006021",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bosio",
      "pro_com_t": "006022",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bozzole",
      "pro_com_t": "006023",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brignano-Frascata",
      "pro_com_t": "006024",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cabella Ligure",
      "pro_com_t": "006025",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camagna Monferrato",
      "pro_com_t": "006026",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camino",
      "pro_com_t": "006027",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cantalupo Ligure",
      "pro_com_t": "006028",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Capriata d'Orba",
      "pro_com_t": "006029",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carbonara Scrivia",
      "pro_com_t": "006030",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carentino",
      "pro_com_t": "006031",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carezzano",
      "pro_com_t": "006032",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carpeneto",
      "pro_com_t": "006033",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carrega Ligure",
      "pro_com_t": "006034",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Carrosio",
      "pro_com_t": "006035",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cartosio",
      "pro_com_t": "006036",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casal Cermelli",
      "pro_com_t": "006037",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casaleggio Boiro",
      "pro_com_t": "006038",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casale Monferrato",
      "pro_com_t": "006039",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casalnoceto",
      "pro_com_t": "006040",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casasco",
      "pro_com_t": "006041",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cassine",
      "pro_com_t": "006043",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cassinelle",
      "pro_com_t": "006044",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellania Coppi",
      "pro_com_t": "006045",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellar Guidobono",
      "pro_com_t": "006046",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castellazzo Bormida",
      "pro_com_t": "006047",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto d'Erro",
      "pro_com_t": "006048",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto d'Orba",
      "pro_com_t": "006049",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Merli",
      "pro_com_t": "006050",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Monferrato",
      "pro_com_t": "006051",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Bormida",
      "pro_com_t": "006052",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelnuovo Scrivia",
      "pro_com_t": "006053",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelspina",
      "pro_com_t": "006054",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavatore",
      "pro_com_t": "006055",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cella Monte",
      "pro_com_t": "006056",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cereseto",
      "pro_com_t": "006057",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerreto Grue",
      "pro_com_t": "006058",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerrina Monferrato",
      "pro_com_t": "006059",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Coniolo",
      "pro_com_t": "006060",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Conzano",
      "pro_com_t": "006061",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Costa Vescovato",
      "pro_com_t": "006062",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cremolino",
      "pro_com_t": "006063",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Denice",
      "pro_com_t": "006065",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dernice",
      "pro_com_t": "006066",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fabbrica Curone",
      "pro_com_t": "006067",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Felizzano",
      "pro_com_t": "006068",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fraconalto",
      "pro_com_t": "006069",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Francavilla Bisio",
      "pro_com_t": "006070",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frascaro",
      "pro_com_t": "006071",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frassinello Monferrato",
      "pro_com_t": "006072",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frassineto Po",
      "pro_com_t": "006073",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fresonara",
      "pro_com_t": "006074",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Frugarolo",
      "pro_com_t": "006075",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Fubine Monferrato",
      "pro_com_t": "006076",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gabiano",
      "pro_com_t": "006077",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gamalero",
      "pro_com_t": "006078",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Garbagna",
      "pro_com_t": "006079",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gavi",
      "pro_com_t": "006081",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Giarole",
      "pro_com_t": "006082",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gremiasco",
      "pro_com_t": "006083",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grognardo",
      "pro_com_t": "006084",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Grondona",
      "pro_com_t": "006085",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Guazzora",
      "pro_com_t": "006086",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Isola Sant'Antonio",
      "pro_com_t": "006087",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lerma",
      "pro_com_t": "006088",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Malvicino",
      "pro_com_t": "006090",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Masio",
      "pro_com_t": "006091",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Melazzo",
      "pro_com_t": "006092",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Merana",
      "pro_com_t": "006093",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mirabello Monferrato",
      "pro_com_t": "006094",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Molare",
      "pro_com_t": "006095",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Molino dei Torti",
      "pro_com_t": "006096",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mombello Monferrato",
      "pro_com_t": "006097",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Momperone",
      "pro_com_t": "006098",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Moncestino",
      "pro_com_t": "006099",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mongiardino Ligure",
      "pro_com_t": "006100",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Monleale",
      "pro_com_t": "006101",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montacuto",
      "pro_com_t": "006102",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldeo",
      "pro_com_t": "006103",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montaldo Bormida",
      "pro_com_t": "006104",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montecastello",
      "pro_com_t": "006105",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montechiaro d'Acqui",
      "pro_com_t": "006106",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montegioco",
      "pro_com_t": "006107",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montemarzino",
      "pro_com_t": "006108",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Morano sul Po",
      "pro_com_t": "006109",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Morbello",
      "pro_com_t": "006110",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mornese",
      "pro_com_t": "006111",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Morsasco",
      "pro_com_t": "006112",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Murisengo",
      "pro_com_t": "006113",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Novi Ligure",
      "pro_com_t": "006114",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Occimiano",
      "pro_com_t": "006115",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Odalengo Grande",
      "pro_com_t": "006116",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Odalengo Piccolo",
      "pro_com_t": "006117",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Olivola",
      "pro_com_t": "006118",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Orsara Bormida",
      "pro_com_t": "006119",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ottiglio",
      "pro_com_t": "006120",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ovada",
      "pro_com_t": "006121",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oviglio",
      "pro_com_t": "006122",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ozzano Monferrato",
      "pro_com_t": "006123",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Paderna",
      "pro_com_t": "006124",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pareto",
      "pro_com_t": "006125",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Parodi Ligure",
      "pro_com_t": "006126",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pasturana",
      "pro_com_t": "006127",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pecetto di Valenza",
      "pro_com_t": "006128",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pietra Marazzi",
      "pro_com_t": "006129",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pomaro Monferrato",
      "pro_com_t": "006131",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pontecurone",
      "pro_com_t": "006132",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pontestura",
      "pro_com_t": "006133",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ponti",
      "pro_com_t": "006134",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ponzano Monferrato",
      "pro_com_t": "006135",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ponzone",
      "pro_com_t": "006136",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pozzol Groppo",
      "pro_com_t": "006137",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pozzolo Formigaro",
      "pro_com_t": "006138",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Prasco",
      "pro_com_t": "006139",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Predosa",
      "pro_com_t": "006140",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quargnento",
      "pro_com_t": "006141",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quattordio",
      "pro_com_t": "006142",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ricaldone",
      "pro_com_t": "006143",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivalta Bormida",
      "pro_com_t": "006144",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rivarone",
      "pro_com_t": "006145",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roccaforte Ligure",
      "pro_com_t": "006146",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocca Grimalda",
      "pro_com_t": "006147",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rocchetta Ligure",
      "pro_com_t": "006148",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rosignano Monferrato",
      "pro_com_t": "006149",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sala Monferrato",
      "pro_com_t": "006150",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sale",
      "pro_com_t": "006151",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Cristoforo",
      "pro_com_t": "006152",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Giorgio Monferrato",
      "pro_com_t": "006153",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Salvatore Monferrato",
      "pro_com_t": "006154",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Sebastiano Curone",
      "pro_com_t": "006155",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sant'Agata Fossili",
      "pro_com_t": "006156",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sardigliano",
      "pro_com_t": "006157",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sarezzano",
      "pro_com_t": "006158",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serralunga di Crea",
      "pro_com_t": "006159",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Serravalle Scrivia",
      "pro_com_t": "006160",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sezzadio",
      "pro_com_t": "006161",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Silvano d'Orba",
      "pro_com_t": "006162",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Solero",
      "pro_com_t": "006163",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Solonghello",
      "pro_com_t": "006164",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Spigno Monferrato",
      "pro_com_t": "006165",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Spineto Scrivia",
      "pro_com_t": "006166",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Stazzano",
      "pro_com_t": "006167",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Strevi",
      "pro_com_t": "006168",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tagliolo Monferrato",
      "pro_com_t": "006169",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tassarolo",
      "pro_com_t": "006170",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Terruggia",
      "pro_com_t": "006171",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Terzo",
      "pro_com_t": "006172",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ticineto",
      "pro_com_t": "006173",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tortona",
      "pro_com_t": "006174",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Treville",
      "pro_com_t": "006175",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trisobbio",
      "pro_com_t": "006176",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valenza",
      "pro_com_t": "006177",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valmacca",
      "pro_com_t": "006178",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vignale Monferrato",
      "pro_com_t": "006179",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vignole Borbera",
      "pro_com_t": "006180",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viguzzolo",
      "pro_com_t": "006181",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villadeati",
      "pro_com_t": "006182",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villalvernia",
      "pro_com_t": "006183",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villamiroglio",
      "pro_com_t": "006184",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova Monferrato",
      "pro_com_t": "006185",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villaromagnano",
      "pro_com_t": "006186",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Visone",
      "pro_com_t": "006187",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Volpedo",
      "pro_com_t": "006188",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Volpeglino",
      "pro_com_t": "006189",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Voltaggio",
      "pro_com_t": "006190",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cassano Spinola",
      "pro_com_t": "006191",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Alluvioni Piovera",
      "pro_com_t": "006192",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lu e Cuccaro Monferrato",
      "pro_com_t": "006193",
      "den_prov": "Alessandria",
      "sigla": "AL",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ailoche",
      "pro_com_t": "096001",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Andorno Micca",
      "pro_com_t": "096002",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Benna",
      "pro_com_t": "096003",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Biella",
      "pro_com_t": "096004",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bioglio",
      "pro_com_t": "096005",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borriana",
      "pro_com_t": "096006",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brusnengo",
      "pro_com_t": "096007",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Callabiana",
      "pro_com_t": "096008",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camandona",
      "pro_com_t": "096009",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Camburzano",
      "pro_com_t": "096010",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Candelo",
      "pro_com_t": "096012",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caprile",
      "pro_com_t": "096013",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casapinta",
      "pro_com_t": "096014",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Castelletto Cervo",
      "pro_com_t": "096015",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cavaglià",
      "pro_com_t": "096016",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cerrione",
      "pro_com_t": "096018",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Coggiola",
      "pro_com_t": "096019",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cossato",
      "pro_com_t": "096020",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crevacuore",
      "pro_com_t": "096021",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Curino",
      "pro_com_t": "096023",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Donato",
      "pro_com_t": "096024",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Dorzano",
      "pro_com_t": "096025",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gaglianico",
      "pro_com_t": "096026",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gifflenga",
      "pro_com_t": "096027",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Graglia",
      "pro_com_t": "096028",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Magnano",
      "pro_com_t": "096030",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Massazza",
      "pro_com_t": "096031",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Masserano",
      "pro_com_t": "096032",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mezzana Mortigliengo",
      "pro_com_t": "096033",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Miagliano",
      "pro_com_t": "096034",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mongrando",
      "pro_com_t": "096035",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mottalciata",
      "pro_com_t": "096037",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Muzzano",
      "pro_com_t": "096038",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Netro",
      "pro_com_t": "096039",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Occhieppo Inferiore",
      "pro_com_t": "096040",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Occhieppo Superiore",
      "pro_com_t": "096041",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pettinengo",
      "pro_com_t": "096042",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piatto",
      "pro_com_t": "096043",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piedicavallo",
      "pro_com_t": "096044",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pollone",
      "pro_com_t": "096046",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ponderano",
      "pro_com_t": "096047",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Portula",
      "pro_com_t": "096048",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pralungo",
      "pro_com_t": "096049",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pray",
      "pro_com_t": "096050",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ronco Biellese",
      "pro_com_t": "096053",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Roppolo",
      "pro_com_t": "096054",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Rosazza",
      "pro_com_t": "096055",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sagliano Micca",
      "pro_com_t": "096056",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sala Biellese",
      "pro_com_t": "096057",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Salussola",
      "pro_com_t": "096058",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sandigliano",
      "pro_com_t": "096059",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sordevolo",
      "pro_com_t": "096063",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Sostegno",
      "pro_com_t": "096064",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Strona",
      "pro_com_t": "096065",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tavigliano",
      "pro_com_t": "096066",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ternengo",
      "pro_com_t": "096067",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Tollegno",
      "pro_com_t": "096068",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Torrazzo",
      "pro_com_t": "096069",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valdengo",
      "pro_com_t": "096071",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vallanzengo",
      "pro_com_t": "096072",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valle San Nicolao",
      "pro_com_t": "096074",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Veglio",
      "pro_com_t": "096075",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verrone",
      "pro_com_t": "096076",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vigliano Biellese",
      "pro_com_t": "096077",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villa del Bosco",
      "pro_com_t": "096078",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villanova Biellese",
      "pro_com_t": "096079",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Viverone",
      "pro_com_t": "096080",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Zimone",
      "pro_com_t": "096081",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Zubiena",
      "pro_com_t": "096082",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Zumaglia",
      "pro_com_t": "096083",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Lessona",
      "pro_com_t": "096085",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Campiglia Cervo",
      "pro_com_t": "096086",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quaregna Cerreto",
      "pro_com_t": "096087",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valdilana",
      "pro_com_t": "096088",
      "den_prov": "Biella",
      "sigla": "BI",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Antrona Schieranco",
      "pro_com_t": "103001",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Anzola d'Ossola",
      "pro_com_t": "103002",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arizzano",
      "pro_com_t": "103003",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Arola",
      "pro_com_t": "103004",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Aurano",
      "pro_com_t": "103005",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baceno",
      "pro_com_t": "103006",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bannio Anzino",
      "pro_com_t": "103007",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Baveno",
      "pro_com_t": "103008",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bee",
      "pro_com_t": "103009",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Belgirate",
      "pro_com_t": "103010",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Beura-Cardezza",
      "pro_com_t": "103011",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Bognanco",
      "pro_com_t": "103012",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Brovello-Carpugnino",
      "pro_com_t": "103013",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Calasca-Castiglione",
      "pro_com_t": "103014",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cambiasca",
      "pro_com_t": "103015",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cannero Riviera",
      "pro_com_t": "103016",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cannobio",
      "pro_com_t": "103017",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Caprezzo",
      "pro_com_t": "103018",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Casale Corte Cerro",
      "pro_com_t": "103019",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ceppo Morelli",
      "pro_com_t": "103021",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cesara",
      "pro_com_t": "103022",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Cossogno",
      "pro_com_t": "103023",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Craveggia",
      "pro_com_t": "103024",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crevoladossola",
      "pro_com_t": "103025",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Crodo",
      "pro_com_t": "103026",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Domodossola",
      "pro_com_t": "103028",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Druogno",
      "pro_com_t": "103029",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Formazza",
      "pro_com_t": "103031",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Germagno",
      "pro_com_t": "103032",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ghiffa",
      "pro_com_t": "103033",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gignese",
      "pro_com_t": "103034",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gravellona Toce",
      "pro_com_t": "103035",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Gurro",
      "pro_com_t": "103036",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Intragna",
      "pro_com_t": "103037",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Loreglia",
      "pro_com_t": "103038",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Macugnaga",
      "pro_com_t": "103039",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Madonna del Sasso",
      "pro_com_t": "103040",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Malesco",
      "pro_com_t": "103041",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Masera",
      "pro_com_t": "103042",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Massiola",
      "pro_com_t": "103043",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Mergozzo",
      "pro_com_t": "103044",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Miazzina",
      "pro_com_t": "103045",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montecrestese",
      "pro_com_t": "103046",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Montescheno",
      "pro_com_t": "103047",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Nonio",
      "pro_com_t": "103048",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Oggebbio",
      "pro_com_t": "103049",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Omegna",
      "pro_com_t": "103050",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Ornavasso",
      "pro_com_t": "103051",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pallanzeno",
      "pro_com_t": "103052",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Piedimulera",
      "pro_com_t": "103053",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Pieve Vergonte",
      "pro_com_t": "103054",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Premeno",
      "pro_com_t": "103055",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Premia",
      "pro_com_t": "103056",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Premosello-Chiovenda",
      "pro_com_t": "103057",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quarna Sopra",
      "pro_com_t": "103058",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Quarna Sotto",
      "pro_com_t": "103059",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Re",
      "pro_com_t": "103060",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "San Bernardino Verbano",
      "pro_com_t": "103061",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Santa Maria Maggiore",
      "pro_com_t": "103062",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Stresa",
      "pro_com_t": "103064",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Toceno",
      "pro_com_t": "103065",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trarego Viggiona",
      "pro_com_t": "103066",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trasquera",
      "pro_com_t": "103067",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Trontano",
      "pro_com_t": "103068",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valstrona",
      "pro_com_t": "103069",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vanzone con San Carlo",
      "pro_com_t": "103070",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Varzo",
      "pro_com_t": "103071",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Verbania",
      "pro_com_t": "103072",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vignone",
      "pro_com_t": "103074",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villadossola",
      "pro_com_t": "103075",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Villette",
      "pro_com_t": "103076",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Vogogna",
      "pro_com_t": "103077",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Borgomezzavalle",
      "pro_com_t": "103078",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   },
   {
      "comune": "Valle Cannobina",
      "pro_com_t": "103079",
      "den_prov": "Verbano-Cusio-Ossola",
      "sigla": "VB",
      "den_reg": "Piemonte",
      "cod_reg": "1"
   }
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
