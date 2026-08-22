import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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

    <StackLayout key="layout-reciprocals-visual" maxWidth="xl">
        <Block id="reciprocals-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="reciprocals-visual"
                intro="Pick how students explore the reciprocal curve and its top number."
                cards={[
                    {
                        id: "share-size-slider",
                        title: "A two-branch curve with a slider for the number being shared",
                        looks: "Two curved branches in opposite corners of the axes, with a slider labelled as the size of the drop.",
                        manipulate: "Students slide the top number up and down, including into negative values, and watch the branches move outwards and swap corners.",
                        reveals: "The top number sets how far the curve sits from the corner, and its sign decides which corners it uses.",
                        targetsMisconception: "Ignore a minus sign in front, so miss that the graph flips",
                        recommended: true,
                    },
                    {
                        id: "squad-share-table",
                        title: "A squad-size table feeding points onto the curve",
                        looks: "A table of squad sizes and the items each player receives, with each row plotted as a point on the axes.",
                        manipulate: "Students change the total number of items dropped and watch every share and every point update.",
                        reveals: "Why the points bend into a curve rather than falling on a straight line.",
                    },
                    {
                        id: "asymptote-zoom",
                        title: "A curve you can zoom in on near the axes",
                        looks: "One branch of the curve shown close up where it runs alongside the horizontal axis.",
                        manipulate: "Students zoom further and further in on the point where the curve seems to meet the axis.",
                        reveals: "However far you zoom, the curve never actually touches the axis.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
