class LinkedListNode {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const node = new LinkedListNode();
        node.value = value;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
    }

    prepend(value) {
        const node = new LinkedListNode();
        node.value = value;
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
        }
        this.head = node;
    }

    size () {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    head () {
        return this.head;
    }

    tail () {
        return this.tail;
    }

    at(index) {
        let count = 0;
        let node = this.head;
        while (node) {
            if (count === index) {
                return node;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    pop () {
        if (this.head === null) {
            return null;
        }
        const node = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
            return node;
        }
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        this.tail = current;
        this.tail.next = null;
        return node;
    }

    contains(value) {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    find(value) {
        let count = 0;
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return count;
            }
            count++;
            node = node.next;
        }
        return null;
    }

    toString() {
        let node = this.head;
        let str = '';
        while (node) {
            str += '( ' + node.value + ' ) -> ';
            node = node.next;
        }
        str += 'null';
        return str;
    }
}

const dogs = new LinkedList();
dogs.append('Bulldog');
dogs.append('Beagle');
dogs.append('Labrador');
dogs.append('Husky');
console.log (dogs.toString());
dogs.pop();
console.log (dogs.toString());