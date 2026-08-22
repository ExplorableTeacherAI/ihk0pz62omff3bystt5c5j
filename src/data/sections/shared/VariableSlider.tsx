import { Slider } from "@/components/atoms";
import { useVar, useSetVar } from "@/stores";
import { getVariableInfo } from "../../variables";

/** Removes floating-point dust such as 2.0000000000000004 from slider values */
const roundToStep = (value: number) => Math.round(value * 1000) / 1000;

export interface VariableSliderProps {
    /** Name of the variable in the global store (must exist in variables.ts) */
    varName: string;
    /** Overrides the label from the variable definition */
    label?: string;
    /** Short note shown under the slider, e.g. what this knob controls */
    hint?: string;
}

/**
 * A labelled slider bound to a variable in the global store.
 * Range, step, label and colour all come from the variable definition,
 * so the slider stays in sync with variables.ts.
 */
export const VariableSlider = ({ varName, label, hint }: VariableSliderProps) => {
    const info = getVariableInfo(varName);
    const fallback = typeof info?.defaultValue === "number" ? info.defaultValue : 0;
    const value = useVar(varName, fallback) as number;
    const setVar = useSetVar();

    const min = info?.min ?? 0;
    const max = info?.max ?? 10;
    const step = info?.step ?? 1;
    const color = info?.color ?? "#2563eb";

    return (
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
            <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="text-sm font-semibold text-slate-700">
                    {label ?? info?.label ?? varName}
                </span>
                <span
                    className="rounded px-2 py-0.5 text-sm font-bold text-white"
                    style={{ backgroundColor: color }}
                >
                    {roundToStep(value)}
                </span>
            </div>
            <Slider
                value={[value]}
                min={min}
                max={max}
                step={step}
                onValueChange={(next) => setVar(varName, roundToStep(next[0]))}
            />
            {hint && <div className="mt-2 text-xs text-slate-500">{hint}</div>}
        </div>
    );
};
