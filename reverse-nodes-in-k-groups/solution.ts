class ListNode<T> {
  value: T;
  next: ListNode<T>;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }

  public static display<T>(node: ListNode<T>): string {
    
    const result: T[] = [];

    let current: ListNode<T> = node;

    while ( current != null ) {

        result.push(current.value);

        current = current.next;

    }

    return result.toString()
  }
}

function reverseNodesInKGroups(l: ListNode<number>, k: number): ListNode<number> {

    let previous = null;
    let current = l;
    let next: ListNode<number> = null;

    let lastPrevious: ListNode<number> = null;
    let lastCurrent: ListNode<number> = l;

    let head: ListNode<number> = null;

    let nodeCount = 0;

    while ( current != null ) {

      // increment next pointer
      next = current.next;

      nodeCount++;

      if ( nodeCount === 1 ) {

        current.next = null;

      }

      if ( nodeCount > 1 ) {

        current.next = previous;

      }

      if ( nodeCount === k ) {

        if ( lastPrevious !== null ) {

          lastPrevious.next = current;

        }

        lastPrevious = lastCurrent;
        lastCurrent = next;
        
        if ( head == null ) {

          head = current;

        }

        nodeCount = 0;

      }
      
      // increment previous pointer
      previous = current;

      // increment current pointer
      current = next;

    }

    // reverse the last k nodes
    if ( nodeCount !== 0 ) {

      // reset references/pointers
      current = previous;
      previous = null;
      
      // reverse last k nodes
      while ( current !== null ) {

        next = current.next;
        current.next = previous;
        previous = current;
        current = next;

      }

      lastPrevious.next = previous;

    }

    return head;

}

const node1 = new ListNode<number>(1);
const node2 = new ListNode<number>(2);
const node3 = new ListNode<number>(3);
const node4 = new ListNode<number>(4);
const node5 = new ListNode<number>(5);
const node6 = new ListNode<number>(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log("Original list");
console.log(ListNode.display(node1));

console.log("Reversed list");
const node = reverseNodesInKGroups(node1, 3);
console.log(ListNode.display(node));