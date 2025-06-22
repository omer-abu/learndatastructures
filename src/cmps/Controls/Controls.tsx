import QueueControls from './QueueControls'
import StackControls from './StackControls'

type ControlsProps = {
    structureType: string,
    controlsProps: any
}

function Controls({ structureType, controlsProps }: ControlsProps) {
    switch (structureType) {
        case 'stack':
            return <StackControls {...controlsProps} />
        case 'queue':
            return <QueueControls {...controlsProps} />
        default:
            return null
    }
}

export default Controls