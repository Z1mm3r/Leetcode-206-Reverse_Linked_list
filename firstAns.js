var reverseList = function(head) {

   //Create an array of nodes, then link them by popping values 

  
    let nodeArr = [];
    let current = head;

    //Go through all nodes
    while(current && current.next != null){
        nodeArr.push(current);
        current = current.next;
    }

    //reset startPoint from the end
    let newHead = current
    //Link all nodes
    while(nodeArr.length > 0){
        next = nodeArr.pop();
        current.next = next;
        current = current.next;
    }
    // Make sure to close off end to prevent loops
    if(current){
        current.next = null
    }

    return newHead;
};
