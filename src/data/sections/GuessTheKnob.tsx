import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula, Table } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

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

    <StackLayout key="layout-guess-knob-challenge-visual" maxWidth="xl">
        <Block id="guess-knob-challenge-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="guess-knob-challenge-visual"
                intro="Pick how students are challenged to work backwards from a shape to its equation."
                cards={[
                    {
                        id: "before-and-after-challenge",
                        title: "A before graph and an after graph, with students naming the change",
                        looks: "Two graphs side by side, faintly different, with a short list of possible changes underneath.",
                        manipulate: "Students choose which change was made and get told straight away whether they were right.",
                        reveals: "Whether students can read a shape change back to the number that caused it.",
                        recommended: true,
                    },
                    {
                        id: "match-equation-to-curve",
                        title: "A set of curves and a set of equations to pair up",
                        looks: "Four unlabelled curves and four equations listed beside them.",
                        manipulate: "Students match each equation to its curve and check all four at once.",
                        reveals: "Whether the differences between the five families have really stuck.",
                    },
                    {
                        id: "target-shape-puzzle",
                        title: "A target shape students have to hit using the sliders",
                        looks: "A faint target curve on the axes with a student-controlled curve on top of it.",
                        manipulate: "Students adjust the numbers until their curve lands on the target.",
                        reveals: "Whether students can steer a graph deliberately rather than by trial and error.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
