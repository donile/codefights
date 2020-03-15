# Linked List Problem Solving Strategies

## Singly Linked List

### Before iteration
Create variables that will reference `previous`, `current` and `next` nodes.

```typescript
...
let previous, current, next: ListNode<T> = null;
...
```

If necessary, create variables that will reference **special** nodes that will need to be accessed after they have been visited during iteration.

```typescript
...
let specialNode1, specialNode2: ListNode<T> = null;
...
```

The current node variable is set to the reference of the `firstNode` variable that is passed into the function as an argument.  The `previous` and `next` variables refer to `null` before iteration begins.

```typescript
...
current = firstNode;
...
```

### During iteration

During each iteration of the traversal of the linked list:

1. Set `next` equal to `current.next`
2. Set references to special node variables
3. Manipulate reference of `current.next` to solve problem
4. Set `previous` equal to `current`
5. Set `current` equal to `next`

```typescript
while( current !== null ) {

    // set a reference to the `next` node
    next = current.next;
    ...
    // set references to special node variables
    ...
    // manipulate reference of current.next
    ...
    // set previous equal to current
    previous = current;
    // set current equal to next
    current = next;
}

```