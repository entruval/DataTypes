const LinkedList = require('./LinkedList')

describe('#getByIndex', () => {
  test('return null if index < 0', () => {
    const ll = LinkedList.fromValues(10, 20, 30)

    expect(ll.getByIndex(-1)).toBeNull()
  })

  test('return null if index > list length', () => {
    const ll = LinkedList.fromValues(10, 20, 30)

    expect(ll.getByIndex(4)).toBeNull()
  })

  test('return a node if valid index', () => {
    const ll = LinkedList.fromValues(10, 20, 30)

    expect(ll.getByIndex(0).value).toBe(30)
    expect(ll.getByIndex(1).value).toBe(20)
    expect(ll.getByIndex(2).value).toBe(10)
  })
})

describe('#insertAtHead', () => {
  test('add element at the beginning of the list', () => {
    const ll = LinkedList.fromValues(10, 20, 30)

    expect(ll.head.value).toBe(30)
    expect(ll.head.next.value).toBe(20)
    expect(ll.head.next.next.value).toBe(10)
    expect(ll.head.next.next.next).toBeNull()
    expect(ll.length).toBe(3)
  })
})

describe('#insertAtTail', () => {
  test('add element at the beginning of the list', () => {
    const ll = LinkedList.fromValues(10, 20, 30)

    ll.insertAtTail(50)
    expect(ll.head.value).toBe(30)
    expect(ll.head.next.value).toBe(20)
    expect(ll.head.next.next.value).toBe(10)
    expect(ll.head.next.next.next.value).toBe(50)
    expect(ll.head.next.next.next.next).toBeNull()
    expect(ll.length).toBe(4)
  })
})

describe('#insertAtIndex', () => {
  test('do nothing if index < 0', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.insertAtIndex(-1, 0)

    expect(ll.length).toBe(3)
  })

  test('do nothing if index > list length', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.insertAtIndex(4, 50)

    expect(ll.length).toBe(3)
  })

  test('insert new node if index === list length', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.insertAtIndex(3, 50)

    expect(ll.getByIndex(3).value).toBe(50)
    expect(ll.length).toBe(4)
  })

  test('update on index if present', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.insertAtIndex(0, 50)

    expect(ll.length).toBe(3)
    expect(ll.getByIndex(0).value).toBe(50)
  })
})

describe('#removeHead', () => {
  test('remove a node', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeHead()

    expect(ll.getByIndex(0).value).toBe(20)
    expect(ll.getByIndex(0).next).toBe(ll.getByIndex(1))
    expect(ll.getByIndex(1).value).toBe(10)
    expect(ll.getByIndex(1).next).toBe(null)
    expect(ll.length).toBe(2)
  })
})

describe('#removeTail', () => {
  test('remove a node', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeTail()

    expect(ll.getByIndex(0).value).toBe(30)
    expect(ll.getByIndex(0).next).toBe(ll.getByIndex(1))
    expect(ll.getByIndex(1).value).toBe(20)
    expect(ll.getByIndex(1).next).toBe(null)
    expect(ll.length).toBe(2)
  })
})

describe('#removeAtIndex', () => {
  test('do nothing if index < 0', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeAtIndex(-1)

    expect(ll.length).toBe(3)
  })

  test('do nothing if index > list length', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeAtIndex(5)

    expect(ll.length).toBe(3)
  })

  test('remove a node if valid index', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeAtIndex(0)

    expect(ll.length).toBe(2)
  })

  test('remove a node if valid index', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeAtIndex(1)

    expect(ll.length).toBe(2)
  })

  test('remove a node if valid index', () => {
    const ll = LinkedList.fromValues(10, 20, 30)
    ll.removeAtIndex(2)

    expect(ll.length).toBe(2)
  })
})
