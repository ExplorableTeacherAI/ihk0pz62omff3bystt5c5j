import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { StraightLineExplorer } from "./shared/StraightLineExplorer";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

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

    <StackLayout key="layout-straight-lines-explorer-instruction" maxWidth="xl">
        <Block id="straight-lines-explorer-instruction" padding="sm">
            <EditableParagraph id="para-straight-lines-explorer-instruction" blockId="straight-lines-explorer-instruction">
                Try this properly: move the first slider only, leaving the second one alone, and
                watch what the line does. Then put it back and move only the second slider. The two
                knobs behave nothing alike.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-visual" maxWidth="xl">
        <Block id="straight-lines-visual" padding="sm" hasVisualization>
            <StraightLineExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-observation" maxWidth="xl">
        <Block id="straight-lines-observation" padding="sm">
            <EditableParagraph id="para-straight-lines-observation" blockId="straight-lines-observation">
                Notice that raising the second slider to 5 does not make the line one bit steeper —
                it simply lifts the whole line, tilt unchanged. And drag the first slider below zero:
                the line stops climbing and starts falling. That minus sign completely reverses the
                story the graph tells.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-heading" maxWidth="xl">
        <Block id="straight-lines-practice-heading" padding="md">
            <EditableH2 id="h2-straight-lines-practice-heading" blockId="straight-lines-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-steeper-prompt" maxWidth="xl">
        <Block id="straight-lines-practice-steeper-prompt" padding="sm">
            <EditableParagraph id="para-straight-lines-practice-steeper-prompt" blockId="straight-lines-practice-steeper-prompt">
                Two servers pay coins over time: server A follows <InlineFormula latex="y = 3x + 8" /> and
                server B follows <InlineFormula latex="y = 6x + 2" />. Which line climbs more steeply?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-steeper-answer" maxWidth="xl">
        <Block id="straight-lines-practice-steeper-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="straight-lines-practice-steeper"
                options={[
                    { id: "server-a", label: "Server A, because 8 is the biggest number on show" },
                    { id: "server-b", label: "Server B, because 6 is the number multiplying x" },
                    { id: "same-steepness", label: "They climb at the same rate" },
                ]}
                correctOptionId="server-b"
                explanation="Only the number multiplying x sets the steepness, and 6 beats 3. The 8 in server A is just a head start, so A begins higher but B overtakes it."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-intercept-prompt" maxWidth="xl">
        <Block id="straight-lines-practice-intercept-prompt" padding="sm">
            <EditableParagraph id="para-straight-lines-practice-intercept-prompt" blockId="straight-lines-practice-intercept-prompt">
                A line is described by <InlineFormula latex="y = 4x - 3" />. Set the sliders above to
                match it, then say where this line crosses the vertical axis.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-intercept-answer" maxWidth="xl">
        <Block id="straight-lines-practice-intercept-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="straight-lines-practice-intercept"
                options={[
                    { id: "crosses-at-four", label: "At 4" },
                    { id: "crosses-at-negative-three", label: "At negative 3" },
                    { id: "crosses-at-zero", label: "At 0" },
                ]}
                correctOptionId="crosses-at-negative-three"
                explanation="The number added at the end is the crossing point, and here it is being subtracted, so the line cuts the vertical axis 3 units below zero."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-falling-prompt" maxWidth="xl">
        <Block id="straight-lines-practice-falling-prompt" padding="sm">
            <EditableParagraph id="para-straight-lines-practice-falling-prompt" blockId="straight-lines-practice-falling-prompt">
                You want a line that starts high and falls as you move right. Which equation gives
                you that?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-straight-lines-practice-falling-answer" maxWidth="xl">
        <Block id="straight-lines-practice-falling-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="straight-lines-practice-falling"
                options={[
                    { id: "rising-line", label: <InlineFormula latex="y = 2x + 5" /> },
                    { id: "falling-line", label: <InlineFormula latex="y = -2x + 5" /> },
                    { id: "flat-line", label: <InlineFormula latex="y = 5" /> },
                ]}
                correctOptionId="falling-line"
                explanation="The minus sign in front of the 2 makes the line fall, and the 5 sets how high it starts."
            />
        </Block>
    </StackLayout>,
];
