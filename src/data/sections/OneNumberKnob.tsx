import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH1, EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { VisualOptionCards } from "@/components/organisms";

export const oneNumberKnobBlocks: ReactElement[] = [
    <StackLayout key="layout-knob-lesson-title" maxWidth="xl">
        <Block id="knob-lesson-title" padding="md">
            <EditableH1 id="h1-knob-lesson-title" blockId="knob-lesson-title">
                Turning the Knobs: How One Number Changes a Graph
            </EditableH1>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-lesson-opening" maxWidth="xl">
        <Block id="knob-lesson-opening" padding="sm">
            <EditableParagraph id="para-knob-lesson-opening" blockId="knob-lesson-opening">
                In a game, a character sheet is full of numbers. Change the Speed stat and your
                character moves differently. Change the Attack stat and something completely
                different happens. You do not rebuild the character — you turn one number and watch
                what it does.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-equations-have-stats" maxWidth="xl">
        <Block id="knob-equations-have-stats" padding="sm">
            <EditableParagraph id="para-knob-equations-have-stats" blockId="knob-equations-have-stats">
                Equations work the same way. An equation like <InlineFormula latex="y = 2x + 1" /> has
                its own stats: the <InlineFormula latex="2" /> and the <InlineFormula latex="1" />.
                Each one controls a different part of the picture you get when you plot it.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-central-question" maxWidth="xl">
        <Block id="knob-central-question" padding="sm">
            <EditableParagraph id="para-knob-central-question" blockId="knob-central-question">
                So the question to keep asking through this whole lesson is simple: this number
                right here — what is its job? Does it tilt the graph, stretch it, slide it up, or
                turn it upside down?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-first-look" maxWidth="xl">
        <Block id="knob-first-look" padding="sm" hasVisualization>
            <VisualOptionCards
                blockId="knob-first-look"
                intro="Pick how students meet the big idea that one number controls the shape."
                cards={[
                    {
                        id: "single-knob-preview",
                        title: "One slider, one equation, and the curve reshaping live",
                        looks: "A single equation shown above a set of axes, with one of its numbers highlighted, and a slider underneath.",
                        manipulate: "Students drag the slider and watch that one highlighted number change while the curve redraws.",
                        reveals: "Changing one number is enough to change the whole shape — nothing else about the equation moved.",
                        recommended: true,
                    },
                    {
                        id: "stat-sheet-comparison",
                        title: "A game-style stat card sitting next to the graph it produces",
                        looks: "A character card listing two numbers, and beside it the graph those numbers create.",
                        manipulate: "Students change one stat on the card at a time and compare the before and after graphs side by side.",
                        reveals: "Different stats do different jobs — one tilts the line, the other lifts it.",
                    },
                    {
                        id: "family-gallery",
                        title: "A gallery of the five graph types students will meet",
                        looks: "Five small graphs in a row: a straight line, a U-curve, an S-curve, a fast-rising curve and a two-branch curve.",
                        manipulate: "Students click any one to see its equation and a one-line description of its knob.",
                        reveals: "A preview map of the whole lesson, so students know which families are coming.",
                    },
                ]}
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-warning-heading" maxWidth="xl">
        <Block id="knob-warning-heading" padding="sm">
            <EditableH2 id="h2-knob-warning-heading" blockId="knob-warning-heading">
                Two traps to watch for
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-trap-bigger-steeper" maxWidth="xl">
        <Block id="knob-trap-bigger-steeper" padding="sm">
            <EditableParagraph id="para-knob-trap-bigger-steeper" blockId="knob-trap-bigger-steeper">
                Trap one: assuming a bigger number always makes a graph steeper. It depends
                entirely on where that number sits in the equation. In one position it does make the
                graph steeper; in another it just slides the whole graph upwards without changing
                the steepness at all.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-trap-minus-sign" maxWidth="xl">
        <Block id="knob-trap-minus-sign" padding="sm">
            <EditableParagraph id="para-knob-trap-minus-sign" blockId="knob-trap-minus-sign">
                Trap two: skipping over a minus sign. A minus sign is not a small detail — it flips
                the graph over. <InlineFormula latex="y = 3x" /> and <InlineFormula latex="y = -3x" /> are
                not almost the same graph; they are mirror images of each other.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
