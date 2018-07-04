// Question 1
// An array of 99 elements contains integers from 1 to 100 with one missing element. Find the missing element.

//is it presorted?
//are there dupes? are all elements unique?

// function total(){
//   let sum = 99
//   let add = 0

//   while (sum){
//     add+=sum
//     sum--
//   }
//   return add
// }

// total()

//Question 2 
// Find the first unique character in a string

// let arr = [ 1, 2, 1, 2, 3, 3, 5, 5, 5]

// function compare(list){
//   for (let i = 0; i < list.length; i++){
//     let bool = true
//     for (let j = 0; j < list.length; j++){
//       if (list[i] === list[j] && (i !== j)){
//         bool = false
//         break;
//       }
//     }
//     if (bool){
//       return list[i]
//     }
//   }
//   return false
// }

// compare(arr)

//Question 3
//Add two linked lists  

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/** 
 * var addTwoNumbers = function(l1, l2) {
 * };
*/

//  function ListNode(val) {
//       this.val = val;
//       this.next = null;
//   }

// function addTwoNumbers(l1, l2){
//     let p = l1
//     let q = l2
//     let pval = p.val
//     let qval = q.val    
//     let remainder = 0
//     let dummyHead = new ListNode(0)
//     let newList = dummyHead
//     let total = 0
//     while(p !== null || q!== null) {  
//         pval = (p === null) ? 0 : p.val
//         qval = (q === null) ? 0 : q.val 
//         total = pval + qval + remainder
//         newList.next = (total > 9) ? new ListNode(total%10) : new ListNode(total)
//         remainder = Math.floor(total/10)
//         newList = newList.next
//         p = (p !== null) ? p.next : null
//         q = (q !== null) ? q.next : null
//     }
//     if (remainder > 0) newList.next = new ListNode(remainder);
//     return dummyHead.next
// }

// addTwoNumbers()

//Question 4
//BINARY SEARCH TREES

// class BinarySearchTree {
//   constructor(value) {
//     this.value = value;
//     this.size = 1;
//     this.left = null;
//     this.right = null;
//   }

//   insert(val) {
//     this.size++
//     let node = new BinarySearchTree(val)
//     if (this.value === undefined){
//       this.value = val
//     } else if (val <= this.value){
//       if (!this.left) {
//         this.left = node
//       } else {
//         this.left.insert(val)
//       }
//     } else if (val > this.value) {
//       if (!this.right) {
//         this.right = node
//       } else {
//         this.right.insert(val)
//       }
//     }
//   }

//   contains (val) {
//     if (this.value === val){
//       return true
//     } 
//     if (val <= this.value){
//       if (this.left){
//         return this.left.contains(val)
//       } else {
//         return false
//       }
//     }
//     if (val > this.value){
//       if (this.right){
//         return this.right.contains(val)
//       } else {
//         return false
//       }
//     }
//   }
  
//   depthFirstForEach(cb, type){

//     if (!type || type === 'in-order'){
//       if (this.value >= 0){
//         if (this.left){
//           this.left.depthFirstForEach(cb, type)
//         }
//         cb(this.value)
//         if (this.right){
//           this.right.depthFirstForEach(cb, type)
//         }
//       }
//     }
//     if (type === 'post-order'){
//       if (this.value >= 0){
//         if (this.left){
//           this.left.depthFirstForEach(cb, type)
//         }
//         if (this.right){
//           this.right.depthFirstForEach(cb, type)
//         }
//         cb(this.value)
//       }
//     }
//   }

//   size() {
//     return this.size
//   }
// }

// var tree,
// testArr,
// valuesToInsert = [15, 25, 5, 17, 21, 28, 0, 14, 50, 1, 45, 13, 12, 11, 30, 35, 33, 31, 34];
// tree = new BinarySearchTree(20);
// testArr = [];

//     // expect(tree.value).toBe(20);
//     tree.insert(15);
//     // expect(tree.left.value).toBe(15);
//     tree.insert(25);
//     // expect(tree.right.value).toBe(25);
//     tree.insert(5);
//     tree.insert(17);
//     tree.insert(21);
//     tree.insert(28);
//     tree.insert(0);
//     tree.insert(14);
//     tree.insert(50);
//     tree.insert(1);
//     tree.insert(45);
//     tree.insert(13);
//     tree.insert(12);
//     tree.insert(11);
//     // expect(tree.left.left.right.left.left.left.value).toBe(11);
//     tree.insert(30);
//     tree.insert(35);
//     tree.insert(33);
//     tree.insert(31);
//     tree.insert(34);
//   //   expect(tree.right.right.right.left.left.right.left.right.value).toBe(34);
//   // });
//     tree.depthFirstForEach(function(val){ testArr.push(val); }, 'post-order')

//END OF BINARY SEARCH TREES

// class HashTable{
//   constructor(){
//     this.numBuckets = 35;
//     this.arr = new Array(35)
//   }

//   set(key, val){
//     let location = this.hash(key)
//     console.log('set location to :', location)
//     console.log('anything in arr?', this.arr[location])
//     if (!this.arr[location]) {
//       this.arr[location] = [{ [key] : val }]
//     } else {
//       this.arr[location].push({[key]: val})
//     }
//     console.log(this.arr)
//   }

//   get(key){
//     let location = this.hash(key)
//     let result = false
//     this.arr[location].filter(item => {
//       console.log('item[key]', item[key])
//       if (item[key]){
//         result = item[key]
//       }
//     })
//     return result
//   }

//   hasKey(){

//   }

//   hash(keyString){
//     if (typeof keyString === 'string'){
//       let index = 0
//       for (let i = 0; i < keyString.length; i++){
//         index+=keyString.charCodeAt(i)
//       }
//       return index%this.numBuckets
//     } else {
//       throw Error('Keys must be strings')
//     }
//   }
// }

//   var hashTable;
//   hashTable = new HashTable();
//   hashTable.set('key2', 'val2')
//   hashTable.get('key2')
//     // expect(hashTable.get('key2')).toBe('val2');
//     // expect(hashTable.get('this is a very different string')).toBe(44.4)

//Question 5
//Reverse words in a string

// reverseString = (string) => {
//   let stringArray = string.split(' ')
//   let reversedStringArray = []
//   for (let i = stringArray.length-1; i >= 0; i--) {
//     reversedStringArray.push(stringArray[i])
//   }
//   return reversedStringArray.join(' ')

// }

//using built in functions
// reverseString = string => {
//   return string.split(' ').reverse().join(' ')
// }

// reverseString('I love you')

//Question 6
//Best Time to Buy and Sell Stock

// [7,1,5,3,6,4]
var maxProfit = function(prices) {
    console.log(prices)
    let maxProf = 0
    
    for (let i = 0; i < prices.length; i++) { //i = 1
        for (let j = 1; j < prices.length - i; j++) {
          let profit = prices[i+j] - prices[i]
            if (profit > maxProf ) {
              maxProf = profit
            }
        }
    }

    return maxProf
    
};

maxProfit([1,2])
