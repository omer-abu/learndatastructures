type SidebarItemProps = {
    name: string,
    current: boolean,
    setSelectedItem: () => void
}

export default function SidebarItem({ name, current, setSelectedItem }: SidebarItemProps) {
    return (
        <div onClick={setSelectedItem} className={`sidebar-item${current ? " current" : ""}`}>
            <h2>{name}</h2>
        </div>
    )
}

