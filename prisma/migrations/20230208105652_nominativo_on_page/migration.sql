/*
  Warnings:

  - You are about to drop the column `cognome` on the `Pagina` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Pagina` table. All the data in the column will be lost.

*/
-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "citext";

-- AlterTable
ALTER TABLE "Operatore" ALTER COLUMN "email" SET DATA TYPE CITEXT;

-- AlterTable
ALTER TABLE "Pagina" DROP COLUMN "cognome",
DROP COLUMN "nome",
ADD COLUMN     "nominativo" TEXT NOT NULL DEFAULT '';
