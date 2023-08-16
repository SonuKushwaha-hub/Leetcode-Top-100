var addTwoNumbers = function(l1, l2) {
  const func = (l1, l2, carry) => {
      if(!l1 && !l2 && !carry) return null;
      const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
      const node = func(l1?.next, l2?.next, Math.floor(sum/10));
      return new ListNode(sum%10, node);
  }
  return func(l1,l2,0);
};

// defining singly linked list
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.nex
  t = (next===undefined ? null : next)
}

// testing code on a testCase-1
const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1,l2));