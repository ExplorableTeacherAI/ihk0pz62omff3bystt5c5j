import { useState, type ReactNode } from "react";
import { Button, RadioGroup, RadioGroupItem, Label } from "@/components/atoms";

export interface MultipleChoiceOption {
    id: string;
    label: ReactNode;
}

export interface MultipleChoiceQuestionProps {
    /** Unique name for this question — used to keep radio inputs separate */
    questionName: string;
    options: MultipleChoiceOption[];
    correctOptionId: string;
    /** One sentence shown after checking, explaining why the answer is right */
    explanation: string;
}

/**
 * A single multiple-choice practice question: radio options, a check button,
 * and a right/wrong result with a one-sentence explanation.
 * The question wording itself lives in its own EditableParagraph block.
 */
export const MultipleChoiceQuestion = ({
    questionName,
    options,
    correctOptionId,
    explanation,
}: MultipleChoiceQuestionProps) => {
    const [selected, setSelected] = useState<string>("");
    const [checked, setChecked] = useState(false);

    const isCorrect = selected === correctOptionId;

    return (
        <div className="space-y-4">
            <RadioGroup
                value={selected}
                onValueChange={(value) => {
                    setSelected(value);
                    setChecked(false);
                }}
                className="space-y-2"
            >
                {options.map((option) => (
                    <div key={option.id} className="flex items-center gap-3">
                        <RadioGroupItem
                            value={option.id}
                            id={`${questionName}-${option.id}`}
                        />
                        <Label
                            htmlFor={`${questionName}-${option.id}`}
                            className="cursor-pointer text-base font-normal"
                        >
                            {option.label}
                        </Label>
                    </div>
                ))}
            </RadioGroup>

            <div className="flex items-center gap-3">
                <Button
                    onClick={() => setChecked(true)}
                    disabled={selected === ""}
                    variant="default"
                >
                    Check my answer
                </Button>
            </div>

            {checked && (
                <div
                    className={`rounded-md border px-4 py-3 text-sm ${
                        isCorrect
                            ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                            : "border-amber-300 bg-amber-50 text-amber-900"
                    }`}
                >
                    <span className="font-semibold">
                        {isCorrect ? "Correct. " : "Not quite. "}
                    </span>
                    {explanation}
                </div>
            )}
        </div>
    );
};
