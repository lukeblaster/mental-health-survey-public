import supabase from "../api/supabase";

export default async function getDadosDashboard() {

    try {

        // Pega os dados de resultado por idade
        let { data: dadosBySchool, error: errorBySchool } = await supabase
            .rpc('get_unique_instituicao_count')

        if (errorBySchool) throw (errorBySchool)

        // Pega os dados por idade com status de Improvavel
        let { data: dadosByAgeImprovavel, error: errorByAgeImprovavel } = await supabase
            .rpc('get_resposta_by_age_imp')

        if (errorByAgeImprovavel) throw (errorByAgeImprovavel)

        // Pega os dados por idade com status de Possível
        let { data: dadosByAgePossivel, error: errorByAgePossivel } = await supabase
            .rpc('get_resposta_by_age_pos')

        if (errorByAgePossivel) throw (errorByAgePossivel)

        // Pega os dados por idade com status de Provável
        let { data: dadosByAgeProvavel, error: errorByAgeProvavel } = await supabase
            .rpc('get_resposta_by_age_pro')

        if (errorByAgeProvavel) throw (errorByAgeProvavel)

        const dadosChart2 = [dadosByAgeImprovavel[0], dadosByAgePossivel[0], dadosByAgeProvavel[0]]

        // Pega os dados por idade com status de Provável
        let { data: dadosByGender, error: errorByGender } = await supabase
            .rpc('get_resposta_by_age_pro')

        if (errorByGender) throw (errorByGender)


        // Dados do gráfico de Improvável por gênero

        let { data: dadosImprovavelM, error: errorImprovavelM } = await supabase
            .rpc('get_masc_m_imp')

        if (errorImprovavelM) throw (errorImprovavelM)

        let { data: dadosImprovavelF, error: errorImprovavelF } = await supabase
            .rpc('get_fem_m_imp')

        if (errorImprovavelF) throw (errorImprovavelF)

        let { data: dadosImprovavelO, error: errorImprovavelO } = await supabase
            .rpc('get_outros_m_imp')

        if (errorImprovavelO) throw (errorImprovavelO)

        let { data: dadosImprovavelP, error: errorImprovavelP } = await supabase
            .rpc('get_prefiron_m_imp')

        if (errorImprovavelP) throw (errorImprovavelP)

        const dadosChartImprovavel = []

        if (dadosImprovavelM[0]) dadosChartImprovavel.push(dadosImprovavelM[0])
        if (dadosImprovavelF[0]) dadosChartImprovavel.push(dadosImprovavelF[0])
        if (dadosImprovavelO[0]) dadosChartImprovavel.push(dadosImprovavelO[0])
        if (dadosImprovavelP[0]) dadosChartImprovavel.push(dadosImprovavelP[0])

        // Dados do gráfico de Possível por gênero

        let { data: dadosPossivelM, error: errorPossivelM } = await supabase
            .rpc('get_masc_m_pos')

        if (errorPossivelM) throw (errorPossivelM)

        let { data: dadosPossivelF, error: errorPossivelF } = await supabase
            .rpc('get_fem_m_pos')

        if (errorPossivelF) throw (errorPossivelF)

        let { data: dadosPossivelO, error: errorPossivelO } = await supabase
            .rpc('get_outros_m_pos')

        if (errorPossivelO) throw (errorPossivelO)

        let { data: dadosPossivelP, error: errorPossivelP } = await supabase
            .rpc('get_prefiron_m_pos')

        if (errorPossivelP) throw (errorPossivelP)

        const dadosChartPossivel = []

        if (dadosPossivelM[0]) dadosChartPossivel.push(dadosPossivelM[0])
        if (dadosPossivelF[0]) dadosChartPossivel.push(dadosPossivelF[0])
        if (dadosPossivelO[0]) dadosChartPossivel.push(dadosPossivelO[0])
        if (dadosPossivelP[0]) dadosChartPossivel.push(dadosPossivelP[0])

        // Dados do gráfico de Provável por gênero

        let { data: dadosProvavelM, error: errorProvavelM } = await supabase
            .rpc('get_masc_m_pro')

        if (errorProvavelM) throw (errorProvavelM)

        let { data: dadosProvavelF, error: errorProvavelF } = await supabase
            .rpc('get_fem_m_pro')

        if (errorProvavelF) throw (errorProvavelF)

        let { data: dadosProvavelO, error: errorProvavelO } = await supabase
            .rpc('get_outros_m_pro')

        if (errorProvavelO) throw (errorProvavelO)

        let { data: dadosProvavelP, error: errorProvavelP } = await supabase
            .rpc('get_prefiron_m_pro')

        if (errorProvavelP) throw (errorProvavelP)

        const dadosChartProvavel = []

        if (dadosProvavelM[0]) dadosChartProvavel.push(dadosProvavelM[0])
        if (dadosProvavelF[0]) dadosChartProvavel.push(dadosProvavelF[0])
        if (dadosProvavelO[0]) dadosChartProvavel.push(dadosProvavelO[0])
        if (dadosProvavelP[0]) dadosChartProvavel.push(dadosProvavelP[0])

        console.log("Dados carregados com sucesso ✅")

        return [
            dadosBySchool,
            dadosChart2,
            dadosChartImprovavel,
            dadosChartPossivel,
            dadosChartProvavel
        ]

    } catch (error) {
        console.warn(error)
    }

}