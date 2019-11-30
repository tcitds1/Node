/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
// class Solution {
//   public ListNode reverseList(ListNode head) {
//       ListNode prevNode = null;
//       ListNode curnode = head;
//       while(curnode != null) {
          
//       }
//   }
// }

// 快慢指针
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
  public ListNode middleNode(ListNode head) {
      ListNode oneStepNode = head;
      ListNode twoStepNode = head;
      while(twoStepNode.next != null && twoStepNode.next.next != null) {
          oneStepNode = oneStepNode.next;
          twoStepNode = twoStepNode.next.next;
      }
      if (twoStepNode.next == null) {
          return oneStepNode;
      } else {
          return oneStepNode.next;
      }
  }
}
