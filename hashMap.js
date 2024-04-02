import LinkedList from "./linkedList.js";

class HashMap {
  #lengthNum = 0;

  constructor(capacity = 15) {
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.size);
    }

    return hashCode % this.size;
  }

  set(key, value) {
    const indexForKey = this.hash(key);
    let val = this.buckets[indexForKey].append(key, value);
    if (val !== null) this.#lengthNum++;
    return this.buckets[indexForKey];
  }
  get(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey].find(key);
  }

  has(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey].contains(key);
  }
  remove(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey].removeByKey(key);
  }
  length() {
    return this.#lengthNum;
  }
  clear() {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
    this.#lengthNum = 0;
  }

  keys() {
    let keyHolder = [];
    this.buckets.forEach((item) => {
      let itemRoot = item.root;
      if (itemRoot) {
        while (itemRoot) {
          keyHolder.push(itemRoot.key);
          itemRoot = itemRoot.nextNode;
        }
      }
    });
    return keyHolder;
  }
  values() {
    let valueHolder = [];
    this.buckets.forEach((item) => {
      let itemRoot = item.root;
      if (itemRoot) {
        while (itemRoot) {
          valueHolder.push(itemRoot.value);
          itemRoot = itemRoot.nextNode;
        }
      }
    });
    return valueHolder;
  }
  entries() {
    let valueHolder = [];
    this.buckets.forEach((item) => {
      let itemRoot = item.root;
      if (itemRoot) {
        while (itemRoot) {
          valueHolder.push([itemRoot.key, itemRoot.value]);
          itemRoot = itemRoot.nextNode;
        }
      }
    });
    return valueHolder;
  }

  get size() {
    return this.buckets.length;
  }
}

class HashSet {
  #lengthNum = 0;

  constructor(capacity = 15) {
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
  }
  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + (key.charCodeAt(i) % this.size);
    }

    return hashCode % this.size;
  }

  set(key) {
    const indexForKey = this.hash(key);
    let val = this.buckets[indexForKey].append(key);
    if (val !== null) this.#lengthNum++;
    return this.buckets[indexForKey];
  }
  get(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey];
  }

  has(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey].contains(key);
  }
  remove(key) {
    const indexForKey = this.hash(key);
    return this.buckets[indexForKey].removeByKey(key);
  }
  length() {
    return this.#lengthNum;
  }
  clear() {
    this.buckets = Array.from({ length: 16 }, () => new LinkedList());
    this.#lengthNum = 0;
  }

  keys() {
    let keyHolder = [];
    this.buckets.forEach((item) => {
      let itemRoot = item.root;
      if (itemRoot) {
        while (itemRoot) {
          keyHolder.push(itemRoot.key);
          itemRoot = itemRoot.nextNode;
        }
      }
    });
    return keyHolder;
  }

  get size() {
    return this.buckets.length;
  }
}

let hashMapTest = new HashSet();
hashMapTest.set("eren");
hashMapTest.set("erne");
hashMapTest.set("ener");

console.log(hashMapTest.get("erne"));
