import conexao from "./connection.js";

export async function inserir(inscricao) {
    let comando = 'insert into tb_produto (nm_produto,ds_marca,ds_categoria,vl_valor,ds_modelo) value (?,?,?,?,?)'

    let [resposta] = await conexao.query(comando, [inscricao.nome, inscricao.marca, inscricao.categoria, inscricao.valor, inscricao.modelo])


    inscricao.id = resposta.insertId;
    return inscricao;
}

export async function consulta() {
    let comando = `select
    id_produto      as id,
    nm_produto      as produto,
    ds_marca        as marca,
    ds_categoria    as categoria,
    vl_valor        as valor,
    ds_modelo       as modelo
    from tb_produto   
    `

    const [resposta] = await conexao.query(comando)
    resposta[0]
    return resposta
}


export async function deletar(id) {
    try {
        const comando = 'DELETE FROM tb_produto WHERE id_produto = ?';

        const [resposta] = await conexao.query(comando, [id]);

    } catch (err) {
        throw new Error(err.message);
    }
}

export async function alterarchamada(id, inscricao) {
    const comando = `
        update tb_produto
            set nm_produto = ?,
            ds_marca = ?,
            ds_categoria = ?,
            vl_valor = ?,
            ds_modelo = ?
            where id_produto = ?
        `;

    const [resposta] = await conexao.query(comando, [
        inscricao.nome,
        inscricao.marca,
        inscricao.categoria,
        inscricao.valor,
        inscricao.modelo,
        id
    ])

    return resposta.affectedRows;

}


