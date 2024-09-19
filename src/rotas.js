import tb_musicaController from './controller/tb_musicaController.js'
import tb_tarefaController from './controller/tb_tarefaController.js'

export default function adicionarRotas(servidor) {
    servidor.use(tb_musicaController)
    servidor.use(tb_tarefaController)
}