var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ProdutosController_1;
import { Controller, Get, Param, BadRequestException, NotFoundException, Logger } from "@nestjs/common";
import { ProdutosService } from "./produtos.service.js";
let ProdutosController = ProdutosController_1 = class ProdutosController {
    produtosService;
    logger = new Logger(ProdutosController_1.name);
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    produtos() {
        return this.produtosService.listarProdutos();
    }
    buscarProdutos(idProduto) {
        const id = Number(idProduto);
        if (isNaN(id)) {
            this.logger.warn(`Tentativa de buscar com ID ${idProduto} não numérico`);
            throw new BadRequestException('O ID do produto deve ser um número inteiro.');
        }
        const produto = this.produtos().find((produto) => produto.id === id);
        if (!produto) {
            this.logger.warn(`Produto com ID ${id} não localizado.`);
            throw new NotFoundException(`Produto com ID ${id} não encontrado`);
        }
        return produto;
    }
};
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProdutosController.prototype, "buscarProdutos", null);
ProdutosController = ProdutosController_1 = __decorate([
    Controller('produtos'),
    __metadata("design:paramtypes", [ProdutosService])
], ProdutosController);
export { ProdutosController };
//# sourceMappingURL=produtos.controller.js.map