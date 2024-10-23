import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CartesianGrid, XAxis, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function BarChartComponent({ title, config, data, dataKeyX, children }) {

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-sm lg:text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} className="mx-auto lg:max-h-[250px] w-full lg:w-auto">
                    <BarChart
                        accessibilityLayer
                        data={data}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={dataKeyX}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed" />} />
                        {children}
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}