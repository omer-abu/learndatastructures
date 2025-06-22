import { useState } from 'react'
import Stack from '../../data-structures/stack'
import Controls from '../Controls/Controls'
import StackCmp from './StackCmp'
import { makeId } from '../../services/utils.ts'

export default function StackManager() {
    const [stack, setStack] = useState(new Stack<{ id: string, value: number }>([]))

    function addToStack() {
        const newStack = stack.clone()
        newStack.push({ id: makeId(), value: stack.size() })
        setStack(newStack)
    }

    function removeFromStack() {
        const newStack = stack.clone()
        newStack.pop()
        setStack(newStack)
    }

    const stackControlsProps = {
        onAddToStackClick: addToStack,
        onRemoveFromStackClick: removeFromStack,
    }

    return (
        <>
            <Controls structureType="stack" controlsProps={stackControlsProps} />
            <StackCmp stack={stack} />
        </>
    )
}