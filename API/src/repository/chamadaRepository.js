import conexao from "./connection.js";

export async function inserir(chamada) {
    let comando = 'insert into tb_chamada ( nm_nome ) value ( ? )'

    let [resposta] = await conexao.query(comando, [chamada.nome])
    

    chamada.id = resposta.insertId;
    return chamada;
}