class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let resList = new ListNode(0),
    currentResList = resList;

  let currentL1 = l1,
    currentL2 = l2,
    carry = 0;

  while (currentL1 !== null || currentL2 !== null) {
    const x = currentL1 !== null ? currentL1.val : 0;
    const y = currentL2 !== null ? currentL2.val : 0;
    const sum = x + y + carry;
    carry = parseInt(sum / 10);
    currentResList.next = new ListNode(sum % 10);
    currentResList = currentResList.next;
    if (currentL1 !== null) currentL1 = currentL1.next;
    if (currentL2 !== null) currentL2 = currentL2.next;
  }

  if (carry > 0) {
    currentResList.next = new ListNode(carry);
  }

  return resList.next;
};

const l1A = new ListNode(2);
const l1B = new ListNode(4);
const l1C = new ListNode(3);

l1A.next = l1B;
l1B.next = l1C;

const l2A = new ListNode(5);
const l2B = new ListNode(6);
const l2C = new ListNode(4);

l2A.next = l2B;
l2B.next = l2C;

const resultHead = addTwoNumbers(l1A, l2A);
console.log(resultHead);
