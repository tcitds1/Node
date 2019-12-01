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

  // 链表反转
  public ListNode revertList(ListNode head) {
    ListNode prev = null;
    ListNode curnode = head;
    while(curnode != null) {
      ListNode back = curnode.next;
      curnode.next = prev;
      prev = curnode;
      curnode = back;
    }
    return prev
  }
  // 1 -> 2 -> 3 -> null

  // 判断循环链表
  public boolean isLoopList(ListNode head) {
    ListNode slow = head;
    ListNode fast = head.next;
    while(slow != null && fast != null && fast.next != null) {
      if (slow.val == fast.val) {
        return true
      }
    }
    return false
  }

  // 计算倒数n个节点
  public getLastIndexNode(n, head) {
    ListNode f = head;
    ListNode s = head;
    int k = 1;
    if (n < 1 && head == null) {
      return null
    }
    while (k != n) {
      if (f.next == null) {
        return null
      } else {
        f = f.next
      }
    }
    while (f.next != null) {
      s = s.next;
      f = f.next;
    }
    return s
  }

  // 删除倒数第n个
  // 1 2 3
  public void deleteLastIndexNode (n, head) {
    ListNode fastNode = head;
    ListNode slowNode = head;
    ListNode prevSlowNode = null;
    for (int i = 1; i<n; i++) {
      fastNode = fastNode.next;
      if (fastNode = null) {
        throw new Error("查找长度超出了")
      }      
    }
    // 9 del 1
    while(fastNode.next!== null) {
      fastNode = fastNode.next;
      prevSlowNode = slowNode;
      slowNode = slowNode.next;
    }
    // 倒数第1个，head->next
    if (prevSlowNode === null) {
      return slowNode.next;
    } else {
    // 其余情况,prevNode.next = prevNode.next.next
      prevSlowNode.next = prevSlowNode.next.next;
      return head;
    }
  }


  // 集体向右移N个长度,last.next = head, realLast.next = null
  1 2 3 4 5->null
  3 4 5 1 2
  public ListNode transferRight(head, n) {
    ListNode f = head;
    for (int i = 1; i < n; i++) {
      if (f.next === null) {
        return null;
      }
      f = f.next
    }
    ListNode realLastNode = f
    ListNode realHead = f.next;
    while(f.next) {
      f = f.next
    }
    f.next = head;
    realLastNode.next = null;
    return realHead;
  }

}
