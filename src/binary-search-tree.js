const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


module.exports = class BinarySearchTree {
  constructor(){
    this.rootTree=null;
  }
  
  root(){
    return this.rootTree;
  }

  add(data) {
    let node = new Node(data);
    
    if (this.rootTree === null) {
    this.rootTree = node;
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
  treeMoving(this.rootTree);
  }


  has(data) {
  return this.find(data) ? true : false;
  }

  find(data) {
    let treeMoving = function(start) {
      if(data < start.data && start.left !== null) {
        return treeMoving(start.left);
      } else if (data > start.data && start.right !== null) {
        return treeMoving(start.right);
      } else if (data == start.data) {
        return start;
      } 
      return null;
    
  }

  if (this.root()) {
  return treeMoving(this.root());
}
return this.root();
  
    
  }

  remove(data) {
    remove(data) {
      let treeMoving = function(start) {
        if (start) {
          if(data < start.data && start.left !== null) {
            if(start.left.data === data) {
              start.left = null;
            }
          return treeMoving(start.left);
          } else if (data > start.data && start.right !== null) {
            if(start.right.data === data) {
              start.right = null;
            }
          return treeMoving(start.right);
          } else if (data == start.data) {
          start = null;
          } 
        }
    
        }
        treeMoving(this.root());
    }
  }

  min() {
    if (this.rootTree !== null) {
    let min = this.root().data;
    let goLeft = function(start) {
      if (start.left) {
        min = start.left.data;
        goLeft(start.left);
      }
      return min;
    } 
    return goLeft(this.root());
  }
    return null;
  }

  max() {
  if (this.rootTree !== null) {
    let max = this.root().data;
    let goRight = function(start) {
      if (start.right) {
        max = start.right.data;
        goRight(start.right);
      }
      return max;
    } 
    return goRight(this.root());
  }
    return null;
  }

}