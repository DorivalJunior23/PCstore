/*
  Warnings:

  - You are about to drop the column `pedidoId` on the `produto` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "ProdutoPedido" (
    "produtoId" TEXT NOT NULL,
    "pedidoId" TEXT NOT NULL,

    PRIMARY KEY ("produtoId", "pedidoId"),
    CONSTRAINT "ProdutoPedido_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProdutoPedido_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "pedido" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "valor" INTEGER NOT NULL
);
INSERT INTO "new_produto" ("descricao", "fotoUrl", "id", "nome", "valor") SELECT "descricao", "fotoUrl", "id", "nome", "valor" FROM "produto";
DROP TABLE "produto";
ALTER TABLE "new_produto" RENAME TO "produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
