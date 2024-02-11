var swapPairs = function (head) {
  // initail condition check
  if (head == null || head.next == null) return head;
  // start curr with 1 node ahead
  let curr = head.next;
  // call function in recursion
  head.next = swapPairs(head.next.next);
  // assign current next with previous node
  curr.next = head;

  return curr;
};

// define Node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// define LinkedList
class linkedList {
  constructor(head = null) {
    this.head = head;
  }

  // define appendNode method
  appendNode(newNode) {
    let node = this.head;
    // if linkedList is empty
    if (node == null) {
      this.head = newNode;
      return;
    }
    while (node.next) node = node.next;
    node.next = newNode;
  }

  // define method to print List
  printList() {
    let node = this.head;
    process.stdout.write("Head->");
    while (node) {
      process.stdout.write(node.val + "->");
      node = node.next;
    }
    process.stdout.write("null");
  }
}

// test code
let list = new linkedList();
list.appendNode(new Node(1));
list.appendNode(new Node(2));
list.appendNode(new Node(3));
list.appendNode(new Node(4));
list.appendNode(new Node(5));
swapPairs(list).printList();