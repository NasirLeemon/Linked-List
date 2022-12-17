class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    this.head = node;
    this.tail = node;
    this.tail.next = this.head;
    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.tail.next = this.head;
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.tail.next = this.head;

    this.length++;
  }

  print() {
    let data = this.head;
    while (data != null) {
      console.log(data.value);
      data = data.next;
    }
  }

  insertAt(value, position) {
    if (position === 1) {
      this.prepend(value);
    } else if (position === this.length + 1) {
      this.append(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.findNode(position - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
    }
  }

  delete(position) {
    if (position === 1) {
      this.head = this.head.next;
      this.tail.next = this.head.next;
    } else if (position === this.length) {
      let prevNode = this.findNode(position - 1);
      this.tail = prevNode;
      this.tail.next = this.head;
    } else {
      let prevNode = this.findNode(position - 1);
      prevNode.next = prevNode.next.next;
      this.length--;
    }
  }

  update(givenValue, position) {
    let foundNode = this.findNode(position);
    foundNode.value = givenValue;
  }

  findNode(n) {
    let count = 1;
    let data = this.head;
    while (data != null) {
      if (count == n) break;
      count++;
      data = data.next;
    }
    return data;
  }
}

let list = new LinkedList(100);
list.append(200);
list.append(300);
// list.delete(2);
list.update(500,1) 

//   console.log(list);
console.log(list.head);
// console.log(list.tail);
