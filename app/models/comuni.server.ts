
import { prisma } from "~/db.server";

export type { Comune } from "@prisma/client";

export async function searchComune(nome: string) {
  return await prisma.comune.findMany({
    where: {
      OR: [
        {
          nome: {
            startsWith: nome,
            mode: 'insensitive'
          },
        },
      ],
    },
    orderBy:{
      nome: "asc",
    }
  });
}

export function getComune(comuneId : string) {
  return prisma.comune.findFirst({
    select: { id: true, nome: true, nomeProv: true },
    where: {
      id: comuneId,
    },
  });
}

export function getProvincia(provincia : string) {
  return prisma.comune.findFirst({
    select: { id: true, nome: true, nomeProv: true, codReg: true, nomeReg: true },
    where: {
      sigla: provincia,
    },
  });
}

export function getComuniList() {
   return prisma.comune.findMany({
     select: { id: true, nome: true , sigla: true},
     orderBy: {
      nome: 'asc' 
     }
   });
 }

 export function getProvList() {
   return prisma.comune.groupBy({
   by: ['nomeProv','sigla'],
   orderBy: {
    nomeProv: 'asc',
   },
   });
 }

 export function getComuneListByProv(siglaProv : string) {
  if(siglaProv !== " "){
   return prisma.comune.findMany({
      where: {
         sigla: siglaProv,
      },
      select: {id: true, nome: true, sigla: true},
   })} else {
    return [];
   }
 }

 export async function getProvinceByRegion(sigla: string) {
  const comuni = await prisma.comune.findMany({ where: { codReg: sigla } });
  const province: Array<{nome: string, sigla: string}> = [];
  comuni.forEach(comune => {
    const found = province.find(p => p.sigla === comune.sigla);
    if (!found) {
      province.push({ nome: comune.nomeProv, sigla: comune.sigla });
    }
  });
  return province;
}