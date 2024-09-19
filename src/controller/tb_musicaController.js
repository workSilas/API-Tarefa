import * as db from '../repository/tb_musicaRepository.js'
import { Router } from 'express'
const endpoints = Router()


endpoints.get('/musica/consulta/', async (req, resp) => {
    try {
        let musica = await db.consultaMusica()
        resp.send(musica)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/musica/inserir/', async (req, resp) => {
    try {
        let info = req.body

        let id = await db.inserirMusica(info)
        resp.send(
            {
                novoId: id
            }
        )
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/musica/alterar/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let musica = req.body

        let linhasAfetadas = await db.alterarMusica(id, musica)
        if (linhasAfetadas >= 1) {
            resp.send()
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/musica/deletar/:id', async (req, resp) => {
    try {
        let id = req.params.id

        let musica = await db.deletarMusica(id)
        if (musica >= 1) {
            resp.send()
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;