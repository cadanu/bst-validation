/*
** G.Joyce - Binary Search Tree validation algorithm
** Feb, 08, 2024
**
** A binary search tree node is characterized by a left child node of lesser value, and a right child node of larger value.
*/

export class BSTNode {
    value: number
    left: BSTNode
    right: BSTNode

    public constructor(_value: number, _left: any, _right: any) {// grow tree
        this.value = _value
        this.left = _left
        this.right = _right
    }
}

export let evaluate: boolean = true
export function validateBST(n: BSTNode) {
    // let evaluate: boolean = true

    if (n) {
        console.log(`Value is ${n.value}`)

        // left
        if (n.left) {
            evaluate = evaluate && ( n.left.value < n.value )
            console.log(`n.left.value is ${n.left.value}`)
        }

        // right
        if (n.right) {
            evaluate = evaluate && ( n.right.value > n.value )
            console.log(`n.right.value is ${n.right.value}`)
        }

        console.log(`Binary Search Tree is ${evaluate? 'valid' : 'not valid.'}`)
        
        if (evaluate==false) return evaluate// terminate on false evaluation

        return [validateBST(n.left), validateBST(n.right)]

    }

}
