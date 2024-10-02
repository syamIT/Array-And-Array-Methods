// // ******************************* practice the array methods with 3 examples each *********************************

// // -------------- at() -------------
// // The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

let array1 = [4,6,2,6,8,3,9]
console.log(array1.at(0));
console.log(array1.at(-1));
console.log(array1.at(5));

// // --------------------- concat() -------------
// // The concat() method of Array instances is used to merge two or more arrays. 
// // This method does not change the existing arrays, but instead returns a new array.

let array2 = ['a','b','c','d']
let array3 = ['e','f','g','h']
let array4 = array2.concat(array3)
console.log(array4);
let array5 = array2.concat(array3,array4)
console.log(array5);
console.log(typeof(array5));
let letters = ['a','c','b']
let alphaNumeric = letters.concat([1,[2,4],4])
console.log(alphaNumeric);


// // ------------------ copyWithin() --------------
// // copyWithin(target, start, end)

let array6 = ['c','o','p','y','W','i','t','h','i','n']
console.log(array6.length);
array6.copyWithin(0,4,8)
console.log(array6);

array6.copyWithin(1)
console.log(array6);
array6.copyWithin(1,5,-1)
console.log(array6);

// // -------------------------length -----------------
// array7 = [1,2,3,4,5,6]
// console.log(array7.length);
// console.log(array7.length-1);
// console.log(array7.length+1);

// // ------------- isArray() ----------------
array8 = [1,3,5,7,9]
// console.log(isArray(array8));        //will not work because no 'Array' Constructor
console.log(Array.isArray([1, 3, 5]));       //will work because no 'Array' Constructor
// console.log(Array.isArray('[]'));            //will work because no 'Array' Constructor


// // ------------------ toString() --------------------
let arr_pl = ["JS","Java","python","CPP"];
console.log(arr_pl);
pl = arr_pl.toString()
console.log(pl);


// // --------------------- at() -----------------
let number_arr = [1,2,3,4,5]
console.log(number_arr.at(-1));
console.log(number_arr.at(1));
console.log(number_arr.at(0));


// //  ------------------------- pop() --------------
pop = [1,2,3,4,5,6]
console.log(pop);
console.log(pop.pop());
console.log(pop);

// // ------------------------ push() ------------------
push = ["e1","e2","e3","e4","e5"]
console.log(push);
push.push("e6")
console.log(push);


// // ---------------------- shift() --------------
shift = ["s1","s2","s3","s4"]
console.log(shift);
shift.shift()
console.log(shift);



// // ----------------------- unshift() -------------------
unshift = ["u1","u2","u3","u4"]
console.log(unshift);
unshift.unshift("");
unshift.unshift("u5");
console.log(unshift);



// // ----------------------- delete ------------
deleteNum = [1,2,3,4,5,6];
console.log(deleteNum);
delete deleteNum[1]
console.log(deleteNum);


// // --------------------- flat() ------------
flatArr = [0,1,2,[3,4,5],[6,7,8,9],[6,5,6,8,8,3,5,7]]
console.log(flatArr.flat());



// // --------------- flatMap() ------------------
const flatMap = [1,2,3,4,5]
flatMap.flatMap((x)=>[x*2])
console.log(flatMap.flatMap((y)=>[y*2]));


// // -------------------------- slice() -----------------
// // The slice() method slices out a piece of an array into a new array

// // The slice() method creates a new array.

// // The slice() method does not remove any elements from the source array.

const sliceArr = [1,2,3,4,5,6,7,8,9]
console.log(sliceArr.slice(0));
console.log(sliceArr.slice(4));
console.log(sliceArr.slice(-6));
res = sliceArr.slice(5)
console.log(res);



// // ------------------- splice() ---------------------


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);

const days = ['sun','mon','tues','wed']
console.log(days);
days.splice(2,0,'sat')
console.log(days);




// // **************************** *************************************************************
// // *********************** Even Numbers ******************************
let arr = [0,1,2,3,4,5,6,7,8,9,10]
function evenNum(arr){
    for(i = 0;i<=arr.length-1;i++){
        if(arr[i] % 2 == 0){
            console.log(arr[i]);
        }
    }
}
evenNum(arr);
