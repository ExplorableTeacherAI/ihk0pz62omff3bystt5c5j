import { useState } from "react";
import { Cartesian2D, InlineFormula } from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";

// ── Family definitions ────────────────────────────────────────────────────────

interface GraphFamily {
    id: string;
    name: string;
    equationLatex: string;
    knobJob: string;
    /** The function drawn in the thumbnail and the large panel */
    fn: (x: number) => number;
    /** Split domains — used for the reciprocal, which has a gap at x = 0 */
    domains: [number, number][];
    color: string;
}

const GRAPH_FAMILIES: GraphFamily[] = [
    {
        id: "linear",
        name: "Straight line",
        equationLatex: "y = 2x + 1",
        knobJob: "One number tilts the line, the other slides it up or down.",
        fn: (x) => 2 * x + 1,
        domains: [[-5, 5]],
        color: "#2563eb",
    },
    {
        id: "quadratic",
        name: "Quadratic",
        equationLatex: "y = x^2",
        knobJob: "The number in front sets how narrow the U is and which way up it opens.",
        fn: (x) => x * x,
        domains: [[-5, 5]],
        color: "#7c3aed",
    },
    {
        id: "cubic",
        name: "Cubic",
        equationLatex: "y = x^3",
        knobJob: "The number in front sets how sharply the S rises and which way round it runs.",
        fn: (x) => x * x * x,
        domains: [[-5, 5]],
        color: "#db2777",
    },
    {
        id: "exponential",
        name: "Exponential",
        equationLatex: "y = 2^x",
        knobJob: "The number being multiplied sets how fast the growth runs away.",
        fn: (x) => Math.pow(2, x),
        domains: [[-5, 5]],
        color: "#ea580c",
    },
    {
        id: "reciprocal",
        name: "Reciprocal",
        equationLatex: "y = \\frac{4}{x}",
        knobJob: "The number on top sets how far the two branches sit from the corner.",
        fn: (x) => 4 / x,
        domains: [
            [-5, -0.18],
            [0.18, 5],
        ],
        color: "#0d9488",
    },
];

// ── Thumbnail sketch ──────────────────────────────────────────────────────────

const THUMB_WIDTH = 132;
const THUMB_HEIGHT = 100;
const THUMB_PAD = 14;
const AXIS_RANGE = 4.2;

const toThumbX = (x: number) =>
    THUMB_PAD + ((x + AXIS_RANGE) / (2 * AXIS_RANGE)) * (THUMB_WIDTH - 2 * THUMB_PAD);

const toThumbY = (y: number) =>
    THUMB_HEIGHT - THUMB_PAD - ((y + AXIS_RANGE) / (2 * AXIS_RANGE)) * (THUMB_HEIGHT - 2 * THUMB_PAD);

/** Sample a function into polyline strings, breaking wherever it leaves the box */
const buildSketchPaths = (family: GraphFamily): string[] => {
    const paths: string[] = [];
    for (const [start, end] of family.domains) {
        let current: string[] = [];
        for (let x = start; x <= end + 1e-9; x += 0.06) {
            const y = family.fn(x);
            if (!Number.isFinite(y) || Math.abs(y) > AXIS_RANGE) {
                if (current.length > 1) paths.push(current.join(" "));
                current = [];
                continue;
            }
            current.push(`${toThumbX(x).toFixed(2)},${toThumbY(y).toFixed(2)}`);
        }
        if (current.length > 1) paths.push(current.join(" "));
    }
    return paths;
};

const FamilySketch = ({ family }: { family: GraphFamily }) => (
    <svg
        width="100%"
        height={THUMB_HEIGHT}
        viewBox={`0 0 ${THUMB_WIDTH} ${THUMB_HEIGHT}`}
        role="img"
        aria-label={`Sketch of ${family.name}`}
    >
        <rect
            x={THUMB_PAD - 6}
            y={THUMB_PAD - 6}
            width={THUMB_WIDTH - 2 * THUMB_PAD + 12}
            height={THUMB_HEIGHT - 2 * THUMB_PAD + 12}
            fill="#ffffff"
            stroke="#e2e8f0"
            rx={6}
        />
        <line
            x1={THUMB_PAD - 4}
            y1={toThumbY(0)}
            x2={THUMB_WIDTH - THUMB_PAD + 4}
            y2={toThumbY(0)}
            stroke="#cbd5e1"
            strokeWidth={1}
        />
        <line
            x1={toThumbX(0)}
            y1={THUMB_PAD - 4}
            x2={toThumbX(0)}
            y2={THUMB_HEIGHT - THUMB_PAD + 4}
            stroke="#cbd5e1"
            strokeWidth={1}
        />
        {buildSketchPaths(family).map((points, index) => (
            <polyline
                key={`${family.id}-sketch-${index}`}
                points={points}
                fill="none"
                stroke={family.color}
                strokeWidth={2.4}
                strokeLinecap="round"
            />
        ))}
    </svg>
);

// ── Gallery ───────────────────────────────────────────────────────────────────

export const GraphFamilyGallery = () => {
    const [selectedId, setSelectedId] = useState<string>(GRAPH_FAMILIES[0].id);
    const selected =
        GRAPH_FAMILIES.find((family) => family.id === selectedId) ?? GRAPH_FAMILIES[0];

    const plots: PlotItem[] = selected.domains.map((domain) => ({
        type: "function",
        fn: selected.fn,
        domain,
        color: selected.color,
        weight: 3,
    }));

    return (
        <div className="space-y-5">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {GRAPH_FAMILIES.map((family) => {
                    const isSelected = family.id === selected.id;
                    return (
                        <button
                            key={family.id}
                            type="button"
                            onClick={() => setSelectedId(family.id)}
                            className={`rounded-xl border-2 bg-slate-50 p-2 text-center transition-all hover:border-slate-400 ${
                                isSelected
                                    ? "border-slate-800 shadow-md"
                                    : "border-slate-200"
                            }`}
                        >
                            <FamilySketch family={family} />
                            <div className="mt-1 text-sm font-semibold text-slate-700">
                                {family.name}
                            </div>
                        </button>
                    );
                })}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="mb-2 flex flex-wrap items-baseline gap-3">
                    <span className="text-lg font-semibold text-slate-800">
                        {selected.name}
                    </span>
                    <InlineFormula latex={selected.equationLatex} />
                </div>
                <Cartesian2D
                    key={selected.id}
                    height={320}
                    viewBox={{ x: [-5, 5], y: [-5, 5] }}
                    plots={plots}
                />
                <div className="mt-3 text-sm text-slate-600">{selected.knobJob}</div>
            </div>
        </div>
    );
};
