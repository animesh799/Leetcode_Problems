/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
let number1=0,number2=0,sum=0;
let temp=l1
let i=0;

// EXTRACTING THE VAL FROM LL AND PREPARING FIRST NUMBER
while(temp!==null){
    number1=number1+Math.pow(10,i)*temp.val
    temp=temp.next
    i++
}
temp=l2
i=0
// EXTRACTING THE VAL FROM LL AND PREPARING SECOND NUMBER
while(temp!==null){
    number2=number2+Math.pow(10,i)*temp.val
    temp=temp.next
    i++
}
   
    sum=number1+number2 
//PREPARING THE HEAD NOE OF THE LL TO BE RETURNED
    let head=new ListNode(sum%10,null)
    temp=head
    while(sum>0){
        sum=parseInt(sum/10) //BREAK PROVIDED TO AVOID EXTRA CYCLE
        if(sum===0) break;
        temp.next=new ListNode(sum%10,null) //ADDING THE NEW NODE IN THE NEXT OF TEMP VARIABLE
        temp=temp.next                      //UPDATING THE VALUE OF TEMP TO PINT AT NEXT OF TEMP
    }
    return head;
};