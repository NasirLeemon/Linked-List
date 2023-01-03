class Node {
    constructor(value, next = null, prev = null) {
      this.value = value
       this.next = next
       this.prev = prev
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
      node.prev = this.tail
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
  
 
  let list = new LinkedList(10)
  
  list.append(20)
//   list.append(30)


  console.log({'Head':list.head});
  console.log({'Tail':list.tail});










  
  
  
  
  