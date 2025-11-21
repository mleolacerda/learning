// Exercise 1.2-2
for (let n = 1; n <= 64; n++) {  
    let insertionSortTime = 8 * (n**2);  
    let mergeSortTime = 64 * n * Math.log2(n);  
    if (insertionSortTime > mergeSortTime) {  
        console.log(`insertion sort greater than merge sort for n equal to ${n}`);  
    }  
    else if (insertionSortTime == mergeSortTime) {  
        console.log(`insertion sort equal to merge sort for n equal to ${n}`);  
    } else {  
        console.log(`insertion sort smaller than merge sort for n equal to ${n}`);  
    }
}

// Exercise 1.2-3
for (let n = 1; n <= 100; n++) {  
    let firstAlgorithm = 100 * (n**2);  
    let secondAlgorithm = 2**n;  
    if (firstAlgorithm > secondAlgorithm) {  
        console.log(`first algorithm greater than second algorithm for n equal to ${n}`);  
    }  
    else if (firstAlgorithm == secondAlgorithm) {  
        console.log(`first algorithm equal to second algorithm for n equal to ${n}`);  
    } else {  
        console.log(`first algorithm smaller than second algorithm for n equal to ${n}`);  
    }  
}  

// Exercise 2.1-2
function insertionSort(array) {
    for (let j = 0; j < array.length; j++) {
        let element = array[j];
        let i = j - 1;
        
        while (array[i] < element && i >= 0) {
            array[i + 1] = array[i];
            i = i - 1;
        }
        
        array[i + 1] = element;
    }
    
    return array;
}

// Exercise 2.1-3
function  linearSearch(array, value) {
    let position = [];
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            position.push(i);
        }
    }
    if (position.length === 0) {
        return console.log(`This value doesn't exist in that sequence`);
    }

    return console.log(`The value was found in position ${position}`);
}
