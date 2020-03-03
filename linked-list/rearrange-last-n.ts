import { ListNode } from "./ListNode";

function rearrangeLastN(l: ListNode<number>, n: number): ListNode<number> {

    let previous: ListNode<number> = null;
    let current: ListNode<number> = l;
    let next: ListNode<number> = null;
    
    let head: ListNode<number> = null;
    let end: ListNode<number> = null;

    let endOfFirstHalfOfList: ListNode<number> = null;
    let headOfSecondHalfOfList: ListNode<number> = l;

    let nodeDictionary: { [key: number]: ListNode<number> } = {};    
    
    let nodeCount = 0;

    while ( current != null ) {
        
        nodeCount++;

        next = current.next;

        nodeDictionary[nodeCount] = current;

        previous = current;

        current = next;

    }

    if ( n === 0 || n === nodeCount ) {

        // special cases -> rearrange none and rearrange all
        return headOfSecondHalfOfList;

    }

    head = nodeDictionary[nodeCount - n + 1];

    endOfFirstHalfOfList = previous;

    endOfFirstHalfOfList.next = headOfSecondHalfOfList;

    end = nodeDictionary[nodeCount - n];

    end.next = null;

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

console.log("Rearranged list");
const node = rearrangeLastN(node1, 4);
console.log(ListNode.display(node));