//  Do the below programs in anonymous function & IIFE & Arrow functions
// Print odd numbers in an array
// Anonymous
let printoddNumber = function (arr) {
    for (let i = 0; i< arr.length; i++){
        if (arr[i]%2 !=0){
            console.log(arr[i]);
        }
    }
};
printoddNumber([1, 2, 3, 4, 5, 6, 7]);
// IIFE 
(function printoddNumber (arr) {
    {
        for (let i = 0; i< arr.length; i++){
            if (arr[i]%2 !=0){
                console.log(arr[i]);
            }
        }
    };
})([1, 2, 3, 4, 5, 6, 7]);

// Using arrow function and filter
let printOdd = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

printOdd([1, 2, 3, 4, 5, 6, 7]);

// Convert all the strings to title caps in a string array
// Using anonymous function
let toTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};
console.log(toTitleCaps(["hello", "world"]));

// Using IIFE
let titleCaps = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world"]);
console.log(titleCaps);

// Using arrow function
let TitleCaps = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

console.log(TitleCaps(["hello", "world"]));

// Sum of all numbers in an array
// Using anonymous function
let sumNumbers = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};
console.log(sumNumbers([1, 2, 3, 4, 5, 6, 7]));

// Using IIFE
let totalSum = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})([1, 2, 3, 4, 5, 6, 7]);
console.log(totalSum);

// Using arrow function
let sum = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sum([1, 2, 3, 4, 5, 6, 7]));

// Return all the prime numbers in an array
// Using anonymous function
let findPrimes = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) 
            return false;
        }
        return true;
    });
};
console.log(findPrimes([1, 2, 3, 4, 5, 6, 7]));

// Using IIFE
let primes = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) 
            return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7]);
console.log(primes);

// Using arrow function
let findPrime = arr => arr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(findPrime([1, 2, 3, 4, 5, 6, 7]));

// Return all the palindromes in an array
// Using anonymous function
let findPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    });
};
console.log(findPalindromes(["level", "hello", "radar", "world"]));

// Using IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    });
})(["level", "hello", "radar", "world"]);
console.log(palindromes);

// Using arrow function
let findPalindrome = arr => arr.filter(str => str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));

console.log(findPalindrome(["level", "hello", "radar", "world"]));


// Return median of two sorted arrays of the same size.
// Using anonymous function
let findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
};
console.log(findMedianSortedArrays([1, 3], [2, 4]));

// Using IIFE
let median = (function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
})([1, 3], [2, 4]);
console.log(median);

// Using arrow function
let findMedianSortedArray = (nums1, nums2) => {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = merged.length;
    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
};

console.log(findMedianSortedArray([1, 3], [2, 4]));

// Remove duplicates from an array
// Using anonymous function
let removeDuplicates = function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// Using IIFE
let uniqueArray = (function(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

// Rotate an array by k times
// Using anonymous function
let rotateArray = function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(len - k).concat(arr.slice(0, len - k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2));

// Using IIFE
let rotated = (function(arr, k) {
    let len = arr.length;
    k = k % len;
    return arr.slice(len - k).concat(arr.slice(0, len - k));
})([1, 2, 3, 4, 5], 2);
console.log(rotated);