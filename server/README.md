# TABELAS 

## Produto
id
nome
descrição
foto
valor
sacolas produtoNaSacola[]

## Sacola
id
valor_total
produto produtoNaSacola[]

## ProdutoNaSacola
  produto       Produto     @relation(fields: [produtoId], references: [id])
  produtoId
  sacola       Sacola     @relation(fields: [sacolaId], references: [id])
  sacolaId
@@id([produtoId, sacolaId])

### CASOS DE USO
-Mostrar produtos em estoque
-Adicionar item no estoque
-Mostrar sacola
-Colocar item na sacola
-Remover item da sacola



