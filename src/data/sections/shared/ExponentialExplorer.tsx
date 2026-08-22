import { Cartesian2D, InlineFormula, Button } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { VariableSlider } from "./VariableSlider";

const DAYS = [1, 2, 3, 4, 5, 6];

const formatCoins = (value: number) => {
    const rounded = Math.round(value * 10) / 10;
    if (value >= 100 || Number.isInteger(rounded)) return Math.round(value).toString();
    return rounded.toFixed(1);
};

/**
 * Exponential explorer: a slider for the multiplying number, the curve it
 * produces, and the day-by-day reward totals it generates.
 */
export const ExponentialExplorer = () => {
    const base = useVar("exponentialBase", 2) as number;
    const setVar = useSetVar();

    const plots: PlotItem[] = [
        {
            type: "function",
            fn: (x) => Math.pow(2, x),
            color: "#e2e8f0",
            weight: 2,
            domain: [-1, 6],
        },
        {
            type: "function",
            fn: (x) => Math.pow(base, x),
            color: "#ea580c",
            weight: 3,
            domain: [-1, 6],
        },
    ];

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <InlineFormula latex={`y = ${base}^x`} />
            </div>

            <VariableSlider
                varName="exponentialBase"
                hint="Nudge this up just a little and watch how much sooner the curve takes off."
            />

            <Cartesian2D
                height={380}
                viewBox={{ x: [-1, 6], y: [-2, 34] }}
                plots={plots}
            />

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {DAYS.map((day) => (
                    <div
                        key={`exponential-day-${day}`}
                        className="rounded-lg border border-orange-200 bg-orange-50 p-2 text-center"
                    >
                        <div className="text-xs font-medium text-orange-700">Day {day}</div>
                        <div className="text-base font-bold text-orange-900">
                            {formatCoins(Math.pow(base, day))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setVar("exponentialBase", 2)}
                >
                    Back to doubling
                </Button>
                <span>The pale curve behind is plain doubling, for comparison.</span>
            </div>
        </div>
    );
};
