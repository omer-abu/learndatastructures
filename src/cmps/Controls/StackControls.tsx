type StackControlsProps = {
    onAddToStackClick: () => void,
    onRemoveFromStackClick: () => void
}

function StackControls({ onAddToStackClick, onRemoveFromStackClick }: StackControlsProps) {

    return (
        <div className='controls stack-controls' >
            <button onClick={onAddToStackClick}>Add to stack</button>
            <button onClick={onRemoveFromStackClick}>Remove from stack</button>
        </div>
    );
}

export default StackControls