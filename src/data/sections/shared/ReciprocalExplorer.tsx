import { Cartesian2D, InlineFormula, Button } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { VariableSlider } from "./VariableSlider";

const SQUAD_SIZES = [1, 2, 3, 4, 6, 8];

const formatShare = (value: number) => {
    const rounded = Math.round(value * 100) / 100;
    return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(2);
};

const describeCorners = (numerator: number) => {
    if (numerator === 0) return "flattened onto the horizontal axis — there is nothing to share";
    if (numerator > 0) return "in the top-right and bottom-left corners";
    return "in the top-left and bottom-right corners";
};

/**
 * Reciprocal explorer: a slider for the number being shared out, driving the
 * two branches of y = k / x.
 */
export const ReciprocalExplorer = () => {
    const numerator = useVar("reciprocalNumerator", 4) as number;
    const setVar = useSetVar();

    const plots: PlotItem[] = [
        {
            type: "function",
            fn: (x) => numerator / x,
            color: "#0d9488",
            weight: 3,
            domain: [-8, -0.15],
        },
        {
            type: "function",
            fn: (x) => numerator / x,
            color: "#0d9488",
            weight: 3,
            domain: [0.15, 8],
        },
    ];

    return (
        <div className="space-y-4">
            <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center">
                <InlineFormula latex={`y = \\frac{${numerator}}{x}`} />
            </div>

            <VariableSlider
                varName="reciprocalNumerator"
                hint="Push it past zero into the negatives and watch the branches jump corners."
            />

            <Cartesian2D
                height={380}
                viewBox={{ x: [-8, 8], y: [-8, 8] }}
                plots={plots}
            />

            <div className="rounded-lg border border-teal-200 bg-teal-50 px-4 py-3 text-sm text-teal-900">
                The two branches are currently{" "}
                <span className="font-semibold">{describeCorners(numerator)}</span>.
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {SQUAD_SIZES.map((size) => (
                    <div
                        key={`reciprocal-squad-${size}`}
                        className="rounded-lg border border-teal-200 bg-white p-2 text-center"
                    >
                        <div className="text-xs font-medium text-teal-700">
                            {size} player{size === 1 ? "" : "s"}
                        </div>
                        <div className="text-base font-bold text-teal-900">
                            {formatShare(numerator / size)}
                        </div>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                size="sm"
                onClick={() => setVar("reciprocalNumerator", 4)}
            >
                Reset the knob
            </Button>
        </div>
    );
};
