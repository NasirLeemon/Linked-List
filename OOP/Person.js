class Node {
  constructor(value, next = null) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor(value) {
    let node = new Node(value);
    (this.head = node), (this.tail = node);

    this.length = 1;
  }

  append(value) {
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;

    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;

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
      prevNode.next = newNode
      this.length ++
    }
  }

  delete(position){
     if (position === 1) {
      this.head = this.head.next
    } 
    else if (position === this.length + 1) {
      let prevNode = this.findNode(position - 1);
      this.tail = prevNode
    } 
    else {
      let prevNode = this.findNode(position - 1);
      prevNode.next = prevNode.next.next;
      this.length --
    }
  }

  update(givenValue, position){
    let foundNode = this.findNode(position)
    foundNode.value = givenValue
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

let list = new LinkedList(20);
list.append(30);
list.append(40);
list.prepend(10);
// list.delete(1)
list.update(100,1)
list.print();
// console.log(list);






