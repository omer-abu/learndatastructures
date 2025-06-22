import { useState } from 'react'
import Queue from '../../data-structures/queue'
import Controls from '../Controls/Controls'
import QueueCmp from './QueueCmp'
import { makeId } from '../../services/utils'

export default function QueueManager() {
    const [queue, setQueue] = useState(new Queue<{ id: string, value: number }>(4))
    const [counter, setCounter] = useState(0)

    function enqueue() {
        const newQueue = queue.clone()
        newQueue.enqueue({ id: makeId(), value: counter })
        setCounter(prevCount => prevCount + 1)
        setQueue(newQueue)
    }

    function dequeue() {
        const newQueue = queue.clone()
        newQueue.dequeue()
        setQueue(newQueue)
    }

    function capacityChanged(newCapacity: number): void {
        const newQueue = queue.resize(newCapacity)
        setQueue(newQueue)
    }

    const queueControlsProps = {
        onEnqueueClick: enqueue,
        onDequeueClick: dequeue,
        onCapacityChange: capacityChanged
    }

    return (
        <>
            <Controls structureType="queue" controlsProps={queueControlsProps} />
            <QueueCmp queue={queue} />
            <div className='placeholder-container'>
                {Array.from({ length: queue.getCapacity() }).map((_, idx) => (
                    <QueueItemPlaceholder key={idx} />
                ))}
            </div>
        </>
    )
}


function QueueItemPlaceholder() {
    return (
        <div className="item placeholder"></div>
    )
}