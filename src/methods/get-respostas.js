import supabase from "../api/supabase";

export default async function getDadosResposta() {

    let { data, error } = await supabase
        .rpc('get_respostas')
    if (error) console.error(error)
    else console.log('puxou os dados corretamente!')

    return data
}