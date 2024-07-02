class Queue {
    constructor(maxSize) {
      this.maxSize = maxSize;
      this.queue = [];
      this.front = this.rear = -1;
    }
     // Check if the queue is empty
  isEmpty() {
    return this.front === -1;
  }

  // Check if the queue is full (relevant for fixed-size array)
  isFull() {
    return this.rear === this.maxSize - 1;
  }

  getSize() {
    if (this.isEmpty()) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  // Enqueue (Insert) operation
  enqueue(data) {
    if (this.isFull()) {
      console.error("Queue overflow");
    } else {
      if (this.front === -1) {
        this.front = 0;
      }
      this.rear++;
      this.queue[this.rear] = data;
      console.log("Enqueued:", data);
    }
  }
  peek() {
    if (this.isEmpty()) {
      console.error("Queue is empty");
      return null;
    } else {
      return this.queue[this.front];
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.error("Queue underflow");
      return null;
    } else {
      const data = this.queue[this.front];
      delete this.queue[this.front]; // Clear the element for better memory management
      if (this.front === this.rear) {
        this.front = this.rear = -1;
      } else {
        this.front++;
      }
      console.log("Dequeued:", data);
      return data;
    }
  }
  }
  const myQueue = new Queue(5); // Create a queue with max size 5
  console.log(myQueue)//Queue { maxSize: 5, queue: [], rear: -1, front: -1 }
  console.log(myQueue.isEmpty()) //true
  console.log(myQueue.getSize()) //0
  
myQueue.enqueue(10); //[ 'Enqueued:', 10 ]
myQueue.enqueue(20); //[ 'Enqueued:', 20 ]
myQueue.dequeue();   //[ 'Dequeued:', 10 ]
myQueue.enqueue(30); //[ 'Enqueued:', 30 ]
myQueue.enqueue(40); //[ 'Enqueued:', 40 ]
myQueue.dequeue(); //[ 'Dequeued:', 20 ]
const frontElement = myQueue.peek();
console.log("Front element (without removing):", frontElement); // Output: Front element (without removing): 10