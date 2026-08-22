import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { ReciprocalExplorer } from "./shared/ReciprocalExplorer";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

export const reciprocalsBlocks: ReactElement[] = [
    <StackLayout key="layout-reciprocals-heading" maxWidth="xl">
        <Block id="reciprocals-heading" padding="md">
            <EditableH2 id="h2-reciprocals-heading" blockId="reciprocals-heading">
                Reciprocals: Sharing Something Out
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-scenario" maxWidth="xl">
        <Block id="reciprocals-scenario" padding="sm">
            <EditableParagraph id="para-reciprocals-scenario" blockId="reciprocals-scenario">
                A raid boss drops 24 rare items and the squad splits them equally. With 2 players
                everyone gets 12. With 4 players, 6 each. With 12 players, 2 each. The more people
                join, the smaller each share gets — but the share never quite reaches zero.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-equation" maxWidth="xl">
        <Block id="reciprocals-equation" padding="lg">
            <FormulaBlock latex="y = \frac{k}{x}" />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-knob-role" maxWidth="xl">
        <Block id="reciprocals-knob-role" padding="sm">
            <EditableParagraph id="para-reciprocals-knob-role" blockId="reciprocals-knob-role">
                The knob is <InlineFormula latex="k" />, the number on top — the size of the drop
                being shared out. A bigger <InlineFormula latex="k" /> pushes the curve further away
                from the corner, because every squad size now gets a larger share. A negative
                <InlineFormula latex="k" /> throws the curve into the opposite corners of the grid.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-two-branches" maxWidth="xl">
        <Block id="reciprocals-two-branches" padding="sm">
            <EditableParagraph id="para-reciprocals-two-branches" blockId="reciprocals-two-branches">
                This graph also has a feature none of the others have: it comes in two separate
                pieces, and it gets closer and closer to the axes without ever touching them. There
                is a gap at <InlineFormula latex="x = 0" />, because sharing a drop between zero
                players is not a question with an answer.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-explorer-instruction" maxWidth="xl">
        <Block id="reciprocals-explorer-instruction" padding="sm">
            <EditableParagraph id="para-reciprocals-explorer-instruction" blockId="reciprocals-explorer-instruction">
                Slide the number of items in the drop up and down, and keep an eye on the squad
                shares listed underneath the graph. Then push the slider below zero and watch where
                the two branches go.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-visual" maxWidth="xl">
        <Block id="reciprocals-visual" padding="sm" hasVisualization>
            <ReciprocalExplorer />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-observation" maxWidth="xl">
        <Block id="reciprocals-observation" padding="sm">
            <EditableParagraph id="para-reciprocals-observation" blockId="reciprocals-observation">
                A bigger drop pushes both branches further out from the corner, because every squad
                size now walks away with more. Turn the number negative and the branches do not
                simply shrink — they leap across into the opposite pair of corners, which is the
                same flip you saw with the U and the S.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-heading" maxWidth="xl">
        <Block id="reciprocals-practice-heading" padding="md">
            <EditableH2 id="h2-reciprocals-practice-heading" blockId="reciprocals-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-share-prompt" maxWidth="xl">
        <Block id="reciprocals-practice-share-prompt" padding="sm">
            <EditableParagraph id="para-reciprocals-practice-share-prompt" blockId="reciprocals-practice-share-prompt">
                A drop of 6 items is split between a squad of 4. Using
                <InlineFormula latex="y = \frac{6}{x}" />, how much does each player get?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-share-answer" maxWidth="xl">
        <Block id="reciprocals-practice-share-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="reciprocals-practice-share"
                options={[
                    { id: "share-one-point-five", label: "1.5 items each" },
                    { id: "share-two", label: "2 items each" },
                    { id: "share-twenty-four", label: "24 items each" },
                ]}
                correctOptionId="share-one-point-five"
                explanation="Sharing means dividing: 6 split between 4 gives 1.5 each, and the curve is simply every one of these answers plotted."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-flip-prompt" maxWidth="xl">
        <Block id="reciprocals-practice-flip-prompt" padding="sm">
            <EditableParagraph id="para-reciprocals-practice-flip-prompt" blockId="reciprocals-practice-flip-prompt">
                Compare <InlineFormula latex="y = \frac{5}{x}" /> with <InlineFormula latex="y = \frac{-5}{x}" />.
                What is the difference between their graphs?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-flip-answer" maxWidth="xl">
        <Block id="reciprocals-practice-flip-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="reciprocals-practice-flip"
                options={[
                    { id: "same-graph", label: "There is no difference worth noticing" },
                    { id: "opposite-corners", label: "The branches sit in the opposite pair of corners" },
                    { id: "closer-to-corner", label: "The second one sits closer to the corner" },
                ]}
                correctOptionId="opposite-corners"
                explanation="The minus sign makes every answer negative, so each branch lands in the corner diagonally opposite the one it was in."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-asymptote-prompt" maxWidth="xl">
        <Block id="reciprocals-practice-asymptote-prompt" padding="sm">
            <EditableParagraph id="para-reciprocals-practice-asymptote-prompt" blockId="reciprocals-practice-asymptote-prompt">
                As the squad gets larger and larger, what happens to each player's share?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-reciprocals-practice-asymptote-answer" maxWidth="xl">
        <Block id="reciprocals-practice-asymptote-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="reciprocals-practice-asymptote"
                options={[
                    { id: "reaches-zero", label: "It reaches exactly zero once the squad is big enough" },
                    { id: "approaches-zero", label: "It keeps shrinking towards zero without ever getting there" },
                    { id: "turns-negative", label: "It becomes negative" },
                ]}
                correctOptionId="approaches-zero"
                explanation="There is always something left to divide, however many players join, so the curve slides closer and closer to the axis without ever touching it."
            />
        </Block>
    </StackLayout>,
];
