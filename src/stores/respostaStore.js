import { create} from 'zustand'

const useRespostaStore = create((set) => ({
    
    respostasUsuario: [],

    adicionarResposta: (resposta) => set((state) => ({ respostasUsuario: [...state.respostasUsuario, resposta ]})),

    zerarRespostasUsuario: () => set(() => ({ respostasUsuario: []}))

}))

export default useRespostaStore;