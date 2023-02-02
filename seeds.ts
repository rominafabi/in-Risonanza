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
   }]

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
