import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import supabase from '@/api/supabase';
import { Bounce, toast } from 'react-toastify';

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmitLogin = async (data) => {
        const { email, password } = data

        const { data: dataLogin, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        
        if(error?.code === "invalid_credentials") {
            toast.error("Credenciais inválidas!" , {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce
            })
        }

        if(dataLogin?.session?.user?.role === "authenticated") {
            navigate('/painel/dashboard')
            toast.success('Login realizado com sucesso', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce
            })
        }
    }

    return (
        <div className="flex flex-col h-screen justify-center items-center md:h-screen p-3">

            <div className="bg-white w-full max-h-max lg:h-[540px] md:w-[475px] flex flex-col justify-center items-center md:m-auto p-6 rounded-lg">

                <div className="flex flex-col w-full items-center">

                    <p className='font-semibold'>Seja bem-vindo (a)!</p>

                    <img src="/logo-grande.png" width={150} alt="Logo do projeto" className='my-6' />

                    <div className='w-full'>

                        <div className="my-2 w-full">
                            <label className="text-sm font-semibold mb-1">E-mail</label>
                            <input
                                className="border rounded-xl w-full px-2 py-2"
                                type='email'
                                {...register("email", {
                                    required: true,
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                        message: 'Insira um e-mail válido'
                                    }
                                })}
                            />
                            {errors?.email?.type === "required" && (
                                <div className="text-xs">
                                    Por favor, informe um e-mail válido
                                </div>
                            )}
                            {errors?.email?.type === "pattern" && (
                                <div className="text-xs">
                                    Por favor, informe um e-mail válido
                                </div>
                            )}
                        </div>

                        <div className="my-2 w-full">
                            <label className="text-sm font-semibold mb-1">Senha</label>
                            <input
                                className="border rounded-xl w-full px-2 py-2"
                                type='password'
                                {...register("password", {
                                    required: true,
                                })}
                            />
                            {errors?.password?.type === "required" && (
                                <div className="text-xs">
                                    Por favor, informe sua senha
                                </div>
                            )}
                        </div>

                        <div className='flex justify-center items-center my-9 w-full'>
                            <button
                                className='w-full bg-purple h-12 rounded-lg font-semibold'
                                onClick={() => handleSubmit(onSubmitLogin)()}
                            >
                                Login
                            </button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}