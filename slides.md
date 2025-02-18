---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Queue Data Structure
info: |
  ## Everything you need to know about Queue

# apply unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
---

# Queue Data Structure
<div></div>
Data Structure (Linear)
<br>
<br>
<a  target="blank" href="https://github.com/Rolalove/Queue_data_structure">Link to Repository</a>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space to learn more about Queue <carbon:arrow-right class="inline"/>
  </span>
</div>

<style>
h1 {
  background-color: #00FF00; 
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
a{
  color: white;
}

</style>

---

# Table of Contents ?

- <Link to="3">Understand the idea behind Queue</Link>
- <Link to="4"> What is Queue?</Link>
- <Link to="5"> Visual Representation Of Queue Data Structure</Link>
- <Link to="6">Types Of Queue</Link>
- <Link to="7"> Explanation Of Each Types Of Queue</Link>
- <Link to="10"> Applications of Queue</Link>
- <Link to="11">Implementation of Queues</Link>
- <Link to="13"> Basic Queue Operations</Link>

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Let understand the idea behind Queue ?

<div style="display: flex; justify-content: center;">
<img border="rounded" style="width: 60%; " src="/src/assets/stock-vector-bank-queue.jpg" alt="Queue-illustration">
</div>

<p><span text-red-500>Question: </span>What can you see from the image above?</P>
Let discuss!!!

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# What is Queue?

- Linear data structure (A linear data structure is a type of data structure that stores the data linearly or sequentially.)
- Open at both ends
- Operates on a **First In First Out (FIFO) principle**.
- Elements are inserted at the rear(back) of the queue
- Elements are removed from the front of the queue
<br>
<br>
<p class="text-red-500">NOTE: <span v-mark.circle.orange class="text-white">You can't access random elements in the queue!</span></p>
**Descriptive Explanation:** <br>
Imagine it like a line of people waiting to deposit in the bank. The first person who gets in line (the first element added) is the first to be attended to (the first element to be removed).
The end at which insertion takes place is called the REAR/TAIL(the line the customer enters to wait) while the end at which deletion takes place is called the FRONT/HEAD(the path the customer passes to leave).

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Visual Representation Of Queue Data Structure

<div style="display: flex; justify-content: center;">
<img class='0 auto' border="rounded" style="width: 70%; " src="/src/assets/queue-data-structure-visual-representation.jpg" alt="Queue-data-structure-visual-representation"> 
</div>

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Types Of Queue
<div></div>
<p>Basically we have four types of Queue:</p>
<div style="display: flex; justify-content: center;">
<img class='0 auto' border="rounded" style="width: 70%; " src="/src/assets/Types-of-queue.jpeg" alt="Types-of-queue"> 
</div>

<style scoped>
  h1 {
    color: #00FF00; 
  }
  p{
    color:  white;
    
  }
  
</style>

---

# Explanation Of Each Types Of Queue

- **Simple Queue:** In a simple queue, insertion occurs at the rear and removal occurs at the front. It strictly follows the FIFO (First in First out) principle.
  ![simple queue image Representation](https://cdn.programiz.com/sites/tutorial2program/files/simple-queue_0.png)
  <br>
- **Circular Queue:** A circular queue is an extended version of a linear queue as it follows the First In First Out principle with the exception that it connects the last node of a queue to its first by forming a circular link. This is useful when memory is limited and you only need to access the most recent elements.
  The circular queue solves the major limitation of the normal queue. In a normal queue, after a bit of insertion and deletion, there will be non-usable empty space.

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Explanation Of Each Types Of Queue (Cont'd)

<img width= "40%"  src="https://cdn.programiz.com/sites/tutorial2program/files/why-circular-queue.png" alt="limitation of normal queue">
Here, indexes 0 and 1 can only be used after resetting the queue (deletion of all elements). This reduces the actual size of the queue.

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Explanation Of Each Types Of Queue (Cont'd)
<v-clicks>

- **Piority Queue:** A priority queue is a special type of queue in which each element is associated with a priority and is served according to its priority. If elements with the same priority occur, they are served according to their order in the queue.

<ul class='text-blue'>
<li>Ascending Order Priority Queue: As the name suggests, in ascending order priority queue, the element with a lower priority value is given a higher priority in the priority list.</li>
<li>Descending Order Priority Queue: opposite of ascending order priority queue,the element with the highest value has the highest priority. </li>
</ul> 
<br>

- **Dequeue (Double-Ended Queue):** this type of queue allows insertion and deletion from both ends (front and rear). It acts like a queue with two access points, offering more flexibility than a linear queue.
</v-clicks>

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Applications of Queue
<v-clicks>

<ol>
<li>Task Scheduling: <br>
The operating system in your computer relies heavily on queues to manage tasks for the CPU. Processes are added to a queue, and the CPU picks up the first one in line for execution. This ensures fair allocation of processing power among multiple programs running on your computer.</li>
<li>Buffering:<br> Real-time Systems: Queues act as buffers between slow and fast devices. For instance, they can be used to temporarily store keystrokes typed on a keyboard until the CPU is ready to process them.</li>
<li>Other Applications:<br>Message Passing: Queues are a core component in many messaging systems. Messages are placed in a queue, ensuring they are delivered in the order they were sent, even if the recipient is unavailable.</li>
</ol>
</v-clicks>

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Implementation of Queues
<div></div>
Queues can be implemented using Two techniques:<br>

- Implementations of Queue Data Structure using Arrays
<br>

- Implementations of Queue Data Structure using Linked List

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Implementations of Queue Data Structure using Arrays
<div></div>
So how do we implement Queue using array?

<div>
1. Define the Queue Class:

- Create a class named Queue to represent the queue data structure.<br>

2. Initialize Properties in the Constructor

- Inside the Queue class constructor, define the following properties:
- maxSize: This integer value specifies the maximum number of elements the queue can hold (assuming a fixed-size array implementation).
- queue: This is an empty array that will store the queue elements.
- front: This integer variable acts as a pointer to the front element of the queue. Initially, set it to 0 to indicate an empty queue.
- rear: This integer variable acts as a pointer to the last element added to the queue. Initially, set it to 0 as well.
</div>

<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

# Basic Queue Operations
<div></div>

Enqueue(): Process of adding or storing an element to the end of the queue.

dequeue(): Process of removing or accessing an element from the front of the queue.

peek(): Used to get the element at the front of the queue without removing it.

isEmpty(): Checks if the queue is empty.

Size(): Finds the number of elements in the queue



<style scoped>
  h1 {
    color: #00FF00; 
  }
</style>

---

### How to Create a Queue data structure using a class in JavaScript.

```js {monaco-run}
class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = []; //Initialize an empty array to represent the queue
    this.front = this.rear = 0;
  }
  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
  enqueue(element) {
    this.queue.push(element);
    return this
  }
  dequeue() {
    // removing element from the queue
    if (this.isEmpty()) {
      return "Queue overflow";
    }
    else (this.queue.shift()){
      return this;
    }
  }
  peak() {
    if (this.isEmpty()) {
      return "No elements in the queue";
    } else {
      return this.queue[this.front];
    }
  }
  size(){
    return this.queue.length
  }
}

const myQueue = new Queue(5);
console.log(myQueue);
//checks if the queue is empty
console.log(myQueue.isEmpty());
myQueue.enqueue(10).enqueue(55).enqueue(5).enqueue(9).enqueue(7);
console.log(myQueue);
console.log(myQueue.isEmpty());
myQueue.dequeue().dequeue();
console.log(myQueue);
console.log(myQueue.peak());
console.log(myQueue.size())
```
<style>
  h3 {
    color: #00FF00; 
  }
  .slidev-monaco-container {
  @apply overflow-scroll max-h-screen-sm ;
  max-height: 450px;

}
</style>
