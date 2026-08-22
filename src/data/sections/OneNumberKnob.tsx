import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import { EditableH1, EditableH2, EditableParagraph, InlineFormula } from "@/components/atoms";
import { GraphFamilyGallery } from "./shared/GraphFamilyGallery";
import { MultipleChoiceQuestion } from "./shared/MultipleChoiceQuestion";

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

    <StackLayout key="layout-knob-gallery-instruction" maxWidth="xl">
        <Block id="knob-gallery-instruction" padding="sm">
            <EditableParagraph id="para-knob-gallery-instruction" blockId="knob-gallery-instruction">
                Here are the five graph families you will meet. Click any one of the five sketches
                below to see it full size, along with its equation and the job its knob does. You are
                not expected to understand them yet — this is a map of where the lesson is going.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-first-look" maxWidth="xl">
        <Block id="knob-first-look" padding="sm" hasVisualization>
            <GraphFamilyGallery />
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

    <StackLayout key="layout-knob-practice-heading" maxWidth="xl">
        <Block id="knob-practice-heading" padding="md">
            <EditableH2 id="h2-knob-practice-heading" blockId="knob-practice-heading">
                Check yourself
            </EditableH2>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-practice-steepness-prompt" maxWidth="xl">
        <Block id="knob-practice-steepness-prompt" padding="sm">
            <EditableParagraph id="para-knob-practice-steepness-prompt" blockId="knob-practice-steepness-prompt">
                Both of these equations contain a 7. Which one produces the steeper line?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-practice-steepness-answer" maxWidth="xl">
        <Block id="knob-practice-steepness-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="knob-practice-steepness"
                options={[
                    { id: "added-seven", label: <InlineFormula latex="y = x + 7" /> },
                    { id: "multiplied-seven", label: <InlineFormula latex="y = 7x" /> },
                    { id: "equally-steep", label: "They are equally steep" },
                ]}
                correctOptionId="multiplied-seven"
                explanation="The 7 only affects steepness when it multiplies x. In y = x + 7 the 7 simply lifts the whole line 7 units higher, leaving its tilt unchanged."
            />
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-practice-minus-prompt" maxWidth="xl">
        <Block id="knob-practice-minus-prompt" padding="sm">
            <EditableParagraph id="para-knob-practice-minus-prompt" blockId="knob-practice-minus-prompt">
                A game shows the equation <InlineFormula latex="y = -4x + 20" /> for a player's
                remaining health. As <InlineFormula latex="x" /> gets bigger, what happens to
                <InlineFormula latex="y" />?
            </EditableParagraph>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-knob-practice-minus-answer" maxWidth="xl">
        <Block id="knob-practice-minus-answer" padding="sm">
            <MultipleChoiceQuestion
                questionName="knob-practice-minus"
                options={[
                    { id: "health-rises", label: "It rises, because 20 is a large positive number" },
                    { id: "health-falls", label: "It falls, because of the minus sign in front of the 4" },
                    { id: "health-constant", label: "It stays at 20 the whole time" },
                ]}
                correctOptionId="health-falls"
                explanation="The minus sign flips the direction of the line, so health drops by 4 for every step x takes, starting from 20."
            />
        </Block>
    </StackLayout>,
];
