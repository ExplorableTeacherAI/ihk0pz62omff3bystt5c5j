import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { VisualOptionCards } from "@/components/organisms";

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

    <StackLayout key="layout-cubics-visual" maxWidth="xl">
        <Block id="cubics-visual" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="cubics-visual"
                intro="Pick how students explore the S-shaped cubic curve."
                cards={[
                    {
                        id: "cubic-slider-through-zero",
                        title: "An S-curve with one slider that crosses from negative to positive",
                        looks: "A single S-shaped curve on axes with a slider underneath that passes through zero.",
                        manipulate: "Students drag the slider and watch the S steepen, flatten to a straight horizontal line at zero, then reverse direction.",
                        reveals: "A negative number turns the S back to front rather than simply shrinking it.",
                        targetsMisconception: "Ignore a minus sign in front, so miss that the graph flips",
                        recommended: true,
                    },
                    {
                        id: "cubic-versus-quadratic",
                        title: "A cubic and a quadratic drawn side by side on matching axes",
                        looks: "Two graphs next to each other, a U on the left and an S on the right, sharing the same scale.",
                        manipulate: "Students change the number in front of both at the same time and compare how each reacts.",
                        reveals: "Why the left half behaves so differently in the two families, even though the knob does a similar job.",
                    },
                    {
                        id: "cubic-sign-table",
                        title: "A table showing what cubing does to negative and positive inputs",
                        looks: "A table of x values from negative to positive with the cubed answers beside them, and the matching point lighting up on the curve.",
                        manipulate: "Students step through the rows and watch each point appear in place on the graph.",
                        reveals: "The S shape traced directly back to negative inputs giving negative answers.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,
];
