import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';


class LoginController {
    async list(req: Request, res: Response){

        const repository = getRepository(Jogador);//recupera o repositorio.

        const lista = await repository.find();

        return res.json(lista);//retorna a lista
    }

    async login(req: Request, res: Response){
        
        try{
            const repository = getRepository(Jogador);
            const {id} = req.body;
            const end = await repository.findOne({where : {"id" : id ,"senha" : "senha"}});

        const lista = await repository.find();

            if(end){
                 return res.json(lista);
            }else{
                return res.sendStatus(404);
            }
        }catch(e:unknown){
        
            console.log(e);
            return res.sendStatus(500);
        }

        }
}

export default new LoginController();