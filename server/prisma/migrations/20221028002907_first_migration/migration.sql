-- CreateTable
CREATE TABLE "produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "pedidoId" TEXT NOT NULL,
    CONSTRAINT "produto_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "pedido" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valor_total" INTEGER NOT NULL
);
