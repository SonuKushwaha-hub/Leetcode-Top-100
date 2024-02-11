var removeNthFromEnd = function (head, n) {
  let fast = head, slow = head;
  while (n--) fast = fast.next;
  if (!fast) return head.next;
  while (fast.next) fast = fast.next, slow = slow.next;
  slow.next = slow.next.next;
  return head;
};

// define node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// define singly linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // method to append newNode
  appendNode(newNode) {
    let node = this.head;
    // if list is empty
    if (node == null) {
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
    console.log("NULL");
  }
}

// test code for example-1
let myList = new LinkedList();
myList.appendNode(new Node(1));
myList.appendNode(new Node(2));
myList.appendNode(new Node(3));
myList.appendNode(new Node(4));
myList.appendNode(new Node(5));
removeNthFromEnd(myList.head, 2);
myList.printList();