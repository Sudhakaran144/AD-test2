console.log("Question 1")
 
function sumArray(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum
}

console.log(sumArray([1,2,3,4,5]))
console.log(sumArray([3,4,5]))
console.log(sumArray([1,2,3,4,5,4,6,7,7,4.]))


console.log("Question 2")

function uniqueValue(arr){
    arr.sort()
    let res = []
    for(let i = 0;i<arr.length;i++){
         if(arr[i] != arr[i+1]){
            res.push(arr[i])
         }
    }
    return res
    
}

console.log(uniqueValue([1,2,3,3,4,4,5]))
console.log(uniqueValue([3,5,4,3,2,1,8,8,4]))


console.log("Question 3")

function concat(arr1,arr2){
    let res = [...arr1,...arr2]
    return res
}

console.log(concat([1,2,3,4,5],[1,2,3,4]))
console.log(concat([1,2,3],[4,5]))

console.log("Question 4")

function intersect(arr1,arr2){
    let res = []
    for(let i = 0;i<arr1.length;i++){
        for(let j = 0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                res.push(arr2[j])
            }
        }
    }
    return res
}

console.log(intersect([1,2,3,4],[3,4,5,6]))
console.log(intersect([2,3,4,5],[1,2,3,4]))

console.log("Question 5")

function palindrome(word){
    let str = ""
    for(let i = 0;i<word.length;i++){
        str = word.charAt(i) + str
    }
    if(str === word){
    return true
    }
    else{
    return false
    }
}

console.log(palindrome("peace"))
console.log(palindrome("madam"))
console.log(palindrome("malayalam"))
