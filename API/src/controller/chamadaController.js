import { Router } from "express";
import { inserir } from '../repository/chamadaRepository.js'

let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {

    try {

        let chamada = req.body

        let dados = await inserir(chamada)

    } catch (err){

        resp.send({
            erro: err.message
        })
    }



})

export default endpoint;