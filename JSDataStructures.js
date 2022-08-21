// SCOTT'S DATA AND ALGO COURSE (VISUAL)

// JAVASCRIPT CLASS CONSTRUCTOR
class Cookie {
	constructor(color) {
			this.color = color
	}
	getColor() {
			return this.color
	}
	setColor(color) {
			this.color = color
	}
}

let cookieOne = new Cookie('green')
let cookieTwo = new Cookie('blue')


// +++++++ LINKED LISTS

// LINKED LIST CONSTRUCTOR
class Node {
	constructor(value){
			this.value = value
			this.next = null
	}
}

class LinkedList {
	constructor(value) {
			const newNode = new Node(value)
			this.head = newNode
			this.tail = this.head
			this.length = 1
	}
}

let myLinkedList = new LinkedList(4)


// LINKED LIST PUSH
class Node {
	constructor(value){
			this.value = value
			this.next = null
	}
}

class LinkedList {
	constructor(value) {
			const newNode = new Node(value)
			this.head = newNode
			this.tail = this.head
			this.length = 1
	}

	push(value) {
			const newNode = new Node(value)
			if (!this.head) {
					this.head = newNode
					this.tail = newNode
			} else {
					this.tail.next = newNode
					this.tail = newNode
			}
			this.length++
			return this
	}
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)










// Hash Mapping ???
// Does array1 contain the same item as array2?

array1 = ['a', 'b', 'c', 'x']
array2 = ['r', 't', 'x']

function containsCommonItem (arr1, arr2) {
	let map ={}
	for (let i=0; i < arr1.length; i++) {
		if (!map[arr1[i]]) {
			const item = arr1[i];
			map[item] = true;
		}
	}
	for (let j=0; j < arr2.length; j++) {
		if (!map[arr2[j]]) {
			return true
		}
	}
	return false
}

function containsCommonItem2 (arr1, arr2) {
	return arr1.some(item => arr2.includes(item))
}

// LINKED LIST

//ll