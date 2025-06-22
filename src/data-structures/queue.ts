class Queue<T> {
    private startIdx = 0
    private endIdx = 0
    private size = 0
    private capacity: number
    private items: (T | undefined)[]

    constructor(capacity: number) {
        this.capacity = capacity
        this.items = new Array(capacity)
    }

    enqueue(item: T): void {
        if (this.size === this.capacity) throw new Error('Queue is full')

        this.items[this.endIdx] = item
        this.endIdx = (this.endIdx + 1) % this.capacity
        this.size += 1
    }

    dequeue(): T | undefined {
        if (this.size === 0) return undefined

        const item = this.items[this.startIdx]
        this.items[this.startIdx] = undefined
        this.startIdx = (this.startIdx + 1) % this.capacity
        this.size -= 1
        return item
    }

    peek(): T | undefined {
        if (this.size === 0) return undefined
        return this.items[this.startIdx]
    }

    list(): (T | undefined)[]  {
        return this.items
    }

    isEmpty(): boolean {
        return this.size === 0
    }

    isFull(): boolean {
        return this.size === this.capacity
    }

    getCapacity(): number {
        return this.capacity
    }

    getOrderedItems(): T[] {
        const result: T[] = [];
        for (let i = 0; i < this.size; i++) {
            const idx = (this.startIdx + i) % this.capacity;
            const item = this.items[idx];
            if (item !== undefined) result.push(item);
        }
        return result;
    }

    clone(): Queue<T> {
        const newQueue = new Queue<T>(this.capacity)

        for (let i = 0; i < this.size; i++) {
            const idx = (this.startIdx + i) % this.capacity
            const item = this.items[idx]
            if (item !== undefined) newQueue.enqueue(item)
        }

        return newQueue
    }

    resize(newCapacity: number): Queue<T> {
        const newQueue = new Queue<T>(newCapacity);
        const itemsToCopy = Math.min(this.size, newCapacity);
        for (let i = 0; i < itemsToCopy; i++) {
            const idx = (this.startIdx + i) % this.capacity;
            const item = this.items[idx];
            if (item !== undefined) newQueue.enqueue(item);
        }
        return newQueue;
    }
}

export default Queue