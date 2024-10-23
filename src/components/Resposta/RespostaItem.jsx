
export function RespostaItem({ resposta, handleAnswer }) {
    return (
        <button
            onClick={() => handleAnswer(resposta)}
            className='bg-purple rounded-full py-3 px-3 text-black shadow-black shadow-sm border border-black text-center font-sniglet'
        >
            {resposta.texto}
        </button>
    )
}