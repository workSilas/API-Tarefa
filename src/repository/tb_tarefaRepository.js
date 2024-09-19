import con from "./connection.js";

export async function consultaTarefa() {
    let comando = `
        select  id_tarefa  			id,
                ds_tarefa			tarefa,
                nr_ordem			ordem,
                bt_fazendo			fazendo,
                dt_cadastro			cadastro
         from 	tb_tarefa;
    `
    let resposta = await con.query(comando)
    let registro = resposta[0]
    return registro
}

export async function inserirTarefa(tarefa) {
    let comando = `
        insert 	tb_tarefa (ds_tarefa, nr_ordem, bt_fazendo, dt_cadastro) 
        values	(?, ?, ?, ?);
    `
    let resposta = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.fazendo, tarefa.cadastro])
    let info = resposta[0]
    return info.insertId
}

export async function alterarTarefa(id, tarefa) {
    let comando = `
        update 	tb_tarefa
           set 	ds_tarefa 	= ?,
                nr_ordem	= ?,
                bt_fazendo 	= ?,
                dt_cadastro = ?
         where 	id_tarefa 	= ?;
    `
    let resposta = await con.query(comando, [tarefa.tarefa, tarefa.ordem, tarefa.fazendo, tarefa.cadastro, id])
    let info = resposta[0]
    return info.affectedRows
}

export async function deletarTarefa(id) {
    let comando = `
        delete 
         from 	tb_tarefa
        where 	id_tarefa = ?;
    `
    let resposta = await con.query(comando, [id])
    let info = resposta[0]
    return info.affectedRows
}