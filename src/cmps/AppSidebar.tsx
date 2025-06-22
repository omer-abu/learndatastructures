import { useRef, useState } from "react"
import SidebarItem from "./SidebarItem"
import { ReactSVG } from "react-svg"

const structures = ["Stack", "Queue"]

export default function Sidebar({ onItemSelected }: { onItemSelected: Function }) {
    const [collapsed, setCollapsed] = useState(true)
    const sidebarBgRef = useRef<HTMLDivElement>(null)
    const collapseBtnRef = useRef<HTMLButtonElement>(null)
    const [currentItem, setCurrentItem] = useState(0)

    function onCollapseClick() {
        sidebarBgRef.current?.classList.toggle("expanded")
        collapseBtnRef.current?.classList.toggle("expanded")
        sidebarBgRef.current?.classList.toggle("collapsed")
        collapseBtnRef.current?.classList.toggle("collapsed")

        setCollapsed(prevCollapse => !prevCollapse)
    }

    function setSelectedItem(idx: number) {
        setCurrentItem(idx)
        onItemSelected(structures[idx])
    }

    return (
        <section className="sidebar">
            <section ref={sidebarBgRef} className="sidebar-bg collapsed">
                <div className="sidebar-content">
                    <h1>Data Structures</h1>
                    {
                        structures.map((item, idx) => (
                            <SidebarItem
                                name={item}
                                current={idx === currentItem}
                                setSelectedItem={() => setSelectedItem(idx)}
                            />
                        ))
                    }
                </div>
            </section>

            <button ref={collapseBtnRef} className="collapse-btn collapsed" onClick={onCollapseClick}>
                <ReactSVG className={`${collapsed ? "flipped" : ""}`} src="/icons/arrow.svg" />
            </button>
        </section>
    )
}

