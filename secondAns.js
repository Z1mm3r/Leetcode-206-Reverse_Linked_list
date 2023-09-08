//Faster answer that does not need arrays

var reverseList = function(head) {

    //Create our pivot variables
    let current = head;
  
    // previous node, to be set to curr.next
    let prev = null;

    // node that is 'next' based on the non reversed order, used for traversal.
    let next = null;

    //Seal off end to stop loops
    if(current){
        next = current.next;
        current.next = null;
    }
    
    //Link nodes
    while(current && next){
        prev = current;
        current = next;
        next = current.next;
        current.next = prev;
    }
    
    return current;
};
