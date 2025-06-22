import { useRef } from "react"

type QueueControlsProps = {
    onEnqueueClick: () => void,
    onDequeueClick: () => void,
    onCapacityChange: (newCapacity: number) => void
}

function QueueControls({ onEnqueueClick, onDequeueClick, onCapacityChange }: QueueControlsProps) {
    const inputEl = useRef<HTMLInputElement>(null)

    return (
        <div className='controls queue-controls' >
            <button className="enqueue-btn" onClick={onEnqueueClick}>Enqueue</button>
            <button className="dequeue-btn" onClick={onDequeueClick}>Dequeue</button>
            <div className="capacity-ctrl">
                <label htmlFor="capacity">Queue capacity: </label>
                <input
                    ref={inputEl}
                    onInput={e => {
                        const input = e.target as HTMLInputElement;
                        const min = parseInt(input.min);
                        const max = parseInt(input.max);
                        let value = input.value;

                        if (value === '') return

                        let num = parseInt(value);

                        if (num < min) {
                            input.value = String(min);
                            num = min;
                        }
                        if (num > max) {
                            input.value = String(max);
                            num = max;
                        }
                        onCapacityChange(num);
                    }}
                    type="number"
                    className="capacity"
                    name="capacity"
                    defaultValue="4"
                    min={1}
                    max={10}
                />
            </div>
        </div>
    )
}

export default QueueControls