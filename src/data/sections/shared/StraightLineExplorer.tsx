import { Cartesian2D, InlineFormula, Button } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { VariableSlider } from "./VariableSlider";

const formatSigned = (value: number) => {
    if (value === 0) return "";
    return value < 0 ? `- ${Math.abs(value)}` : `+ ${value}`;
};

/**
 * Straight-line explorer: one slider for the gradient, one for the intercept,
 * so students can hold one still and see exactly what the other one does.
 */
export const StraightLineExplorer = () => {
    const gradient = useVar("lineGradient", 2) as number;
    const intercept = useVar("lineIntercept", 1) as number;
    const setVar = useSetVar();

    const plots: PlotItem[] = [
        {
            type: "function",
            fn: (x) => gradient * x + intercept,
            color: "#2563eb",
            weight: 3,
        },
        {
            type: "point",
            x: 0,
            y: intercept,
            color: "#ea580c",
        },
    ];

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <InlineFormula
                    latex={`y = ${gradient}x ${formatSigned(intercept)}`}
                />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <VariableSlider
                    varName="lineGradient"
                    hint="This is the tilt knob — it changes how steeply the line climbs."
                />
                <VariableSlider
                    varName="lineIntercept"
                    hint="This is the starting knob — it slides the whole line up or down."
                />
            </div>

            <Cartesian2D
                height={360}
                viewBox={{ x: [-6, 6], y: [-6, 6] }}
                plots={plots}
            />

            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                        setVar("lineGradient", 2);
                        setVar("lineIntercept", 1);
                    }}
                >
                    Reset both knobs
                </Button>
                <span>
                    The orange dot marks where the line crosses the vertical axis.
                </span>
            </div>
        </div>
    );
};
