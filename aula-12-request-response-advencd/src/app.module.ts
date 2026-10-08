import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
<<<<<<< HEAD
import { SegurancaController } from './seguranca.controller.js';

@Module({
  imports: [],
  controllers: [AppController, SegurancaController],
=======

@Module({
  imports: [],
  controllers: [AppController],
>>>>>>> origin/main
  providers: [AppService],
})
export class AppModule {}
