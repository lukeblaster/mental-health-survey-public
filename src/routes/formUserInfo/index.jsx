import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export function FormUserInfo() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        localStorage.setItem("dadosUsuario", JSON.stringify(data))
        navigate('/questionario')
    }

    return (
        <div className="flex flex-col bg-white h-screen p-6 justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-background h-full w-auto max-w-md rounded-lg p-3 bg-grade bg-cover">
                <div className='w-full'>
                    <div>
                        <h4 className="font-bold p-3">Atividade Práticas Interdisciplinares de Extensão II - Uninassau Maracanaú</h4>
                        <p className="p-3 font-medium mt-2">Pesquisa de Saúde Mental</p>
                        <p className="px-3 text-sm text-justify font-lora-italic">Nesta página, você encontrará um questionário com 14 perguntas que será utilizado como base para nossas pesquisas acadêmicas. Todas as informações fornecidas serão tratadas com confidencialidade e armazenadas de acordo com a Lei Geral de Proteção de Dados (LGPD).</p>
                    </div>
                    <div className="my-6 p-3">
                        <p className="font-medium text-sm mb-4">Por favor, preencha os dados:</p>

                        <div>

                            <div className="my-2">
                                <label className="text-sm font-semibold mb-1">Turma</label>
                                <select
                                    className="border rounded-xl w-full py-2 px-2"
                                    {...register("instituicao", {
                                        required: true, validate: (value) => {
                                            return value !== "0"
                                        }
                                    })}
                                >
                                    <option value="0"></option>
                                    <option value="1° Série">1° Série</option>
                                    <option value="2° Série">2° Série</option>
                                </select>
                                {errors?.instituicao?.type === "validate" && (
                                    <div className="text-xs">
                                        Por favor, selecione a sua turma
                                    </div>
                                )}
                            </div>

                            <div className='flex justify-between'>

                                <div key='form-gender' className="my-2" name="gender">
                                    <div className='flex items-baseline justify-between'>
                                        <label className="text-sm font-semibold mb-1">Gênero</label>
                                    </div>
                                    <select
                                        className="border rounded-xl w-auto mr-3 py-2 px-2"
                                        {...register("genero", {
                                            validate: (value) => {
                                                return value !== "0"
                                            }
                                        })}
                                    >
                                        <option value="0"></option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Outros">Outros</option>
                                        <option value="Prefiro não informar">Prefiro não informar</option>
                                    </select>
                                    {errors?.genero?.type === "validate" && (
                                        <div className="text-xs mr-2">
                                            Por favor, escolha uma opção válida
                                        </div>
                                    )}
                                </div>

                                <div key='form-age' className="my-2 flex flex-col" name="age">
                                    <div className='flex items-baseline justify-between'>
                                        <label className="text-sm font-semibold mb-1">Idade</label>
                                    </div>
                                    <input
                                        className="border rounded-xl w-full py-2 px-2"
                                        type="text"
                                        {...register("idade", { required: true })}
                                    />
                                    {errors.idade?.type === "required" && (
                                        <div className="text-xs" match="valueMissing">
                                            Por favor, informe sua idade
                                        </div>
                                    )}
                                </div>

                            </div>

                            <div className='flex justify-center items-center'>
                                <button
                                    className='bg-purple w-72 mt-1 rounded-full py-3 px-3 text-black shadow-black shadow-sm border border-black text-center hover:opacity-85 font-more-sugar'
                                    onClick={() => handleSubmit(onSubmit)()}
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
