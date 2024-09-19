import * as db from '../repository/tb_tarefaRepository.js'
import { Router } from 'express'
const endpoints = Router()

endpoints.get('/tarefa/consulta/', async (req, resp) => {
    try {
        let tarefa = await db.consultaTarefa()
        resp.send(tarefa)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/tarefa/inserir/', async (req, resp) => {
    try {
        let info = req.body

        let id = await db.inserirTarefa(info)
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

endpoints.put('/tarefa/alterar/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let tarefa = req.body

        let linhasAfetadas = await db.alterarTarefa(id, tarefa)
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

endpoints.delete('/tarefa/deletar/:id', async (req, resp) => {
    try {
        let id = req.params.id

        let tarefa = await db.deletarTarefa(id)
        if (tarefa >= 1) {
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