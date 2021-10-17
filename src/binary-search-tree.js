const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
  constructor(){
    this.root=null;
  }

  getRoot() {
    return this.root;
  }

  add(data) {
  let node = new Node(data);
  if (this.root === null) {
    this.root = node;
  }
  let treeMoving = function(start) {
    if (data > start.data && start.right === null) {
      start.right = node;
    } else if (data < start.data && start.left === null) {
      start.left = node;
    }
    if (data > start.data) {
      treeMoving(start.right);
    } else if (data < start.data) {
      treeMoving(start.left);
    }

  }
  treeMoving(this.root);
  }


  has(data) {
  return this.find(data) ? true : false;
  }

  find(data) {

    let treeMoving = function(start) {
        if(data < start.data && start.left) {
          treeMoving(start.left);
        } else if (data > start.data && start.right) {
          treeMoving(start.right);
        } else if (data === start.data) {
          return start;
        } 

        return null;
      
      }
    
    return treeMoving(this.getRoot());
  }

  remove(data) {
  let currentNode = this.find(data);
  if(currentNode && currentNode.right) {
    currentNode = currentNode.right;
  }
  }

  min() {
    if (this.root !== null) {
    let min = this.getRoot().data;
    let goLeft = function(start) {
      if (start.left) {
        min = start.left.data;
        goLeft(start.left);
      }
      return min;
    } 
    return goLeft(this.getRoot());
  }
    return null;
  }

  max() {
  if (this.root !== null) {
    let max = this.getRoot().data;
    let goRight = function(start) {
      if (start.right) {
        max = start.right.data;
        goRight(start.right);
      }
      return max;
    } 
    return goRight(this.getRoot());
  }
    return null;
  }

}