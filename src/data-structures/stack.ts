class Stack<T> {
    private items: T[] = []

    constructor(initialItems: T[] = []) {
        this.items = [...initialItems]
    }

    push(item: T): void {
        this.items.push(item)
    }

    pop(): T | undefined {
        return this.items.pop()
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1]
    }

    list(): T[] | [] {
        return this.items
    }

    isEmpty(): boolean {
        return this.items.length === 0
    }

    size(): number {
        return this.items.length
    }

    clone(): Stack<T> {
        return new Stack<T>(this.items)
    }
}

export default Stack