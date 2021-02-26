export interface INode<T> {
  value: T
  prev: INode<T> | null
  next: INode<T> | null
}

export interface ILinkedList<T> {
  head: Node<T>
  length: number
  insertAt(node: Node<T>, value: number): boolean
  removeAt(value: number): Node<T> | null
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

  insertAt(node: Node<T>, value: number): boolean {
    return true
  }

  removeAt(index: number): Node<T> | null {
    return null
  }

  toString(): string {
    let currentNode: Node<T> | null = this.head
    let path: string = String(this.head.value)
    currentNode = currentNode.next

    while (currentNode) {
      path += `${String(currentNode.value)}`
      currentNode = currentNode.next
    }

    return path
  }
}
