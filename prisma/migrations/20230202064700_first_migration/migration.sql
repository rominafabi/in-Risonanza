-- CreateEnum
CREATE TYPE "Role" AS ENUM ('UTENTE', 'PENDING', 'OPERATORE', 'ADMIN');

-- CreateEnum
CREATE TYPE "SocialDen" AS ENUM ('FACEBOOK', 'INSTAGRAM', 'TWITTER', 'YOUTUBE', 'LINKEDIN', 'TELEGRAM', 'PERSONALE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'UTENTE';

-- CreateTable
CREATE TABLE "Operatore" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cellulare" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'UTENTE',
    "comuneId" TEXT NOT NULL,

    CONSTRAINT "Operatore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagina" (
    "id" TEXT NOT NULL,
    "operatoreId" TEXT NOT NULL,
    "profilePic" TEXT NOT NULL DEFAULT '/images/logo/defaultProfilePic.png',
    "nome" TEXT NOT NULL DEFAULT '',
    "cognome" TEXT NOT NULL DEFAULT '',
    "titolo" TEXT NOT NULL DEFAULT '',
    "biografia" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Pagina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servizio" (
    "id" SERIAL NOT NULL,
    "denominazione" TEXT NOT NULL,

    CONSTRAINT "Servizio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiziOperatore" (
    "operatoreId" TEXT NOT NULL,
    "servizioId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "comuneId" TEXT NOT NULL,
    "prezzo" INTEGER NOT NULL DEFAULT 50,

    CONSTRAINT "ServiziOperatore_pkey" PRIMARY KEY ("operatoreId","servizioId")
);

-- CreateTable
CREATE TABLE "Comune" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nomeProv" TEXT NOT NULL,
    "sigla" TEXT NOT NULL,
    "nomeReg" TEXT NOT NULL,
    "codReg" TEXT NOT NULL,

    CONSTRAINT "Comune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordOperatore" (
    "hash" TEXT NOT NULL,
    "operatoreId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "SocialLink" (
    "id" SERIAL NOT NULL,
    "paginaId" TEXT NOT NULL,
    "denominazione" "SocialDen" NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "SocialLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Operatore_email_key" ON "Operatore"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Operatore_cellulare_key" ON "Operatore"("cellulare");

-- CreateIndex
CREATE UNIQUE INDEX "Pagina_operatoreId_key" ON "Pagina"("operatoreId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordOperatore_operatoreId_key" ON "PasswordOperatore"("operatoreId");

-- AddForeignKey
ALTER TABLE "Operatore" ADD CONSTRAINT "Operatore_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_servizioId_fkey" FOREIGN KEY ("servizioId") REFERENCES "Servizio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiziOperatore" ADD CONSTRAINT "ServiziOperatore_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordOperatore" ADD CONSTRAINT "PasswordOperatore_operatoreId_fkey" FOREIGN KEY ("operatoreId") REFERENCES "Operatore"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialLink" ADD CONSTRAINT "SocialLink_paginaId_fkey" FOREIGN KEY ("paginaId") REFERENCES "Pagina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
