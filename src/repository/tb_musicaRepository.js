import con from "./connection.js";

export async function consultaMusica() {
    let comando = `
        select  id_musica  			id,
                nm_musica			musica,
                ds_artista			artista,
                url_musica			url,
                dt_lancamento		lancamento,
                qtd_visualizacoes	visualizacoes,
                hr_duracao			duracao,
                bt_destaque			destaque,
                ds_idioma			idioma
         from   tb_musica;
    `
    let resposta = await con.query(comando)
    let registro = resposta[0]
    return registro
}

export async function inserirMusica(musica) {
    let comando = `
        insert tb_musica (nm_musica, ds_artista, url_musica, dt_lancamento, qtd_visualizacoes, hr_duracao, bt_destaque, ds_idioma) 
        values	(?, ?, ?, ?, ?, ?, ?, ?);
    `
    let resposta = await con.query(comando, [musica.musica, musica.artista, musica.url, musica.lancamento, musica.visualizacao, musica.duracao, musica.destaque, musica.idioma])
    let info = resposta[0]
    return info.insertId
}

export async function alterarMusica(id, musica) {
    let comando = `
        update 	tb_musica
           set 	nm_musica			= ?,
                ds_artista 	        = ?,
            	url_musica 	        = ?,
            	dt_lancamento 	    = ?,
            	qtd_visualizacoes 	= ?,
            	hr_duracao 	        = ?,
            	bt_destaque 	    = ?,
            	ds_idioma 	        = ?
         where 	id_musica 	        = ?;
    `
    let resposta = await con.query(comando, [musica.musica, musica.artista, musica.url, musica.lancamento, musica.visualizacao, musica.duracao, musica.destaque, musica.idioma, id])
    let info = resposta[0]
    return info.affectedRows
}

export async function deletarMusica(id) {
    let comando = `
        delete 
          from  tb_musica
         where 	id_musica   = ?;
    `
    let resposta = await con.query(comando, [id])
    let info = resposta[0]
    return info.affectedRows
}