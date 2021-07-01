class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }

  getByIndex(index) {
    if (index < 0 || index > this.length) return null

    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head)
    this.head = newNode
    this.length++
  }

  insertAtTail(data) {
    const lastNode = this.getByIndex(this.length - 1),
          newNode = new LinkedListNode(data, null)
    lastNode.next = newNode
    this.length++
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) return null

    if (index === this.length) {
      this.insertAtTail(value)
      return
    }

    const ll = this.getByIndex(index)
    ll.value = value
  }

  removeHead() {
    this.head = this.head.next
    this.length--
  }

  removeTail() {
    const lastNode = this.getByIndex(this.length - 2)

    lastNode.next = null
    this.length--
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) return null

    if (index === 0) {
      this.removeHead()
      return
    }

    if (index === this.length) {
      this.removeTail()
      return
    }

    const prevNode = this.getByIndex(index - 1)
    const nextNode = this.getByIndex(index + 1)

    prevNode.next = nextNode
    this.length--
  }
}

class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

LinkedList.fromValues = function(...values) {
  const ll = new LinkedList()

  for (let i = 0; i < values.length; i++) {
    ll.insertAtHead(values[i])
  }

  return ll
}

module.exports = LinkedList