import {Router} from 'express';
import JogadorController from  './app/controllers/JogadorController';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
import ObjetivoController from './app/controllers/ObjetivoController';


const router = Router();

//criando  rotas para /jogadores.
router.post('/jogadores', JogadorController.store);//define uma rota vai método post para chamar o método store da classe JogadorController
router.get('/jogadores', JogadorController.list);//define uma rota ...
router.put('/jogadores', JogadorController.update);//define uma rota ...
router.delete('/jogadores', JogadorController.delete);//define uma rota ...


//criando  rotas para /enderecos.
router.post('/enderecos', EnderecoController.store);//define uma rota vai método post para chamar o método store da classe EnderecoController
router.get('/enderecos', EnderecoController.list);//define uma rota ...
router.delete('/enderecos', EnderecoController.delete);//define uma rota ...

//criando rotas para /local
router.post('/local/store', LocalController.store)
router.get('/local/list', LocalController.list)
router.delete('/local', LocalController.delete)

//criando rotas para /objetivo
router.post('/objetivo/store', ObjetivoController.store)
router.get('/objetivo/list', ObjetivoController.list)
router.delete('/objetivo', ObjetivoController.delete)

export default router;

