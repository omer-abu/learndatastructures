import { useState } from "react"
import Sidebar from "./cmps/AppSidebar"
import QueueManager from "./cmps/Queue/QueueManager"
import StackManager from "./cmps/Stack/StackManager"

function App() {
    const [selectedStructure, setSelectedStructure] = useState("Stack")

    function onItemSelected(structure: string) {
        setSelectedStructure(structure)
    }

    return (
        <div className='app'>
            <Sidebar onItemSelected={onItemSelected}/>
            {selectedStructure === "Queue" && <QueueManager />}
            {selectedStructure === "Stack" && <StackManager />}
        </div>
    )
}

export default App
