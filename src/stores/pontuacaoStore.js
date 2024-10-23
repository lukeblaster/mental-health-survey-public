import { create} from 'zustand'

const usePontuacaoStore = create((set) => ({
    
    pontuacao: 0,

    salvarPontuacao: (p) => set(() => ({ pontuacao: p})),

    zerarPontuacao: () => set(() => ({ pontuacao: 0}))

}))

export default usePontuacaoStore;