import { useRef } from "react"
import Stack from "../../data-structures/stack"
import StackItem from "./StackItem"
import { AnimatePresence, motion } from 'framer-motion'

const colorClass = ["acc-one", "acc-two", "acc-three", "acc-four"]

export default function StackCmp({ stack }: { stack: Stack<{ id: string, value: number }> }) {
    const items = stack.list()
    const colorMapRef = useRef<{ [key: string]: string }>({})

    items.forEach(item => {
        if (!colorMapRef.current[item.id]) {
            colorMapRef.current[item.id] = colorClass[Math.floor(Math.random() * colorClass.length)]
        }
    })

    return (
        <div className='stack'>
            <AnimatePresence initial={false} mode='popLayout'>
                {items.map(item => (
                    <motion.div
                        key={item.id}
                        layout
                        initial={{ y: -window.innerHeight, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{
                            x: window.innerWidth / 2,
                            y: 0,
                            rotate: 30,
                            opacity: 0,
                            transition: {
                                x: { duration: 1, ease: [.25, .77, .62, .99] },
                                y: { duration: 0.7, ease: [.25, .77, .62, .99] },
                                rotate: { duration: 1, ease: [0, 0, .33, .99] },
                                opacity: { duration: 0.6, ease: 'easeOut' }
                            }
                        }}
                        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
                    >
                        <StackItem value={item.value} clrClass={colorMapRef.current[item.id]} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

