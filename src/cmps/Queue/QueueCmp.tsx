import { useRef } from "react";
import type Queue from "../../data-structures/queue";
import QueueItem from "./QueueItem";
import { AnimatePresence, motion } from "framer-motion";

const colorClass = ["acc-one", "acc-two", "acc-three", "acc-four"]

export default function QueueCmp({ queue }: { queue: Queue<{ id: string, value: number }> }) {
    const items = queue.getOrderedItems()
    const capacity = queue.getCapacity()
    const colorMapRef = useRef<{ [key: string]: string }>({})

    items.forEach(item => {
        if (!colorMapRef.current[item?.id || colorClass[0]]) {
            colorMapRef.current[item?.id || colorClass[0]] = colorClass[Math.floor(Math.random() * colorClass.length)]
        }
    });

    const paddedItems = Array(capacity).fill(null)
    for (let i = 0; i < items.length; i++) {
        paddedItems[capacity - 1 - i] = items[i]
    }

    const windowWidth = window.innerWidth

    return (
        <div className='queue'>
            <AnimatePresence initial={false} mode='popLayout'>
                {paddedItems.map((item, idx) => {
                    if (item) {
                        const isBack = idx === 0;
                        const animationProps = isBack
                            ? {
                                initial: { x: -windowWidth, y: 0, opacity: 0 },
                                animate: { x: 0, y: 0, opacity: 1 },
                                exit: { x: -windowWidth/2, y: -150, rotate: -30, opacity: 0 },
                            }
                            : {
                                initial: { x: -windowWidth, y: 0, opacity: 0 },
                                animate: { x: 0, y: 0, opacity: 1 },
                                exit: { x: windowWidth, y: 0, opacity: 0 },
                            };

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                {...animationProps}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <QueueItem value={item.value} clrClass={colorMapRef.current[item.id]} />
                            </motion.div>
                        )
                    } else {
                        return (
                            <div key={idx} style={{ width: "10vw", aspectRatio: "1/1" }} />
                        )
                    }
                })}
            </AnimatePresence>
        </div>
    );
}
