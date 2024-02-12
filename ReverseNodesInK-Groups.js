var reverseKGroup = function (head, k) {
  // counting the number of nodes
  let cnt = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    cnt++;
  }

  let dummy = new LinkedList();
  dummy.next = head;
  let prev = dummy, nxt = dummy;
  while (cnt >= k) {
    curr = prev.next;
    nxt = curr.next;
    for (let i = 1; i < k; i++) {
      curr.next = nxt.next;
      nxt.next = prev.next;
      prev.next = nxt;
      nxt = curr.next;
    }
    cnt -= k;
    prev = curr;
  }
  return dummy.next;
};

// define node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// define LinkedList
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // define method to append new node
  appendNode(newNode) {
    let node = this.head;
    // if list is empty
    if (!node) {
      this.head = newNode;
      return;
    }
    while (node.next) node = node.next;
    node.next = newNode;
  }

  // method to print List
  printList() {
    let node = this.head;
    process.stdout.write("HEAD->")
    while (node) {
      process.stdout.write(node.data + "->");
      node = node.next;
    }
    process.stdout.write("NULL");
  }
}

// test code for example-1
let myList = new LinkedList();
myList.appendNode(new Node(1));
myList.appendNode(new Node(2));
myList.appendNode(new Node(3));
myList.appendNode(new Node(4));
myList.appendNode(new Node(5));
reverseKGroup(myList.head, 3).printList();
