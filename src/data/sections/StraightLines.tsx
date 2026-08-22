import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

export const straightLinesBlocks: ReactElement[] = [
    <StackLayout key="layout-straight-lines-heading" maxWidth="xl">
        <Block id="straight-lines-heading" padding="md">
            <EditableH2 id="h2-straight-lines-heading" blockId="straight-lines-heading">
                Straight Lines: Two Knobs, Two Different Jobs
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-scenario" maxWidth="xl">
        <Block id="straight-lines-scenario" padding="sm">
            <EditableParagraph id="para-straight-lines-scenario" blockId="straight-lines-scenario">
                Imagine a Roblox game that pays you coins for every minute you play. You start with
                some coins already in your account, and you earn a fixed number of coins each
                minute. Plot your coin total against time and you get a straight line.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-equation" maxWidth="xl">
        <Block id="straight-lines-equation" padding="lg">
            <FormulaBlock latex="y = mx + c" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-two-roles" maxWidth="xl">
        <Block id="straight-lines-two-roles" padding="sm">
            <EditableParagraph id="para-straight-lines-two-roles" blockId="straight-lines-two-roles">
                There are two numbers here and they do completely different jobs.
                The <InlineFormula latex="m" /> is coins earned per minute — it sets how steeply the
                line climbs. The <InlineFormula latex="c" /> is the coins you already had — it sets
                where the line starts on the vertical axis.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-visual" maxWidth="xl">
        <Block id="straight-lines-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="straight-lines-visual"
                intro="Pick how students explore the difference between the gradient and the intercept."
                cards={[
                    {
                        id: "two-separate-sliders",
                        title: "Two labelled sliders, one for steepness and one for the start value",
                        looks: "A straight line on axes with two clearly separated sliders below it, each labelled with the job it does.",
                        manipulate: "Students move one slider with the other held still, then swap, and watch which one tilts the line and which one only slides it up or down.",
                        reveals: "A bigger number does not automatically mean steeper — it depends on which knob you turned.",
                        targetsMisconception: "Think a bigger number always makes a graph steeper, whatever its role",
                        recommended: true,
                    },
                    {
                        id: "ghost-line-comparison",
                        title: "The original line stays on screen as a faint ghost while the new one moves",
                        looks: "One faded grey line marking the starting equation, and one bright line that follows the sliders.",
                        manipulate: "Students change a number and immediately compare the bright line against the faded original.",
                        reveals: "Exactly what changed and what stayed the same, since the before-picture never disappears.",
                    },
                    {
                        id: "negative-gradient-flip",
                        title: "A steepness slider that can be dragged through zero into negative numbers",
                        looks: "A single line on axes with a slider that runs from a clearly negative value, through zero, up to a positive one.",
                        manipulate: "Students drag past zero and watch the line swing from climbing to flat to falling.",
                        reveals: "A minus sign flips the direction of the line — it is not just a slightly smaller number.",
                        targetsMisconception: "Ignore a minus sign in front, so miss that the graph flips",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
