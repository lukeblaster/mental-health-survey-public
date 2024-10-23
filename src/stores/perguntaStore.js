import { create} from 'zustand'

const usePerguntaStore = create((set) => ({
    
    perguntasRespondidas: [],

    adicionarPerguntaRespondida: (pergunta) => set((state) => ({ perguntasRespondidas: [...state.perguntasRespondidas, pergunta ]})),

    zerarPerguntasRespondidas: () => set(() => ({ perguntasRespondidas: []}))

}))

export default usePerguntaStore;