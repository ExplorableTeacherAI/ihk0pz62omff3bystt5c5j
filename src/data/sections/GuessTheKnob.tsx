import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula, Table } from "@/components/atoms";
import { GuessTheKnobChallenge } from "./shared/GuessTheKnobChallenge";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

export const guessTheKnobBlocks: ReactElement[] = [
    <StackLayout key="layout-guess-knob-heading" maxWidth="xl">
        <Block id="guess-knob-heading" padding="md">
            <EditableH2 id="h2-guess-knob-heading" blockId="guess-knob-heading">
                Guess the Knob
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-recap" maxWidth="xl">
        <Block id="guess-knob-recap" padding="sm">
            <EditableParagraph id="para-guess-knob-recap" blockId="guess-knob-recap">
                Five families, five knobs. In every single case the same two questions did the work:
                how big is the number, and is it positive or negative?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-summary-table" maxWidth="xl">
        <Block id="guess-knob-summary-table" padding="sm">
            <Table
                columns={[
                    { header: "Family", align: "left" },
                    { header: "Equation", align: "center", width: 140 },
                    { header: "What the knob does" },
                ]}
                rows={[
                    {
                        cells: [
                            "Straight line",
                            <InlineFormula key="formula-summary-linear" latex="y = mx + c" />,
                            "One number tilts the line, the other slides it up or down",
                        ],
                    },
                    {
                        cells: [
                            "Quadratic",
                            <InlineFormula key="formula-summary-quadratic" latex="y = ax^2" />,
                            "Sets how narrow the U is, and which way up it opens",
                        ],
                    },
                    {
                        cells: [
                            "Cubic",
                            <InlineFormula key="formula-summary-cubic" latex="y = ax^3" />,
                            "Sets how sharply the S rises, and which way round it runs",
                        ],
                    },
                    {
                        cells: [
                            "Exponential",
                            <InlineFormula key="formula-summary-exponential" latex="y = b^x" />,
                            "Sets what you multiply by each step, so how fast it runs away",
                        ],
                    },
                    {
                        cells: [
                            "Reciprocal",
                            <InlineFormula key="formula-summary-reciprocal" latex="y = \frac{k}{x}" />,
                            "Sets how far the two branches sit from the corner, and which corners",
                        ],
                    },
                ]}
                color="#6366f1"
                caption="The five families and the job of each knob"
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-challenge-intro" maxWidth="xl">
        <Block id="guess-knob-challenge-intro" padding="sm">
            <EditableParagraph id="para-guess-knob-challenge-intro" blockId="guess-knob-challenge-intro">
                Time to work backwards. Instead of turning a knob and seeing what happens, you will
                be shown what happened and asked which knob was turned.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-challenge-instruction" maxWidth="xl">
        <Block id="guess-knob-challenge-instruction" padding="sm">
            <EditableParagraph id="para-guess-knob-challenge-instruction" blockId="guess-knob-challenge-instruction">
                Each round below shows the same graph before and after someone turned one of its
                knobs. Look carefully at what stayed the same as well as what moved, then choose the
                change that was made. The equations are revealed once you have answered.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-challenge-visual" maxWidth="xl">
        <Block id="guess-knob-challenge-visual" padding="sm" hasVisualization>
            <GuessTheKnobChallenge />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-practice-heading" maxWidth="xl">
        <Block id="guess-knob-practice-heading" padding="md">
            <EditableH2 id="h2-guess-knob-practice-heading" blockId="guess-knob-practice-heading">
                Two last questions
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-practice-choose-prompt" maxWidth="xl">
        <Block id="guess-knob-practice-choose-prompt" padding="sm">
            <EditableParagraph id="para-guess-knob-practice-choose-prompt" blockId="guess-knob-practice-choose-prompt">
                You have the curve <InlineFormula latex="y = 2x^2" /> and you want it to keep exactly
                the same width but open downwards instead. What do you change?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-practice-choose-answer" maxWidth="xl">
        <Block id="guess-knob-practice-choose-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="guess-knob-practice-choose"
                options={[
                    { id: "change-to-negative-two", label: <InlineFormula latex="y = -2x^2" /> },
                    { id: "change-to-half", label: <InlineFormula latex="y = 0.5x^2" /> },
                    { id: "change-to-cubed", label: <InlineFormula latex="y = 2x^3" /> },
                ]}
                correctOptionId="change-to-negative-two"
                explanation="Keeping the 2 keeps the width, and adding the minus sign turns the curve over — one knob, one job."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-practice-family-prompt" maxWidth="xl">
        <Block id="guess-knob-practice-family-prompt" padding="sm">
            <EditableParagraph id="para-guess-knob-practice-family-prompt" blockId="guess-knob-practice-family-prompt">
                A graph starts almost flat near the bottom, then rises so sharply it leaves the top
                of the screen, and it never dips below the horizontal axis. Which family is it?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-guess-knob-practice-family-answer" maxWidth="xl">
        <Block id="guess-knob-practice-family-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="guess-knob-practice-family"
                options={[
                    { id: "family-cubic", label: "A cubic" },
                    { id: "family-exponential", label: "An exponential" },
                    { id: "family-reciprocal", label: "A reciprocal" },
                ]}
                correctOptionId="family-exponential"
                explanation="A cubic dives below the axis on its left-hand side and a reciprocal comes in two pieces, so only the exponential creeps along the bottom and then takes off."
            />
        </Block>
    </StackLayout>,
];
