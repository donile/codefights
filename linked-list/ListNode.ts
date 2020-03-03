export class ListNode<T> {
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