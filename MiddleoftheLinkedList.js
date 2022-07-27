/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0,
    current = head,
    middleNode = head;

  while (current !== null) {
    count++;
    current = current.next;
  }

  const middle = Math.floor(count / 2);

  for (let i = 0; i < middle; i++) {
    middleNode = middleNode.next;
  }

  return middleNode;

  // LC solution tortoise-hare
  // let slow = head,
  // fast = head;

  // while(fast !== null && fast.next !== null) {
  // slow = slow.next;
  // fast = fast.next.next;
  // }

  // return slow;
};
