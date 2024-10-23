import { LayoutMobile } from '@/components/LayoutMobile';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate()

    return (
        <LayoutMobile>
            <div className='h-full flex flex-col justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="./logo-grande.png" alt="" className='w-72 mb-2' />
                    <p className='text-md font-lora-italic'>Cuidando da mente</p>
                    <h3 className='text-3xl text-center font-more-sugar'>SAÚDE MENTAL NO ENSINO MÉDIO</h3>
                    <p className='text-md font-lora-italic'>fortalecendo o futuro</p>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full flex justify-center items-center mb-9'>
                        <button
                            className='bg-purple w-72 rounded-full py-3 px-3 text-black shadow-black shadow-md border border-black text-center hover:opacity-85 font-sniglet'
                            onClick={() => navigate('/formulario')}
                        >
                            INICIAR</button>
                    </div>
                    <div>
                        <p className='text-[10px] text-justify'>A presente pesquisa acadêmica tem como objetivo analisar os dados obtidos por meio da aplicação da Escala de Ansiedade e Depressão Hospitalar (HAD). Este estudo busca aprofundar o entendimento dos dados coletados, respeitando e observando as disposições da Lei nº 13.709, de 14 de agosto de 2018, que estabelece a Lei Geral de Proteção de Dados (LGPD).</p>
                    </div>
                </div>
            </div>
        </LayoutMobile>
    )
}