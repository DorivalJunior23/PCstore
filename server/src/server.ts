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

// esse get nao ta como many to many tem que relacionar com ProdutoPedido
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
    return response.json(produtoPedido.map(produtoPedido => {
        return{
            ...produtoPedido,
        }
    }))
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