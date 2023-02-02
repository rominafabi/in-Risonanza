import { PrismaClient } from "@prisma/client";
import comuni from "./comuni.json"

const prisma = new PrismaClient();

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
