export interface INode<T> {
  value: T
  prev: INode<T> | null
  next: INode<T> | null
}

export interface ILinkedList<T> {
  head: Node<T>
  length: number
  insertAt(node: Node<T>, index: number): boolean
  removeAt(index: number): Node<T> | null
  toString(): string
}

export class Node<T> implements INode<T> {
  constructor(
    public value: T,
    public prev: INode<T> | null = null,
    public next: INode<T> | null = null
  ) {}
}

export class LinkedList<T> implements ILinkedList<T> {
  public head!: Node<T>
  public length: number = 1
  constructor(value: T) {
    this.head = new Node<T>(value)
  }

  insertAt(node: Node<T>, index = this.length): boolean {
    if (index > this.length) return false

    let i: number = 0
    let currentNode: Node<T> | null = this.head

    while (currentNode) {
      if (i + 1 === index) {
        // currentNode => node => currentNode.next
        node.next = currentNode.next
        node.prev = currentNode

        if (currentNode.next) {
          currentNode.next.prev = node
        }

        currentNode.next = node
        this.length++
        return true
      }

      currentNode = currentNode.next
      i++
    }

    return false
  }

  removeAt(index: number): Node<T> | null {
    if (index > this.length) return null

    let currentNode: Node<T> | null = this.head
    let i: number = 0

    while (i < index && currentNode) {
      i++
      currentNode = currentNode.next
    }

    // currentNode.prev => currentNode (delete target) => currentNode.next
    if (currentNode) {
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next
      }

      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev
      }

      return currentNode
    }

    return null
  }

  toString(): string {
    let currentNode: Node<T> | null = this.head
    let path: string = String(this.head.value)
    currentNode = currentNode.next

    while (currentNode) {
      path += ` => ${String(currentNode.value)}`
      currentNode = currentNode.next
    }

    return path
  }
}
