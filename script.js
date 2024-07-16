//1.array creation and intialization 
let arrays = [10,20,30,40,50];
console.log("1. Array initialization:",arrays); 

//2.array manipulation Add an elemnt at end - push
arrays.push(60);
console.log("2. Array after push:",arrays);

//unshift - add at the begining
arrays.unshift(0);
console.log("Array after unshift:",arrays);

//remove an element at the end
arrays.pop(0);
console.log("Array after pop:",arrays);

//shift - removes first element 
arrays.shift();
console.log("Arrays after shift:",arrays);

//3.array searching - indexOf(),find(),includes()
let num= 30;
let index = arrays.indexOf(num);
if(index !== -1)
{
    console.log("3. Index of "+num+" is "+index);
}
else
{
    console.log("3. Index of "+num+" not found");
}

//find() 

let find = arrays.find(arrays => arrays>25);
console.log("First array greater than 25:",find);

//includes
let num1 = 40;
let res= arrays.includes(num1);
console.log("The element " +num1+ " included :",res);


//4.filter
let filter = arrays.filter(arrays => arrays>25);
console.log("4. Filtered array :",filter);

//5.mapping 
let mapping = arrays.map(arrays => arrays*2);
console.log("5. Mapped Numbers : ",mapping);

//6.array sorting
let sort = arrays.sort();
console.log("6. Sorted array : ",sort);


