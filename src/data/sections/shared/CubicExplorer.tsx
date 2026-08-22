import { Cartesian2D, InlineFormula, Button } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { VariableSlider } from "./VariableSlider";

const describeCubic = (coefficient: number) => {
    if (coefficient === 0) return "a flat horizontal line — the curve has vanished";
    if (coefficient > 0) return "rising from bottom left to top right";
    return "falling from top left to bottom right";
};

/**
 * Cubic explorer: one slider for the number in front of x cubed,
 * dragged from negative, through zero, to positive.
 */
export const CubicExplorer = () => {
    const coefficient = useVar("cubicCoefficient", 1) as number;
    const setVar = useSetVar();

    const plots: PlotItem[] = [
        {
            type: "function",
            fn: (x) => x * x * x,
            color: "#e2e8f0",
            weight: 2,
        },
        {
            type: "function",
            fn: (x) => coefficient * x * x * x,
            color: "#db2777",
            weight: 3,
        },
        {
            type: "point",
            x: 0,
            y: 0,
            color: "#db2777",
        },
    ];

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <InlineFormula latex={`y = ${coefficient}x^3`} />
            </div>

            <VariableSlider
                varName="cubicCoefficient"
                hint="Watch the two ends of the S as you cross zero — they swap places."
            />

            <Cartesian2D
                height={380}
                viewBox={{ x: [-4, 4], y: [-8, 8] }}
                plots={plots}
            />

            <div className="rounded-lg border border-pink-200 bg-pink-50 px-4 py-3 text-sm text-pink-900">
                The curve is currently{" "}
                <span className="font-semibold">{describeCubic(coefficient)}</span>. The pale curve
                behind is the plain <InlineFormula latex="y = x^3" /> for comparison.
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={() => setVar("cubicCoefficient", 1)}
            >
                Reset the knob
            </Button>
        </div>
    );
};
