import { ILinkedList, LinkedList, Node } from "./_LinkedList";

const list: LinkedList<number> = new LinkedList(0)
const newNode: Node<number> = new Node(2)

list.insertAt(new Node(1))
list.insertAt(newNode, 1)
list.insertAt(new Node(3))

console.log(list.removeAt(2))

console.log(list.toString())
