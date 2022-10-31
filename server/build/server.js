"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/produtos', (request, response) => {
    return response.json([
        { id: 1, nome: "Produto 1" },
        { id: 2, nome: "Produto 2" },
    ]);
});
app.get('/sacola', (request, response) => {
    return response.json([
        { id: 1, sacola: ["Produto 1 Produto 3"] },
        { id: 2, sacola: ["Produto 2 Produto 1"] },
    ]);
});
app.listen(3333);
