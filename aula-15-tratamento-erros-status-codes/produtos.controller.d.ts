import { ProdutosService } from "./src/produtos.service.ts";
export declare class ProdutosController {
    private readonly produtosService;
    private readonly logger;
    constructor(produtosService: ProdutosService);
    produtos(): {
        id: number;
        nome: string;
        preco: number;
    }[];
    buscarProdutos(idProduto: string): {
        id: number;
        nome: string;
        preco: number;
    };
}
