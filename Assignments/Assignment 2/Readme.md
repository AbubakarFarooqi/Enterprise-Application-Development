# Usage of Web Workers in Modern Web Applications

## Project Description
This project demonstrates the use of Web Workers to perform a time-consuming task (bubble sort) without affecting the main thread's responsiveness. It includes examples of sorting a large array both with and without Web Workers.

## How to Run Locally
1. Clone this repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Open the `index.html` file in a web browser.

### Sorting without Web Workers
- Open the browser console.
- Call the `sortWithoutWebWorkers()` function.

### Sorting with Web Workers
- Open the browser console.
- Call the `sortWithWebWorkers()` function.

## Performance Findings
Using Web Workers provides a significant improvement in performance when dealing with computationally intensive tasks. In this project, sorting a large array using Web Workers allows the main thread to remain responsive while the sorting is done in a separate background thread.

## Challenges Faced and Solutions
### Delay in Web Worker
- Challenge: Introducing a delay in the Web Worker for demonstration purposes.
- Solution: Used `setTimeout` within the `bubbleSort` function to simulate a time-consuming task.

### Communication between Main Thread and Web Worker
- Challenge: Passing data between the main thread and the Web Worker.
- Solution: Utilized the `postMessage` and `onmessage` APIs for communication.

## References and Resources
- MDN Web Docs: [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)

