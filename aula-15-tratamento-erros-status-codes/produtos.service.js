var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from "@nestjs/common";
let ProdutosService = class ProdutosService {
    produtos = [
        { id: 1, nome: 'Arroz Namorados', preco: 5.99 },
        { id: 2, nome: 'Feijão Timbiras', preco: 7.99 },
        { id: 3, nome: 'Macarrão Galo', preco: 5.99 },
        { id: 4, nome: 'Açúcar União', preco: 4.99 },
        { id: 5, nome: 'Sal Lebre', preco: 2.99 }
    ];
    listarProdutos() {
        return this.produtos;
    }
};
ProdutosService = __decorate([
    Injectable()
], ProdutosService);
export { ProdutosService };
//# sourceMappingURL=produtos.service.js.map