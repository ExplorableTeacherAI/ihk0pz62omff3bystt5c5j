import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

export const exponentialsBlocks: ReactElement[] = [
    <StackLayout key="layout-exponentials-heading" maxWidth="xl">
        <Block id="exponentials-heading" padding="md">
            <EditableH2 id="h2-exponentials-heading" blockId="exponentials-heading">
                Exponentials: Growth That Runs Away
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-scenario" maxWidth="xl">
        <Block id="exponentials-scenario" padding="sm">
            <EditableParagraph id="para-exponentials-scenario" blockId="exponentials-scenario">
                A Roblox event offers a daily login reward that doubles every day: 1 coin, then 2,
                then 4, then 8, then 16. Nothing is being added on — the total is being multiplied
                each day. That is a different kind of growth from anything so far.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-equation" maxWidth="xl">
        <Block id="exponentials-equation" padding="lg">
            <FormulaBlock latex="y = b^x" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-knob-role" maxWidth="xl">
        <Block id="exponentials-knob-role" padding="sm">
            <EditableParagraph id="para-exponentials-knob-role" blockId="exponentials-knob-role">
                Notice where <InlineFormula latex="x" /> has moved. In every graph so far,
                <InlineFormula latex="x" /> was the thing being multiplied. Here it is the number of
                times you multiply. The knob <InlineFormula latex="b" /> is what gets multiplied each
                step: 2 for doubling, 3 for tripling.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-not-quadratic" maxWidth="xl">
        <Block id="exponentials-not-quadratic" padding="sm">
            <EditableParagraph id="para-exponentials-not-quadratic" blockId="exponentials-not-quadratic">
                This is worth pausing on, because <InlineFormula latex="x^2" /> and
                <InlineFormula latex="2^x" /> look similar on the page and behave nothing alike. At
                <InlineFormula latex="x = 10" /> the first gives 100. The second gives 1024. Push a
                little further and the gap becomes enormous.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-visual" maxWidth="xl">
        <Block id="exponentials-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="exponentials-visual"
                intro="Pick how students explore exponential growth and the number that drives it."
                cards={[
                    {
                        id: "growth-base-slider",
                        title: "A rising curve with a slider for the multiplying number",
                        looks: "A curve that hugs the bottom then shoots upwards, with a slider labelled as the daily multiplier.",
                        manipulate: "Students slide from doubling to tripling and back, and watch how much sooner the curve takes off.",
                        reveals: "A small change to the multiplier makes a huge difference to how fast the total runs away.",
                        recommended: true,
                    },
                    {
                        id: "race-against-quadratic",
                        title: "A doubling curve racing a squaring curve on the same axes",
                        looks: "Two curves on one set of axes, one for squaring and one for doubling, with the crossing point marked.",
                        manipulate: "Students extend the axes further to the right and watch the doubling curve overtake and leave the other behind.",
                        reveals: "Squaring growth and doubling growth are genuinely different, even though the squaring curve leads at first.",
                        targetsMisconception: "Confuse squaring growth with exponential growth",
                    },
                    {
                        id: "daily-reward-bars",
                        title: "A bar chart of the daily coin reward growing day by day",
                        looks: "A row of bars, one per day, each taller than the last, with the coin total written on top.",
                        manipulate: "Students add more days one at a time and change the multiplier.",
                        reveals: "How quickly the bars run off the top of the chart once multiplying takes hold.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
