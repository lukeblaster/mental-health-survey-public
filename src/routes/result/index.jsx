import usePontuacaoStore from "@/stores/pontuacaoStore"
import { LayoutMobile } from "@/components/LayoutMobile"

export function Result() {
    const pontuacao = usePontuacaoStore((state) => state.pontuacao)

    console.log(pontuacao)

    return (
        <LayoutMobile>
            <div className="py-2 w-80 flex flex-col h-full justify-center items-center gap-12">
                <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col mt-20 h-44 w-80 p-3 rounded-lg border border-black bg-secondary text-center shadow-purple shadow-lg justify-center items-center">
                        {
                            pontuacao < 7 && (
                                <>
                                    <p className="font-more-sugar">Lembre-se de que, mesmo nas noites mais escuras, há um amanhecer esperando para te encontrar. Aguente firme; há luz no fim dessa estrada</p>
                                    <p>- Collen Hoover</p>
                                </>
                            ) ||

                            pontuacao >= 8 && pontuacao <= 11 && (
                                <>
                                    <p className="font-more-sugar">Você é mais forte do que pensa, mesmo quando tudo parece desmoronar.</p>
                                    <p>- Elite</p>
                                </>
                            ) ||
                            pontuacao >= 12 && (
                                <>
                                    <p className="font-more-sugar">As tempestades que você enfrenta hoje não definem quem você é, mas o que você faz depois delas, sim. Permita-se recomeçar, sempre que for necessário</p>
                                    <p>- Collen Hoover</p>
                                </>
                            )
                        }
                    </div>
                    <div className="flex justify-center items-center w-full text-center my-6">
                        <p className="w-full bg-purple py-2 rounded-lg font-sniglet shadow shadow-black">FIM</p>
                    </div>
                    <div className="w-full">
                        <p className="text-xs font-lora font-semibold text-center">O CVV (Centro de Valorização da Vida) realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que precisam conversar, sob total sigilo, por telefone, e-mail e chat, 24 horas por dia, todos os dias.</p>
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <img src="./mensagem-1.png" className="w-auto h-24" alt="" />
                        <img src="./mensagem-2.png" className="w-auto h-24" alt="" />
                    </div>
                </div>
            </div>
        </LayoutMobile>
    )

}