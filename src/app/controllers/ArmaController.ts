import {Request, Response} from 'express';
import {getRepository} from 'typeorm';
import Jogador from '../models/Jogador';
import Artefato from '../models/Artefato';
import Municao from '../models/Municao';
import Arma from '../models/Arma';


                    class ArmaController {

                        async store(req: Request, res: Response){
                            const {type} = req.body;
                            if(type == "Arma"){
                                const repository = getRepository(Arma);
                                const j = repository.create(req.body); //cria a entidade
                                Jogador
                                await repository.save(j); //persiste a entidade na tabela.
                                return res.json(j);
                            }else{
                                return res.sendStatus(404);//registrou ou recurso nao encontrado.
                            }
                        }
                        async update(req: Request, res: Response){
                            const {id, type} = req.body;
                            if(id){
                                if(type == "Arma"){
                                    const repository = getRepository(Arma);
                                    const j = repository.create(req.body); //cria a entidade.
                                    Jogador
                                    await repository.save(j); //persiste a entidade na tabela.
                                    return res.json(j);
                                }else{
                                return res.sendStatus(404);//registrou ou recurso nao encontrado.
                            }
                        }
                    }
                        async list(req: Request, res: Response){
                            const repository = getRepository(Arma);
                            const lista = await
                            repository.createQueryBuilder('tb_arma').getMany();
                            return res.json(lista);
                        }
                    }
                    export default new ArmaController();