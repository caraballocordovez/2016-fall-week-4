/**
 * Created by siqi on 9/25/16.
 */

//Create a new array with ['b','c','d','e', 30]
var arr1 = ['b','c','d','e',30];

//Add and remove elements from the end
//array.push() vs. array.pop()

//Add and remove elements from the beginning
//array.unshift() vs. array.shift()


//What is the index position of 'c'?


//Get the first two elements of arr1 as a different array
var arr2 = arr1.slice(0,2);
console.log(arr2)

//Iterate over the array using array.forEach
arr1.forEach(function(element, b, c){
	console.log("Hello world" + ":" + element)
})

//Filter out numbers and leave only letters in the array
var array3 = arr1.filter(function(element){
	//impose a test. If test return true, the element stays.
	//If test return false, the element leaves.
	return typeof(element) == 'string';
});
console.log(array3);