// Function to perform bubble sort without using web workers
function sortWithoutWebWorkers() {
    // Create a large array (for demonstration purposes)
    const largeArray = Array.from({ length: 1000000 }, () => Math.floor(Math.random() * 1000000));

    // Perform bubble sort and get the number of iterations
    let iterations = bubbleSort(largeArray);

    // Show alert and log the result
    alert(`Sorted after ${iterations} iterations`);
    console.log(`Sorted after ${iterations} iterations`);
}

// Function to perform bubble sort using web workers
function sortWithWebWorkers() {
    // Create a web worker
    const myWorker = new Worker("worker.js");

    // Send a message to the web worker to start sorting
    myWorker.postMessage("Sort");

    // Listen for messages from the web worker
    myWorker.onmessage = function (event) {
        // Show alert and log the result received from the web worker
        alert(`Sorted after ${event.data} iterations`);
        console.log(`Sorted after ${event.data} iterations`);
    };
}

// Function to increment a counter displayed in the DOM
function incrementCounter() {
    // Get the counter element from the DOM
    let counter = document.getElementById("counter");

    // Increment the counter and update the DOM
    counter.textContent = parseInt(counter.textContent, 10) + 1;
}

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

    return iterations;
}
