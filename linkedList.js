export default class LinkedList {
  constructor() {
    this.root = null;
  }

  append(key, value) {
    // If the list is empty, set the root to a new node with the key-value pair.
    if (!this.root) {
      this.root = new Node(key, value);
      return;
    }

    // Otherwise, find the end of the list or an existing key to update.
    let current = this.root;
    while (current.nextNode) {
      if (current.key === key) {
        current.value = value; // Update existing key.
        return;
      }
      current = current.nextNode;
    }

    // Check the last node for the key.
    if (current.key === key) {
      current.value = value;
    } else {
      current.nextNode = new Node(key, value); // Append new key-value pair.
    }
  }

  prepend(key, value) {
    const newNode = new Node(key, value, this.root);
    this.root = newNode;
  }

  pop() {
    if (!this.root) return "List is empty"; // No nodes to pop.

    if (!this.root.nextNode) {
      const popped = this.root;
      this.root = null; // Remove the only node in the list.
      return popped;
    }

    let current = this.root;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    // Now current is at the second to last node.
    const popped = current.nextNode;
    current.nextNode = null; // Remove the last node.
    return popped;
  }
  at(index) {
    let current = this.root;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null; // Index out of range
  }
  removeAt(index) {
    if (index < 0 || index >= this.size) throw new Error("Index out of bounds");

    if (index === 0) {
      this.root = this.root.nextNode;
      return;
    }

    let current = this.at(index - 1);
    if (!current || !current.nextNode) return "No such item";

    current.nextNode = current.nextNode.nextNode;
  }

  contains(key) {
    let current = this.root;
    while (current) {
      if (current.key === key) return true;
      current = current.nextNode;
    }
    return false;
  }
  find(key) {
    let current = this.root;
    while (current) {
      if (current.key === key) {
        return current.value; // Return the index where the key is found
      }
      current = current.nextNode;
    }
    return null; // Key not found
  }

  getValueByKey(key) {
    let current = this.root;
    while (current) {
      if (current.key === key) return current.value;
      current = current.nextNode;
    }
    return null;
  }

  removeByKey(key) {
    if (!this.root) return false;

    if (this.root.key === key) {
      this.root = this.root.nextNode;
      return true;
    }

    let current = this.root;
    while (current.nextNode) {
      if (current.nextNode.key === key) {
        current.nextNode = current.nextNode.nextNode;
        return true; // Stop and return true once the node is removed
      }
      current = current.nextNode;
    }
    return false; // Key not found
  }

  toString() {
    if (!this.root) return "( null )";

    let current = this.root;
    let result = "";
    while (current) {
      result += `(${current.key}: ${current.value}) --> `;
      current = current.nextNode;
    }
    return result + "( null )";
  }

  insertAt(key, value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }
    if (index === 0) {
      const newNode = new Node(key, value, this.root);
      this.root = newNode;
      return;
    }

    let current = this.root;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }
    current.nextNode = new Node(key, value, current.nextNode);
  }

  get size() {
    let tmp = this.root;
    let count = 0;
    while (tmp) {
      count++;
      tmp = tmp.nextNode;
    }
    return count;
  }

  get head() {
    return this.root;
  }
  get tail() {
    let tmp = this.root;
    if (!tmp) return null;
    while (tmp.nextNode) {
      tmp = tmp.nextNode;
    }
    return tmp;
  }
}

class Node {
  constructor(key, value, nextNode = null) {
    this.key = key;
    this.value = value;
    this.nextNode = nextNode;
  }
}
