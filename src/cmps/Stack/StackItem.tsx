type StackItemProps = {
    value: number,
    clrClass: string
}

export default function StackItem({ value, clrClass }: StackItemProps) {


    return (
        <div className={`item stack-item ${clrClass}`}>
            <h1>{value}</h1>
        </div>
    )
}