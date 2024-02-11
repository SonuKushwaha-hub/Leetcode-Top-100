var mergeTwoLists = function (list1, list2) {
  // initial conditions
  if (!list1) return list2;
  if (!list2) return list1;

  // list2 has smaller value, swap the lists
  if (list1.val > list2.val) [list1, list2] = [list2, list1];
  // begin answer list as list1
  let ans = list1;
  while (list1 && list2) {
    let temp = null;
    // till list1 has smaller value than list2,
    while (list1 && list1.val <= list2.val) {
      temp = list1;
      list1 = list1.next;
    }
    // break of while loops denotes list2 now has smaller value
    temp.next = list2;
    [list1, list2] = [list2, list1];
  }
  return ans;
};

// define node
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// define singly linked list
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // method to append newNode in linkedList
  appendList(newNode) {
    let node = this.head;
    // If LinkedList is empty
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
    console.log("NULL");
  }
}

// test code for example-1
let list1 = new LinkedList();
list1.appendList(new Node(1));
list1.appendList(new Node(2));
list1.appendList(new Node(4));
list1.printList();

let list2 = new LinkedList();
list2.appendList(new Node(1));
list2.appendList(new Node(3));
list2.appendList(new Node(4));
list2.printList();

mergeTwoLists(list1, list2).printList();