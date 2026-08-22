import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { QuadraticExplorer } from "./shared/QuadraticExplorer";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

export const quadraticsBlocks: ReactElement[] = [
    <StackLayout key="layout-quadratics-heading" maxWidth="xl">
        <Block id="quadratics-heading" padding="md">
            <EditableH2 id="h2-quadratics-heading" blockId="quadratics-heading">
                Quadratics: The U-Shaped Curve
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-squaring-reminder" maxWidth="xl">
        <Block id="quadratics-squaring-reminder" padding="sm">
            <EditableParagraph id="para-quadratics-squaring-reminder" blockId="quadratics-squaring-reminder">
                A small piece of notation first. <InlineFormula latex="x^2" /> just means
                <InlineFormula latex="x" /> multiplied by itself. So when
                <InlineFormula latex="x" /> is 3, <InlineFormula latex="x^2" /> is 9, and when
                <InlineFormula latex="x" /> is negative 3, <InlineFormula latex="x^2" /> is 9 again,
                because a negative times a negative gives a positive.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-why-u-shape" maxWidth="xl">
        <Block id="quadratics-why-u-shape" padding="sm">
            <EditableParagraph id="para-quadratics-why-u-shape" blockId="quadratics-why-u-shape">
                That is exactly why the graph is a U shape. Going left from zero and going right
                from zero both give you positive answers, so the curve comes down to a low point at
                the middle and rises on both sides — like the arc of a ball thrown up and caught
                again, but upside down.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-equation" maxWidth="xl">
        <Block id="quadratics-equation" padding="lg">
            <FormulaBlock latex="y = ax^2" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-knob-role" maxWidth="xl">
        <Block id="quadratics-knob-role" padding="sm">
            <EditableParagraph id="para-quadratics-knob-role" blockId="quadratics-knob-role">
                The knob here is <InlineFormula latex="a" />, the number sitting in front. It has two
                separate effects worth keeping apart: how big it is controls how narrow or wide the
                U is, and whether it is positive or negative controls which way up the U sits.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-explorer-instruction" maxWidth="xl">
        <Block id="quadratics-explorer-instruction" padding="sm">
            <EditableParagraph id="para-quadratics-explorer-instruction" blockId="quadratics-explorer-instruction">
                Drag the slider below slowly, all the way from one end to the other. Pause when the
                number reaches zero, then keep going into the negatives and see what the curve does.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-visual" maxWidth="xl">
        <Block id="quadratics-visual" padding="sm" hasVisualization>
            <QuadraticExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-observation" maxWidth="xl">
        <Block id="quadratics-observation" padding="sm">
            <EditableParagraph id="para-quadratics-observation" blockId="quadratics-observation">
                Two things to take away. A bigger number squeezes the U inwards, so the curve climbs
                faster — that part matches your instinct. But the moment the number goes negative,
                the curve does not shrink or slide; it turns over completely. The low point becomes
                a high point.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-heading" maxWidth="xl">
        <Block id="quadratics-practice-heading" padding="md">
            <EditableH2 id="h2-quadratics-practice-heading" blockId="quadratics-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-flip-prompt" maxWidth="xl">
        <Block id="quadratics-practice-flip-prompt" padding="sm">
            <EditableParagraph id="para-quadratics-practice-flip-prompt" blockId="quadratics-practice-flip-prompt">
                A game designer wants an arch shape for a jump: high in the middle, dropping away on
                both sides. Which equation gives that shape?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-flip-answer" maxWidth="xl">
        <Block id="quadratics-practice-flip-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="quadratics-practice-flip"
                options={[
                    { id: "upward-narrow", label: <InlineFormula latex="y = 2x^2" /> },
                    { id: "downward-arch", label: <InlineFormula latex="y = -2x^2" /> },
                    { id: "wide-upward", label: <InlineFormula latex="y = 0.5x^2" /> },
                ]}
                correctOptionId="downward-arch"
                explanation="Only the negative number turns the U upside down, giving a high point in the middle instead of a low one."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-width-prompt" maxWidth="xl">
        <Block id="quadratics-practice-width-prompt" padding="sm">
            <EditableParagraph id="para-quadratics-practice-width-prompt" blockId="quadratics-practice-width-prompt">
                Compare <InlineFormula latex="y = 3x^2" /> with <InlineFormula latex="y = 0.25x^2" />.
                Which one gives the narrower U?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-width-answer" maxWidth="xl">
        <Block id="quadratics-practice-width-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="quadratics-practice-width"
                options={[
                    { id: "three-narrower", label: <InlineFormula latex="y = 3x^2" /> },
                    { id: "quarter-narrower", label: <InlineFormula latex="y = 0.25x^2" /> },
                    { id: "identical-width", label: "They are the same width" },
                ]}
                correctOptionId="three-narrower"
                explanation="Multiplying by 3 lifts every point three times higher, so the curve rises away from the middle much faster and looks pinched in."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-value-prompt" maxWidth="xl">
        <Block id="quadratics-practice-value-prompt" padding="sm">
            <EditableParagraph id="para-quadratics-practice-value-prompt" blockId="quadratics-practice-value-prompt">
                For the curve <InlineFormula latex="y = -3x^2" />, what is the value of
                <InlineFormula latex="y" /> when <InlineFormula latex="x" /> is negative 2?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-quadratics-practice-value-answer" maxWidth="xl">
        <Block id="quadratics-practice-value-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="quadratics-practice-value"
                options={[
                    { id: "positive-twelve", label: "12" },
                    { id: "negative-twelve", label: "negative 12" },
                    { id: "positive-thirty-six", label: "36" },
                ]}
                correctOptionId="negative-twelve"
                explanation="Squaring negative 2 gives positive 4, and the minus in front then makes it negative 12 — which is why this curve sits below the axis."
            />
        </Block>
    </StackLayout>,
];
