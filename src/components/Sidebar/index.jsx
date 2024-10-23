import { Button } from '../ui/button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { Home, LogOut, Menu } from 'lucide-react'
import supabase from '@/api/supabase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export function Sidebar() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if(error) {
            toast.warning("Erro ao fazer logout. Tente novamente", {
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
        } else {
            navigate('/painel/login')
        }
    }

    return (
        <div className='w-full'>

            <aside className='fixed inset-y-0 left-0 z-10 w-60 border-r hidden lg:flex bg-slate-50'>
                <nav className='flex flex-col w-full p-4 mt-2'>
                    <TooltipProvider>
                        <div className='flex justify-center'>
                            <img src="/logo-grande.png" width={150} alt="" />
                        </div>
                        <div className='flex gap-2 mt-3 w-full p-3 items-center text-lg font-bold'>
                            Gerencimento de Pesquisa
                        </div>
                        <Tooltip className="w-full ">
                            <TooltipTrigger className='flex gap-2 mt-3 w-full p-3 items-center'>
                                <Home />
                                <a href='#!'>Dashboard</a>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <span>Dashboard</span>
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip className="w-full ">
                            <TooltipTrigger 
                                className='flex gap-2 w-full p-3 items-center mt-auto'
                                onClick={handleLogout}
                            >
                                <LogOut />
                                <span >Sair</span>
                            </TooltipTrigger>
                            <TooltipContent side="right">

                                <span>Sair do painel</span>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <Sheet>
                <SheetTrigger asChild className='lg:hidden'>
                    <Button variant="outline" className="mx-4 mt-2"><Menu className='mr-3' size={20} /> Menu</Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader className="text-left mb-6">
                        <SheetTitle>Menu</SheetTitle>
                    </SheetHeader>
                    <div className='flex flex-col gap-6'>
                        <div 
                            className='flex gap-3 cursor-pointer'
                            onClick={() => navigate('/painel/dashboard')}
                        >
                            <Home />
                            <span>Dashboard</span>
                        </div>
                        <div 
                            className='flex gap-3 cursor-pointer'
                            onClick={handleLogout}
                        >
                            <LogOut />
                            <span>Sair</span>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}