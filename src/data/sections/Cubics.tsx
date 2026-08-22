import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { CubicExplorer } from "./shared/CubicExplorer";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

export const cubicsBlocks: ReactElement[] = [
    <StackLayout key="layout-cubics-heading" maxWidth="xl">
        <Block id="cubics-heading" padding="md">
            <EditableH2 id="h2-cubics-heading" blockId="cubics-heading">
                Cubics: The S-Shaped Curve
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-cubing-reminder" maxWidth="xl">
        <Block id="cubics-cubing-reminder" padding="sm">
            <EditableParagraph id="para-cubics-cubing-reminder" blockId="cubics-cubing-reminder">
                Now multiply <InlineFormula latex="x" /> by itself three times instead of twice. That
                is <InlineFormula latex="x^3" />. When <InlineFormula latex="x" /> is 2 you get 8,
                and here is the important difference: when <InlineFormula latex="x" /> is negative 2
                you get negative 8, not positive 8.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-why-s-shape" maxWidth="xl">
        <Block id="cubics-why-s-shape" padding="sm">
            <EditableParagraph id="para-cubics-why-s-shape" blockId="cubics-why-s-shape">
                That single fact changes the whole picture. Negative inputs now give negative
                outputs, so the left-hand side of the graph dives downwards instead of rising. The
                result is not a U at all — it is a stretched S that sweeps up from the bottom left,
                flattens as it passes through the middle, and keeps climbing to the top right.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-equation" maxWidth="xl">
        <Block id="cubics-equation" padding="lg">
            <FormulaBlock latex="y = ax^3" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-knob-role" maxWidth="xl">
        <Block id="cubics-knob-role" padding="sm">
            <EditableParagraph id="para-cubics-knob-role" blockId="cubics-knob-role">
                The knob is again the number in front. Making it larger squeezes the S so it rises
                and falls more sharply. Making it negative does something a quadratic never does: it
                turns the S back to front, so the curve now falls from top left down to bottom
                right.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-explorer-instruction" maxWidth="xl">
        <Block id="cubics-explorer-instruction" padding="sm">
            <EditableParagraph id="para-cubics-explorer-instruction" blockId="cubics-explorer-instruction">
                Drag the slider from one end to the other, watching the two ends of the S. Notice
                that they do not just move — they trade places.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-visual" maxWidth="xl">
        <Block id="cubics-visual" padding="sm" hasVisualization>
            <CubicExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-observation" maxWidth="xl">
        <Block id="cubics-observation" padding="sm">
            <EditableParagraph id="para-cubics-observation" blockId="cubics-observation">
                Compare this with the quadratic. There, a minus sign turned the U upside down. Here
                it turns the S back to front, so a curve that was climbing to the right is now
                diving. Same minus sign, and in both cases it is a genuine reversal — never a small
                adjustment you can safely ignore.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-heading" maxWidth="xl">
        <Block id="cubics-practice-heading" padding="md">
            <EditableH2 id="h2-cubics-practice-heading" blockId="cubics-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-sign-prompt" maxWidth="xl">
        <Block id="cubics-practice-sign-prompt" padding="sm">
            <EditableParagraph id="para-cubics-practice-sign-prompt" blockId="cubics-practice-sign-prompt">
                For <InlineFormula latex="y = x^3" />, what is <InlineFormula latex="y" /> when
                <InlineFormula latex="x" /> is negative 3?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-sign-answer" maxWidth="xl">
        <Block id="cubics-practice-sign-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="cubics-practice-sign"
                options={[
                    { id: "positive-twenty-seven", label: "27" },
                    { id: "negative-twenty-seven", label: "negative 27" },
                    { id: "negative-nine", label: "negative 9" },
                ]}
                correctOptionId="negative-twenty-seven"
                explanation="Three negatives multiplied together stay negative, which is exactly why the left-hand side of a cubic dives below the axis while a quadratic rises above it."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-direction-prompt" maxWidth="xl">
        <Block id="cubics-practice-direction-prompt" padding="sm">
            <EditableParagraph id="para-cubics-practice-direction-prompt" blockId="cubics-practice-direction-prompt">
                You need an S-shaped curve that starts high on the left and ends low on the right.
                Which equation gives it?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-direction-answer" maxWidth="xl">
        <Block id="cubics-practice-direction-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="cubics-practice-direction"
                options={[
                    { id: "rising-cubic", label: <InlineFormula latex="y = 2x^3" /> },
                    { id: "falling-cubic", label: <InlineFormula latex="y = -2x^3" /> },
                    { id: "falling-quadratic", label: <InlineFormula latex="y = -2x^2" /> },
                ]}
                correctOptionId="falling-cubic"
                explanation="The minus sign reverses the S so it runs downhill, and the cubed term is what gives it the S shape rather than an arch."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-compare-prompt" maxWidth="xl">
        <Block id="cubics-practice-compare-prompt" padding="sm">
            <EditableParagraph id="para-cubics-practice-compare-prompt" blockId="cubics-practice-compare-prompt">
                A curve passes through the point where <InlineFormula latex="x" /> is negative 2 and
                <InlineFormula latex="y" /> is negative 8. Which family does it belong to?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-cubics-practice-compare-answer" maxWidth="xl">
        <Block id="cubics-practice-compare-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="cubics-practice-compare"
                options={[
                    { id: "quadratic-family", label: <InlineFormula latex="y = x^2" /> },
                    { id: "cubic-family", label: <InlineFormula latex="y = x^3" /> },
                    { id: "either-family", label: "Either one would pass through it" },
                ]}
                correctOptionId="cubic-family"
                explanation="A squared term can never give a negative answer, so only the cubic can reach a negative y from a negative x."
            />
        </Block>
    </StackLayout>,
];
