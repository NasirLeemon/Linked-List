

class Node{
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList {
    constructor(value){
        let node = new Node(value)
        // console.log(node);
        this.head = node;
        this.tail = node;
    }
    append(value){
        let node = new Node(value)
        this.tail.next = node
        this.tail = node;
    }
}

let list = new linkedList(100)
list.append(200)
console.log(list);