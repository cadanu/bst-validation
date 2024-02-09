# BST Validation
#### A **Binary Search Tree** is a data structure characterized by each node of the tree having either an optional left child node of lesser value or an optional right child node of larger value. *See example in screenshots below*.
#### This program attempts to determine whether any tree structure having nodes containing the following properties: 
- A value, 
- A left child node, 
- A right child node, 
#### is in fact a binary search tree.

```
Clone or Fork the code if you wish to work within your own environment.
```

Run ` npm i ` to ensure the necessary packages are installed.

## Test Results

### Failing Test
Modified SevenNode value property (right-side node) to a value (5) lesser than parent node value (6).
![Failed test, image capture](/img/bst-test-fail.png)

### Passing Test
Restored SevenNode value property to default value (7).
![Passing test, image capture](/img/bst-test-pass.png)