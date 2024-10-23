import { Sidebar } from "../../../components/Sidebar"
import { useEffect, useMemo, useState } from "react"
import { Bar } from "recharts"
import getDadosDashboard from "@/methods/get-dados-dashboard"
import { checkUserSession } from "@/methods/check-session"
import { useNavigate } from "react-router-dom"
import BarChartComponent from "@/components/Charts/BarChartComponent"
import PieChartComponent from "@/components/Charts/PieChartComponent"
import { toast } from "react-toastify"

const chartConfig = {
    quantidade: {
        label: "Quantidade de respostas",
        color: "#2cbeeb",
    },
}

const chartAgeConfig = {
    firstinterval: {
        label: "13 a 17 anos",
        color: "#ee6e6e",
    },
    secondinterval: {
        label: "18 a 21 anos",
        color: "#56ee9b",
    },
    thirdinterval: {
        label: "22 a. ou mais",
        color: "rgb(204, 96, 226)",
    },
}




export function Dashboard() {
    const navigate = useNavigate()
    const [dataChartByClass, setDataChartByClass] = useState([])
    const [dataChartByAge, setDataChartByAge] = useState([])
    const [dataPieChartImprovavel, setDataPieChartImprovavel] = useState([])
    const [dataPieChartPossivel, setDataPieChartPossivel] = useState([])
    const [dataPieChartProvavel, setDataPieChartProvavel] = useState([])

    useEffect(() => {
        const verifyUser = async (Bounce) => {
            const session = await checkUserSession();

            if (session == null) {
                navigate('/painel/login')
                toast.error("Sessão expirada. Faça login novamente!", {
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
                getDadosDashboard().then((result) => {
                    setDataChartByClass(result[0])
                    setDataChartByAge(result[1])
                    setDataPieChartImprovavel(result[2])
                    setDataPieChartPossivel(result[3])
                    setDataPieChartProvavel(result[4])
                })

            }
        }

        verifyUser()

        return () => {}
    }, [])

    const totalParticipantesImprovavel = useMemo(() => {
        return dataPieChartImprovavel?.reduce((acc, curr) => acc + curr.quantidade, 0)
    }, [dataPieChartImprovavel])

    const totalParticipantesPossivel = useMemo(() => {
        return dataPieChartPossivel?.reduce((acc, curr) => acc + curr.quantidade, 0)
    }, [dataPieChartPossivel])

    const totalParticipantesProvavel = useMemo(() => {
        return dataPieChartProvavel.reduce((acc, curr) => acc + curr.quantidade, 0)
    }, [dataPieChartProvavel])

    return (
        <div className='flex flex-col bg-gray-100 w-full lg:w-auto'>
            
            <Sidebar />

            <div className='bg-gray-100 flex flex-col flex-1 lg:ml-64 p-4 w-full lg:w-auto'>
                
                <div className="flex flex-col w-full lg:w-auto lg:grid lg:grid-rows-2 lg:grid-flow-row gap-3">

                    <div className="flex flex-col w-full gap-3 lg:w-auto lg:grid lg:grid-cols-2 ">

                        <BarChartComponent
                            key="chart-class"
                            title="Quantidade de respostas por instituição"
                            config={chartConfig}
                            data={dataChartByClass}
                            dataKeyX="nome_escola"
                        >
                            <Bar
                                dataKey="quantidade"
                                fill="var(--color-quantidade)"
                                radius={4}
                            />
                        </BarChartComponent>

                        <BarChartComponent
                            key="chart-age"
                            title="Resultados por intervalo de idade"
                            config={chartAgeConfig}
                            data={dataChartByAge}
                            dataKeyX="status"
                        >
                            <Bar dataKey="firstinterval" fill="var(--color-firstinterval)" radius={4} />
                            <Bar dataKey="secondinterval" fill="var(--color-secondinterval)" radius={4} />
                            <Bar dataKey="thirdinterval" fill="var(--color-thirdinterval)" radius={4} />
                        </BarChartComponent>

                    </div>

                    <div className="w-full flex flex-col lg:grid lg:grid-cols-3 gap-3">

                        <PieChartComponent 
                            key="chart-improvavel"
                            title="Improvável"
                            data={dataPieChartImprovavel}
                            quantidadeTotal={totalParticipantesImprovavel}
                        />

                        <PieChartComponent 
                            key="chart-possivel"
                            title="Possível"
                            data={dataPieChartPossivel}
                            quantidadeTotal={totalParticipantesPossivel}
                        />

                        <PieChartComponent 
                            key="chart-provavel"
                            title="Provável"
                            data={dataPieChartProvavel}
                            quantidadeTotal={totalParticipantesProvavel}
                        />
                        
                    </div>
                    
                </div >
            </div>
        </div>
    )
}