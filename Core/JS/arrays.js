//Array: a collection of data
let bin = [0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001];
//indices: 0  1   2   3   4    5    6    7     8    9
console.log(bin);
console.log(typeof(bin));//object: array is a special object. it has key-value but the key is a index
console.log(bin.length);//returns length
console.log(bin[5]);//indexing and getting
//A out of range index is undefined
//They are mutable: you can change any index unlike strings

//Looping a array
for(idx = 0; idx < bin.length; idx++) {
    console.log(bin[idx]);
}
console.log("END");
//Or(what is made for it)
for(val of bin) {
    console.log(val);
}
console.log("END");
//practice1:
//for a given array with marks of students-> [85, 97, 44, 37, 76, 60]. Find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for(i of marks) {
    sum += i;
}
console.log(sum / marks.length);
console.log("END");
//practice2:
//for a given array of prices of 5 items-> [250, 645, 300, 900, 50]. All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let prices = [250, 645, 300, 900, 50];
for(let idx = 0; idx < prices.length; idx++) {
    prices[idx] -= idx/10;
}
console.log(prices);
console.log("END");

//Methods

bin = [0, 1, 10, 11, 100, 101, 110, 111, 1000, 1001];

bin.push(1010);//add to end
console.log(bin);//[0, 1, 10, 11,..., 1001, 1010]

console.log(bin.pop());//remove from end and return. 1010
console.log(bin);//[0, 1, 10, 11,....., 1001]

console.log(bin.toString());//changes array to string. "0, 1, 10, 11....., 1001"

binext = [1010, 1011, 1100, 1101, 1111];
bin = bin.concat(binext);//merges up arrays
console.log(bin);//[0, 1, 10, 11, ..., 1001, 1010, ...., 1101, 1111];

bin.unshift(0);//Add to start
console.log(bin);//[0, 0, 1, 10, ........., 1111]

console.log(bin.shift());//remove from start and return. 0
console.log(bin);//[0, 1, 10, 11, ............., 1111]

console.log(bin.slice(2, 5));//returns a part of the array. [10, 11, 100]

let num = [0, 1, 2, 9, 10, 5, 6, 7, 8];
num.splice(3, 2, 3, 4);//Changes the array.
//       idx del  new operating index, how many to delete what to add.
console.log(num);//[0, 1, 2, 3, 4, 5, 6, 7, 8]
