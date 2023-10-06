import { Router } from "express";
import { alterarchamada, consulta, deletar, inserir } from '../repository/chamadaRepository.js'

let endpoint = Router();

endpoint.post('/inserir', async (req, resp) => {
    try {
        let inscricao = req.body;

        let resultado = await inserir(inscricao);
        resp.send(resultado)

    } catch (err) {
        resp.status(500).send({ erro: err.message });
    }
});

endpoint.get('/consulta', async (req, resp) => {
    let dados = await consulta()
    resp.send(dados)
})

endpoint.delete('/deletar/:id', async (req, resp) => {
    try {

        const id = req.params.id
        const resposta = await deletar(id)
        resp.send('id apagado')

    } catch (err) {
        resp.send({
            erro: err.message
        })
    }
})

endpoint.put('/alterar/:id', async (req, resp) => {
    try {

        let id = req.params.id
        let inscricao = req.body


        let resposta = await alterarchamada(id, inscricao)
        resp.send()

    } catch (err) {
        resp.status(202).send({
            erro: err.message
        })
    }
})

export default endpoint;