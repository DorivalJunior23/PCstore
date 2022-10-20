import  express  from "express";

const app = express();

app.get('/produtos',(requet, response) =>{
    return response.json([
        {id: 1, nome: "Produto 1"},
        {id: 2, nome: "Produto 2"},
    ])
})

app.listen(3333);