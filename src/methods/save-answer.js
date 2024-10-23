import supabase from "../api/supabase";

export default async function saveAnswer(respostas, status) {
    const dados = JSON.parse(localStorage.getItem("dadosUsuario"))

    console.log(status)

    const { data, error } = await supabase.from('respostas').insert([
        {
            json_respostas: respostas,
            status: status
        }
    ]).select()

    const { data_, error_ } = await supabase.from('resposta').insert([
        {
            id_respostas: data[0].id,
            genero: dados.genero,
            idade: dados.idade,
            nome_escola: dados.instituicao
        }
    ])
}