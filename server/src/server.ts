import  express, { response }  from "express";
import { PrismaClient } from "@prisma/client";
import { converterIntEmReais } from "./utils/converterIntEmReais";
import cors from 'cors'
import { request } from "http";
import { json } from "stream/consumers";

const app = express();

app.use(express.json())
app.use(cors())

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


app.get('/pedidos/:id/produtos', async (request, response)=>{
    const pedidoId = request.params.id
    const produtoPedido = await prisma.produtoPedido.findMany({
      select:{
        produtoId: true,
      },
        where:{
        pedidoId, 
       },
    })

    const produtos = await Promise.all( produtoPedido.map(async(produtoPedido)  => {
        const id = produtoPedido.produtoId
        const produto = await prisma.produto.findUnique({
            where:{
                id,
            },
        })
        return (produto)
    }));

    return response.json(produtos.map(produto => {
        return{
          ...produto,
       }
   }))
    
})



app.get('/pedidos/:id', async (request,response)=>{
    const id = request.params.id
    const pedido = await prisma.pedido.findUnique({
        select:{
            produto: true,
        },
        where:{
            id,
        }
    })
    return response.json(pedido)

})

app.get('/produtos/:id', async (request, response) =>{
    const id = request.params.id
    const produto = await prisma.produto.findUnique({
        where:{
            id,
        }
    })
    return response.json(produto)
 })

 app.post('/pedidos/:id/produtos', async (request,response)=>{ 
    const pedidoId = request.params.id;
    const body: any = request.body;
  
    const produtoPedido = await prisma.produtoPedido.create({
      data: {
        pedidoId,
        produtoId: body.produtoId,
      }
    })
    return response.json(produtoPedido);
  });
app.listen(3333);