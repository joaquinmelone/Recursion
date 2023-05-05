// Merge Sort recursion

function mergeSortRec(array) {

    // Base case for the recursion, an array with one single element is already sorted
    if (array.length <= 1) {
        return array;
    }

    // If the array contains more than one element
    else {
        let mid = array.length / 2;

        const leftSide = mergeSortRec(array.slice(0, mid));
        const rightSide = mergeSortRec(array.slice(mid, array.length));

        // Temporary array for putting all of the sorted elements (it's going to be created and returned in every single iteration of the loop)
        let mergedArray = [];

        // If one the sides has more than one element keep executing the while loop because there's more elements to sort
        while(leftSide.length > 0 || rightSide.length > 0) {

            // If both arrays have elements inside then we have to compare them in order to know how to sort them
            if (leftSide.length > 0 && rightSide.length > 0) {
                if (rightSide[0] < leftSide[0]) {
                    mergedArray.push(rightSide[0]);

                    // Remove the first element of the right side array because otherwise you are always comparin the same numbers
                    rightSide.shift();
                }

                else if (leftSide[0] < rightSide[0]) {
                    mergedArray.push(leftSide[0]);

                    // Same for left side
                    leftSide.shift();
                }
            }

            // If one of the sides is empty then there's nothing else to do besides just copying the remaining elements of the other's side array
            else if (leftSide.length <= 0) {
                while(rightSide.length > 0) {
                    mergedArray.push(rightSide[0]);

                    rightSide.shift();
                }
            }

            else if (rightSide.length <= 0) {
                while(leftSide.length > 0) {
                    mergedArray.push(leftSide[0]);

                    leftSide.shift();
                }
            }
        }

        // Return the merged array in every single iteration and finally the sorted array to the user
        return mergedArray;
    }
}

// Note for myself (cause i had some counfusion about it): The mergedArray return statement works because every time we split the array into sub arrays
// and we sort them then we have to return that subarray to its parent array, and finally, that return statement its the one that escapes the function