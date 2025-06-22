type QueueItemProps = {
    value: number,
    clrClass: string
}

export default function QueueItem({ value, clrClass }: QueueItemProps) {


    return (
        <div className={`item queue-item ${clrClass}`}>
            <h1>{value}</h1>
        </div>
    )
}