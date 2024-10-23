import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { perguntas } from "@/data/perguntas"
import saveAnswer from "@/methods/save-answer";

import { useShallow } from "zustand/react/shallow";
import useRespostaStore from "@/stores/respostaStore";
import usePontuacaoStore from "@/stores/pontuacaoStore";

import { LayoutMobile } from "@/components/LayoutMobile";
import { PerguntaRoot } from "@/components/Pergunta";
import { Resposta } from '@/components/Resposta'

export function Survey() {
    const navigate = useNavigate()
    const [perguntaSelecionada, setPerguntaSelecionada] = useState(0);
    const [perguntasRespondidas, setPerguntasRespondidas] = useState(0)
    const { respostasUsuario, adicionarResposta, zerarRespostasUsuario } = useRespostaStore(
        useShallow((state) => ({
            respostasUsuario: state.respostasUsuario,
            adicionarResposta: state.adicionarResposta,
            zerarRespostasUsuario: state.zerarRespostasUsuario
        }))
    )

    const { salvarPontuacao, zerarPontuacao } =
        usePontuacaoStore(useShallow((state) => ({
            salvarPontuacao: state.salvarPontuacao,
            zerarPontuacao: state.zerarPontuacao,
        })))

    let respostas = perguntas[perguntaSelecionada].respostas

    useEffect(() => {
        zerarRespostasUsuario()
        zerarPontuacao()
    }, [])

    useEffect(() => {
        if (perguntasRespondidas == 14) finalizar()
    }, [perguntasRespondidas])

    function handleAnswer(r) {
        let resposta = {}

        resposta.idPergunta = perguntaSelecionada
        resposta.texto = r.texto
        resposta.pontuacao = r.pontuacao

        if (resposta.idPergunta === null || resposta.idPergunta === undefined) {
            return
        }

        adicionarResposta(resposta)
        setPerguntasRespondidas(state => state + 1)

        // Se já tiver respondido todas as perguntas não avança nas questões
        if (perguntasRespondidas >= 13) {
            return
        }

        setPerguntaSelecionada(state => state + 1)
    }

    function ordernarRespostas() {
        let pontuacao = 0;

        respostasUsuario.sort((a, b) => {
            if (a.idPergunta < b.idPergunta) {
                return -1
            }
            if (a.idPergunta > b.idPergunta) {
                return 1
            }

            return 0
        })

        respostasUsuario.forEach((r) => {
            pontuacao = pontuacao + r.pontuacao
        })

        return pontuacao
    }

    function finalizar() {

        const pontuacao = ordernarRespostas()
        salvarPontuacao(pontuacao)

        let status = ''

        if (pontuacao <= 7) {
            status = 'Improvável'
        } else if (pontuacao >= 8 && pontuacao <= 11) {
            status = 'Possível'
        } else if (pontuacao >= 12) {
            status = 'Provável'
        }

        saveAnswer(respostasUsuario, status, pontuacao)

        zerarRespostasUsuario()

        navigate('/resultado')
    }

    return (
        <LayoutMobile>
            <div className="flex flex-col justify-center items-center">
                <div className='flex justify-center items-center'>
                    <img src="./output.png" className="w-70 h-20" />
                </div>
                <div className='mt-5'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className="py-2 h-auto w-80 rounded-lg flex flex-col justify-center items-center border border-black bg-secondary">
                            <PerguntaRoot
                                message={perguntas[perguntaSelecionada].pergunta}
                            />
                            <img src="./logo-apiext-ii.png" className="h-12 w-12" />
                        </div>
                    </div>
                    <Resposta.Root>
                        {respostas?.map((resposta, index) => (
                            <Resposta.Item
                                key={index}
                                resposta={resposta}
                                handleAnswer={handleAnswer}
                            />
                        ))}
                    </Resposta.Root>
                </div>
            </div>
        </LayoutMobile>
    )
}