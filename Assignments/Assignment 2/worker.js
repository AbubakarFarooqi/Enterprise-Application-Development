// Listen for messages from the main thread
onmessage = function (e) {
    // Generate a large array for sorting (for demonstration purposes)
    const largeArray = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));

    // Perform bubble sort on the array and get the number of iterations
    let iterations = bubbleSort(largeArray);

    // Send the result (number of iterations) back to the main thread
    this.postMessage(iterations);
};

// Function to perform bubble sort with a delay
function bubbleSort(arr) {
    let swapped;
    let iterations = 0;

    do {
        swapped = false;

        for (let i = 0; i < arr.length - 1; i++) {
            // Introduce a delay to slow down the sorting process
            // This setTimeout is for demonstration purposes and should not be used in production code
            setTimeout(() => {
                if (arr[i] > arr[i + 1]) {
                    // Swap elements if they are in the wrong order
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                    swapped = true;
                }
            }, 0);

            iterations++;
        }
    } while (swapped);

    // Return the number of iterations
    return iterations;
}
