import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label, Pie, PieChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const config = {
    participantes: {
        label: "Participantes",
    },
    masculino: {
        label: "Masculino",
        color: "hsl(var(--chart-1))",
    },
    feminino: {
        label: "Feminino",
        color: "hsl(var(--chart-2))",
    },
    outros: {
        label: "Outros",
        color: "hsl(var(--chart-3))",
    },
    prefiro_nao_informar: {
        label: "Prefiro não informar",
        color: "hsl(var(--chart-4))",
    }
}

export default function PieChartComponent({ title, data, quantidadeTotal }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    <span className="text-sm md:text-lg">{title}</span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={config}
                    className="mx-auto aspect-square max-h-[225px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={data}
                            dataKey="quantidade"
                            nameKey="genero"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {quantidadeTotal.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Participantes
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}