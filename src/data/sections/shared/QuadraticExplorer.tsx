import { Cartesian2D, InlineFormula, Button } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { VariableSlider } from "./VariableSlider";

const describeWidth = (coefficient: number) => {
    const size = Math.abs(coefficient);
    if (size === 0) return "completely flat — no curve at all";
    if (size < 0.75) return "wide and shallow";
    if (size <= 1.25) return "the standard width";
    return "narrow and steep";
};

const describeDirection = (coefficient: number) => {
    if (coefficient > 0) return "opens upwards";
    if (coefficient < 0) return "opens downwards";
    return "flat";
};

/**
 * Quadratic explorer: a single slider for the number in front of x squared,
 * running from negative, through zero, to positive.
 */
export const QuadraticExplorer = () => {
    const coefficient = useVar("quadraticCoefficient", 1) as number;
    const setVar = useSetVar();

    const plots: PlotItem[] = [
        {
            type: "function",
            fn: (x) => x * x,
            color: "#cbd5e1",
            weight: 2,
        },
        {
            type: "function",
            fn: (x) => coefficient * x * x,
            color: "#7c3aed",
            weight: 3,
        },
        {
            type: "point",
            x: 0,
            y: 0,
            color: "#7c3aed",
        },
    ];

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <InlineFormula latex={`y = ${coefficient}x^2`} />
            </div>

            <VariableSlider
                varName="quadraticCoefficient"
                hint="Drag slowly through zero and watch the curve flatten, then open the other way."
            />

            <Cartesian2D
                height={380}
                viewBox={{ x: [-6, 6], y: [-8, 8] }}
                plots={plots}
            />

            <div className="rounded-lg border border-violet-200 bg-violet-50 px-4 py-3 text-sm text-violet-900">
                Right now the curve is <span className="font-semibold">{describeWidth(coefficient)}</span>{" "}
                and it <span className="font-semibold">{describeDirection(coefficient)}</span>. The grey
                curve behind is the plain <InlineFormula latex="y = x^2" /> for comparison.
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={() => setVar("quadraticCoefficient", 1)}
            >
                Reset the knob
            </Button>
        </div>
    );
};
