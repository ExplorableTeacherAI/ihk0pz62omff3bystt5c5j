import { useState } from "react";
import {
    Cartesian2D,
    InlineFormula,
    Button,
    RadioGroup,
    RadioGroupItem,
    Label,
} from "@/components/atoms";
import type { PlotItem } from "@/components/atoms";

interface ChallengeRound {
    id: string;
    beforeLatex: string;
    afterLatex: string;
    beforeFn: (x: number) => number;
    afterFn: (x: number) => number;
    /** Split domains — used for the reciprocal, which has a gap at x = 0 */
    domains: [number, number][];
    viewBox: { x: [number, number]; y: [number, number] };
    options: { id: string; label: string }[];
    correctOptionId: string;
    explanation: string;
}

const ROUNDS: ChallengeRound[] = [
    {
        id: "linear-lift",
        beforeLatex: "y = 2x + 1",
        afterLatex: "y = 2x + 5",
        beforeFn: (x) => 2 * x + 1,
        afterFn: (x) => 2 * x + 5,
        domains: [[-6, 6]],
        viewBox: { x: [-6, 6], y: [-6, 8] },
        options: [
            { id: "made-steeper", label: "The line was made steeper" },
            { id: "lifted-up", label: "The whole line was slid upwards" },
            { id: "flipped-over", label: "The line was flipped over" },
        ],
        correctOptionId: "lifted-up",
        explanation:
            "The tilt is identical in both pictures — only the crossing point on the vertical axis has moved, so the starting number was changed.",
    },
    {
        id: "quadratic-narrow",
        beforeLatex: "y = x^2",
        afterLatex: "y = 3x^2",
        beforeFn: (x) => x * x,
        afterFn: (x) => 3 * x * x,
        domains: [[-4, 4]],
        viewBox: { x: [-4, 4], y: [-2, 12] },
        options: [
            { id: "number-in-front-bigger", label: "The number in front of the squared term was made bigger" },
            { id: "curve-moved-up", label: "The curve was slid upwards" },
            { id: "minus-added", label: "A minus sign was added" },
        ],
        correctOptionId: "number-in-front-bigger",
        explanation:
            "Both curves still sit on the same low point, but the second climbs away far faster, so the multiplier in front grew.",
    },
    {
        id: "cubic-flip",
        beforeLatex: "y = x^3",
        afterLatex: "y = -x^3",
        beforeFn: (x) => x * x * x,
        afterFn: (x) => -(x * x * x),
        domains: [[-3, 3]],
        viewBox: { x: [-3, 3], y: [-8, 8] },
        options: [
            { id: "made-flatter", label: "The number in front was made smaller" },
            { id: "shifted-sideways", label: "The curve was slid sideways" },
            { id: "minus-sign-added", label: "A minus sign was put in front" },
        ],
        correctOptionId: "minus-sign-added",
        explanation:
            "The S has not shrunk, it has reversed: the end that climbed now falls. Only a minus sign does that.",
    },
    {
        id: "reciprocal-grow",
        beforeLatex: "y = \\frac{2}{x}",
        afterLatex: "y = \\frac{6}{x}",
        beforeFn: (x) => 2 / x,
        afterFn: (x) => 6 / x,
        domains: [
            [-8, -0.15],
            [0.15, 8],
        ],
        viewBox: { x: [-8, 8], y: [-8, 8] },
        options: [
            { id: "top-number-bigger", label: "The number on top was made bigger" },
            { id: "branches-swapped", label: "The branches swapped corners" },
            { id: "extra-branch", label: "An extra branch was added" },
        ],
        correctOptionId: "top-number-bigger",
        explanation:
            "The branches stayed in the same two corners but moved further out, which is what a larger share does.",
    },
];

const buildPlots = (
    fn: (x: number) => number,
    domains: [number, number][],
    color: string,
): PlotItem[] =>
    domains.map((domain) => ({
        type: "function",
        fn,
        domain,
        color,
        weight: 3,
    }));

export const GuessTheKnobChallenge = () => {
    const [roundIndex, setRoundIndex] = useState(0);
    const [selected, setSelected] = useState("");
    const [checked, setChecked] = useState(false);
    const [score, setScore] = useState(0);

    const round = ROUNDS[roundIndex];
    const isCorrect = selected === round.correctOptionId;
    const isLastRound = roundIndex === ROUNDS.length - 1;

    const goToNextRound = () => {
        setRoundIndex((index) => (index + 1) % ROUNDS.length);
        setSelected("");
        setChecked(false);
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-600">
                <span className="font-semibold">
                    Challenge {roundIndex + 1} of {ROUNDS.length}
                </span>
                <span>Correct so far: {score}</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="mb-2 text-center text-sm font-semibold text-slate-500">
                        Before
                    </div>
                    <Cartesian2D
                        key={`${round.id}-before`}
                        height={230}
                        viewBox={round.viewBox}
                        plots={buildPlots(round.beforeFn, round.domains, "#94a3b8")}
                    />
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <div className="mb-2 text-center text-sm font-semibold text-slate-500">
                        After
                    </div>
                    <Cartesian2D
                        key={`${round.id}-after`}
                        height={230}
                        viewBox={round.viewBox}
                        plots={buildPlots(round.afterFn, round.domains, "#2563eb")}
                    />
                </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-sm font-semibold text-slate-700">
                    What change was made?
                </div>
                <RadioGroup
                    value={selected}
                    onValueChange={(value) => {
                        setSelected(value);
                        setChecked(false);
                    }}
                    className="mt-3 space-y-2"
                >
                    {round.options.map((option) => (
                        <div key={option.id} className="flex items-center gap-3">
                            <RadioGroupItem
                                value={option.id}
                                id={`${round.id}-${option.id}`}
                            />
                            <Label
                                htmlFor={`${round.id}-${option.id}`}
                                className="cursor-pointer text-base font-normal"
                            >
                                {option.label}
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <Button
                    disabled={selected === "" || checked}
                    onClick={() => {
                        setChecked(true);
                        if (selected === round.correctOptionId) {
                            setScore((current) => current + 1);
                        }
                    }}
                >
                    Check my answer
                </Button>
                {checked && (
                    <Button variant="outline" onClick={goToNextRound}>
                        {isLastRound ? "Start again" : "Next challenge"}
                    </Button>
                )}
            </div>

            {checked && (
                <div
                    className={`space-y-2 rounded-md border px-4 py-3 text-sm ${
                        isCorrect
                            ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                            : "border-amber-300 bg-amber-50 text-amber-900"
                    }`}
                >
                    <div>
                        <span className="font-semibold">
                            {isCorrect ? "Correct. " : "Not quite. "}
                        </span>
                        {round.explanation}
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        <span>
                            Before: <InlineFormula latex={round.beforeLatex} />
                        </span>
                        <span>
                            After: <InlineFormula latex={round.afterLatex} />
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
