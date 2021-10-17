const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
   constructor(){
     this.head=null;
     this.tail=null;
     this.list={};
   }
  getUnderlyingList() {
    let getResult = function(value, next, container) {
      container.value = value;
      container.next = {};
      if (next != null) {
        getResult(next.value, next.next, container.next);
      } else {
        container.next = null;
      }
    }
  
     if (this.head != null) {
      getResult(this.head.value, this.head.next, this.list);
     }
    return this.list;
     }
  

  enqueue(value) {
    
    let elem = new ListNode(value);
    if (this.head === null) {
      this.head = elem;
    }
    if (this.tail != null) {
     this.tail.next = elem;
    }
    this.tail = elem;
    }
  

  dequeue() {
    if(this.head!=null){
      this.temp=this.head;
      this.head=this.head.next;
     return this.temp.value;
    }
  }

}
