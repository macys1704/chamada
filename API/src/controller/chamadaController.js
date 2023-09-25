import { Router } from "express";
import { consulta, deletar, inserir } from '../repository/chamadaRepository.js'

let endpoint = Router();

endpoint.post('/inserir', async (req, res) => {
    try {
        const chamada = req.body;

        const resultado = await inserir(chamada);

        if (resultado.affectedRows > 0) {
            res.status(201).json({ message: 'Chamada inserida com sucesso' });

        } else {
            res.status(400).json({ message: 'Erro ao inserir chamada' });
        }

    } catch (err) {
        res.status(500).json({ erro: err.message });
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

export default endpoint;