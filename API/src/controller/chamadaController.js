import { Router } from "express";
import { consulta, inserir } from '../repository/chamadaRepository.js'

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


endpoint.get('/consulta', async (req, resp) => {
    let dados = await consulta()
    resp.send(dados)
})



export default endpoint;