import  express  from "express";
import { PrismaClient } from "@prisma/client";
import { converterIntEmReais } from "./utils/converterIntEmReais";

const app = express();

app.use(express.json())

const prisma = new PrismaClient({
    log:['query']
})

app.get('/produtos', async (request, response) =>{
    const produtos = await prisma.produto.findMany({
       orderBy:{
        valor: 'desc',
       },
    })
    return response.json(produtos.map(produto => {
                 return{
                   ...produto,
                   valor: converterIntEmReais(produto.valor),
                }
            }))
 })

// esse get nao ta como many to many tem que relacionar com pedido produto
// app.get('/pedido/:id/produtos', async (request, response)=>{
//     const pedidoId = request.params.id
//     const produtos = await prisma.produto.findMany({
//        select:{
//         id: true,
//         nome: true,
//         descricao: true,
//         valor: true,
//         fotoUrl: true,
//        },
//        where:{
//         pedidoId, 
//        },
//        orderBy:{
//         valor: 'desc'
//        }
//     })
//     return response.json(produtos.map(produto => {
//         return{
//             ...produto,
//             valor: converterIntEmReais(produto.valor)
//         }
//     }))
// })
app.listen(3333);