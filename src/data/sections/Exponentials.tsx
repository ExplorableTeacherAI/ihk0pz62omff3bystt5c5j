import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { ExponentialExplorer } from "./shared/ExponentialExplorer";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

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

    <StackLayout key="layout-exponentials-explorer-instruction" maxWidth="xl">
        <Block id="exponentials-explorer-instruction" padding="sm">
            <EditableParagraph id="para-exponentials-explorer-instruction" blockId="exponentials-explorer-instruction">
                Start at doubling, then nudge the slider up by the smallest amount it allows. Watch
                the day totals underneath the graph as you do it — a tiny change to the multiplier
                makes an enormous difference by day six.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-visual" maxWidth="xl">
        <Block id="exponentials-visual" padding="sm" hasVisualization>
            <ExponentialExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-observation" maxWidth="xl">
        <Block id="exponentials-observation" padding="sm">
            <EditableParagraph id="para-exponentials-observation" blockId="exponentials-observation">
                Look at the left-hand side of the curve too. It creeps along near the bottom, almost
                flat, giving no hint of what is coming. That slow start is exactly what makes
                exponential growth so easy to underestimate.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-heading" maxWidth="xl">
        <Block id="exponentials-practice-heading" padding="md">
            <EditableH2 id="h2-exponentials-practice-heading" blockId="exponentials-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-race-prompt" maxWidth="xl">
        <Block id="exponentials-practice-race-prompt" padding="sm">
            <EditableParagraph id="para-exponentials-practice-race-prompt" blockId="exponentials-practice-race-prompt">
                Two reward schemes run side by side: scheme A pays <InlineFormula latex="x^2" /> coins
                on day <InlineFormula latex="x" />, scheme B pays <InlineFormula latex="2^x" /> coins.
                Which scheme has paid more by day 20?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-race-answer" maxWidth="xl">
        <Block id="exponentials-practice-race-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="exponentials-practice-race"
                options={[
                    { id: "scheme-a-wins", label: "Scheme A, the squaring one" },
                    { id: "scheme-b-wins", label: "Scheme B, the doubling one" },
                    { id: "schemes-tie", label: "They pay the same, since both use a 2" },
                ]}
                correctOptionId="scheme-b-wins"
                explanation="By day 20 squaring reaches 400, while doubling has passed a million — the two look alike on paper but grow nothing alike."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-base-prompt" maxWidth="xl">
        <Block id="exponentials-practice-base-prompt" padding="sm">
            <EditableParagraph id="para-exponentials-practice-base-prompt" blockId="exponentials-practice-base-prompt">
                A reward triples every day and starts at 1 coin on day zero. Use the sliders and day
                totals above to work out the reward on day 4.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-base-answer" maxWidth="xl">
        <Block id="exponentials-practice-base-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="exponentials-practice-base"
                options={[
                    { id: "twelve-coins", label: "12 coins" },
                    { id: "eighty-one-coins", label: "81 coins" },
                    { id: "sixty-four-coins", label: "64 coins" },
                ]}
                correctOptionId="eighty-one-coins"
                explanation="Tripling four times means 3 times 3 times 3 times 3, which is 81 — not 3 multiplied by 4."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-shape-prompt" maxWidth="xl">
        <Block id="exponentials-practice-shape-prompt" padding="sm">
            <EditableParagraph id="para-exponentials-practice-shape-prompt" blockId="exponentials-practice-shape-prompt">
                What happens to an exponential curve as you follow it a long way to the left?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-exponentials-practice-shape-answer" maxWidth="xl">
        <Block id="exponentials-practice-shape-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="exponentials-practice-shape"
                options={[
                    { id: "goes-negative", label: "It drops below the axis into negative values" },
                    { id: "hugs-axis", label: "It flattens out and hugs the horizontal axis" },
                    { id: "turns-upward", label: "It turns and climbs again, like a U" },
                ]}
                correctOptionId="hugs-axis"
                explanation="Repeated multiplying makes the value ever smaller but never negative, so the curve presses down towards the axis without crossing it."
            />
        </Block>
    </StackLayout>,
];
