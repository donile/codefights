# Linked List Problem Solving Strategies

## Singly Linked List

### Before iteration
Create references to previous, current and next nodes.

```typescript
...
let previous, current, next: ListNode<T> = null;
...
```

Create variables to reference **special** nodes that will need to be accessed after they have been visited during iteration.

```typescript
...
let specialNode1, specialNode2: ListNode<T> = null;
...
```

The current node variable is set to the reference of the `firstNode` variable passed into the function as an argument.  The `previous` and `next` variables refer to `null` before iteration begins.

```typescript
...
current = firstNode;
...
```

### During iteration

During each step of the traversal of the linked list:

1. Set a reference to the `next` node
2. Set references to special node variables
3. Manipulate reference of current.next
4. Set `current` equal to `next`

```typescript
while( current !== null ) {

    // set a reference to the `next` node
    next = current.next;
    ...
    // set references to special node variables
    ...
    // manipulate reference of current.next
    ...
    // set current equal to next
    current = next;
}

```