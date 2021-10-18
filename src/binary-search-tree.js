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
     let treeMoving = function(start, data){
      if(!start){
        return null;
      }

      if(data < start.data){
        start.left=treeMoving(start.left,data);
        return start;

      } else if(start.data < data){
        start.right=treeMoving(start.right, data);
        return start;
      }

      else{
        if (!start.left && !start.right){
          return null;
        }

        if (!start.left) {
          start=start.right;
          return start;
         }
         
         if (!start.right) {
          start=start.left;
          return start;
         }

         let minFromRight= start.right;
         while(minFromRight.left){
           minFromRight=minFromRight.left;
         }
         start.data= minFromRight.data;
         start.right=treeMoving(start.right, minFromRight.data);
         return start;
      }
      
    }
    this.rootTree=treeMoving(this.rootTree, data);
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