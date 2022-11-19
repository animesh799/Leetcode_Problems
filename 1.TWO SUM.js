/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 //Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target O(N)
var twoSum = function(nums, target) {
    let obj={}
    let array2=[];
    //TRAVERSING THE ARRAY AND PREPARING THE OBJECT TO BE LOOKED UPON
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]) {
            obj[nums[i]]= obj[nums[i]].concat([i])//IF NUMBERS ARE REPEATING
        }else{
            obj[nums[i]]=[].concat([i])//IF NUMBER OCCUR ONLY ONCE
        }
       
    }
//TRVERSING THE ARRAY AND CHECKING THE CORRESPONDING REMAINING VALUE IN THE OBJECT IE. ELEMENT IN THE ARRAY-TARGET
    for(let i=0;i<nums.length;i++){
       
       if(obj[target-nums[i]] && obj[target-nums[i]].length!==0){
           if((target-nums[i])==target/2&& obj[target-nums[i]].length===2){ //IF THE ELEMENTS ARE REPEATING
            array2=[].concat(obj[target-nums[i]])
           }else if((target-nums[i])==target/2){ 
               continue
           }else{
               array2.push(obj[target-nums[i]])
           }
           
       }
    }
    //SWAPING TO CORRECTLY ORDER THE ELEMENT IN THE FIONAL ARRAY
    let swap=array2[0]
    array2[0]=array2[1];
    array2[1]=swap
   return array2
    
    
};
