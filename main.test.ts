// const { default: test } = require('node:test')
// const main = require('./main')
import { BSTNode, evaluate, validateBST } from './main'

// let's replicate the binary search tree image at this url -> https://en.wikipedia.org/wiki/Binary_search_tree#/media/File:Binary_search_tree.svg
let fourNode = new BSTNode( 4, null, null )
let sevenNode = new BSTNode( 7, null, null )
let oneNode = new BSTNode( 1, null, null )
let sixNode = new BSTNode( 6, fourNode, sevenNode )
let threeNode = new BSTNode( 3, oneNode, sixNode )
let thirteenNode = new BSTNode( 13, null, null )
let fourteenNode = new BSTNode( 14, thirteenNode, null )
let tenNode = new BSTNode( 10, null, fourteenNode )
let eightNode = new BSTNode( 8, threeNode, tenNode )


test('validate whether the argument is a binary search tree.', () => {
    validateBST(eightNode)
    expect(evaluate).toBe(true)
})