import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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

    <StackLayout key="layout-quadratics-visual" maxWidth="xl">
        <Block id="quadratics-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="quadratics-visual"
                intro="Pick how students explore the number in front of the squared term."
                cards={[
                    {
                        id: "width-and-flip-slider",
                        title: "One slider that runs from negative to positive through zero",
                        looks: "A U-shaped curve on axes with a single slider underneath running from a negative value up to a positive one.",
                        manipulate: "Students drag the slider and watch the U narrow, widen, flatten right out at zero, and then open downwards.",
                        reveals: "The size of the number sets the width and the sign sets which way up it opens — two jobs from one number.",
                        targetsMisconception: "Ignore a minus sign in front, so miss that the graph flips",
                        recommended: true,
                    },
                    {
                        id: "stacked-curve-family",
                        title: "Several U-curves drawn on the same axes at once",
                        looks: "Three or four curves in different colours on one set of axes, each labelled with its own number in front.",
                        manipulate: "Students switch curves on and off to compare narrow ones against wide ones.",
                        reveals: "The whole family at a glance, so the pattern from small numbers to large ones is visible in one picture.",
                    },
                    {
                        id: "table-to-curve",
                        title: "A table of values that fills in as the curve is drawn",
                        looks: "A short table of x and y values beside a set of axes, with each row's point appearing on the graph.",
                        manipulate: "Students change the number in front and watch every y value in the table update along with the curve.",
                        reveals: "The curve is not magic — it comes straight from the numbers the equation produces.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
