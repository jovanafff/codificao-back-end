import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogosService {
    private jogos = [
        {id: 1, titulo: 'Minecraft', estudio:'Mojang Studios'},
        {id: 2, titulo: 'the Lengend of Zelda: Ocarina of time', estudio:'Nintendo' },
        {id: 3, titulo: 'Grand theft Auto V', estudio:'Rockstar North'},
        {id: 4, titulo: 'Elden Ring', estudio: 'FromSoftware'},
        {ide: 5, titulo: 'God od War', estudio: 'Santa Monica Studio'}
    ];

    buscarPorId(id:number){
        const jogo = this.jogos.find((j) => j.id === id);
        if(!jogo){
            throw new NotFoundException(`Jogo com ID ${id} não localizado em nosso estoque.`);
        }
        return jogo;
    }
}