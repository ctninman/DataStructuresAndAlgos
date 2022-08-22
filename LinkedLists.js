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


// LINKED LIST POP

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

	pop() {
			if(!this.head) return undefined
			let temp = this.head
			let pre = this.head
			while(temp.next) {
					pre = temp
					temp = temp.next
			}
			this.tail = pre
			this.tail.next = null
			this.length--
			if(this.length === 0) {
					this.head = null
					this.tail = null
			}
			return temp
	}
}

let myLinkedList = new LinkedList(1)
myLinkedList.push(2)


// LINKED LIST UNSHIFT

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

	pop() {
		 if(!this.head) return undefined
		 let temp = this.head
		 let pre = this.head
		 while(temp.next) {
				 pre = temp
				 temp = temp.next
		 }
		 this.tail = pre
		 this.tail.next = null
		 this.length--
		 if(this.length === 0) {
				 this.head = null
				 this.tail = null
		 }
		 return temp
 }

	unshift(value) {
			const newNode = new Node(value)
			if(!this.head) {
					this.head = newNode
					this.tail = newNode
			} else {
					newNode.next = this.head
					this.head = newNode
			}
			this.length++
			return this
	}

}

let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)


// LINKED LIST SHIFT

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

	pop() {
		 if(!this.head) return undefined
		 let temp = this.head
		 let pre = this.head
		 while(temp.next) {
				 pre = temp
				 temp = temp.next
		 }
		 this.tail = pre
		 this.tail.next = null
		 this.length--
		 if(this.length === 0) {
				 this.head = null
				 this.tail = null
		 }
		 return temp
 }

	unshift(value) {
			const newNode = new Node(value)
			if(!this.head) {
					this.head = newNode
					this.tail = newNode
			} else {
					newNode.next = this.head
					this.head = newNode
			}
			this.length++
			return this
	}

	shift() {
			if(!this.head) return undefined
			let temp = this.head
			this.head = this.head.next
			this.length--
			if(this.length === 0) {
					this.tail = null
			}
			temp.next = null
			return temp
	}

}

let myLinkedList = new LinkedList(2)
myLinkedList.push(1)


// LINKED LIST GET

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

	pop() {
		 if(!this.head) return undefined
		 let temp = this.head
		 let pre = this.head
		 while(temp.next) {
				 pre = temp
				 temp = temp.next
		 }
		 this.tail = pre
		 this.tail.next = null
		 this.length--
		 if(this.length === 0) {
				 this.head = null
				 this.tail = null
		 }
		 return temp
 }

	unshift(value) {
			const newNode = new Node(value)
			if(!this.head) {
					this.head = newNode
					this.tail = newNode
			} else {
					newNode.next = this.head
					this.head = newNode
			}
			this.length++
			return this
	}

	shift() {
			if(!this.head) return undefined
			let temp = this.head
			this.head = this.head.next
			this.length--
			if(this.length === 0) {
					this.tail = null
			}
			temp.next = null
			return temp
	}

	get(index) {
			if(index < 0 || index >= this.length) return undefined
			let temp = this.head
			for(let i = 0; i < index; i++) {
					temp = temp.next
			}
			return temp
	}
}

let myLinkedList = new LinkedList(0)
myLinkedList.push(1)
myLinkedList.push(2)
myLinkedList.push(3)


// LINKED LIST SET 

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

	pop() {
		 if(!this.head) return undefined
		 let temp = this.head
		 let pre = this.head
		 while(temp.next) {
				 pre = temp
				 temp = temp.next
		 }
		 this.tail = pre
		 this.tail.next = null
		 this.length--
		 if(this.length === 0) {
				 this.head = null
				 this.tail = null
		 }
		 return temp
 }

	unshift(value) {
			const newNode = new Node(value)
			if(!this.head) {
					this.head = newNode
					this.tail = newNode
			} else {
					newNode.next = this.head
					this.head = newNode
			}
			this.length++
			return this
	}

	shift() {
			if(!this.head) return undefined
			let temp = this.head
			this.head = this.head.next
			this.length--
			if(this.length === 0) {
					this.tail = null
			}
			temp.next = null
			return temp
	}

	get(index) {
			if(index < 0 || index >= this.length) return undefined
			let temp = this.head
			for(let i = 0; i < index; i++) {
					temp = temp.next
			}
			return temp
	}

	set(index, value) {
			let temp = this.get(index)
			if(temp) {
					temp.value = value
					return true
			}
			return false
	}

}

let myLinkedList = new LinkedList(11)
myLinkedList.push(3)
myLinkedList.push(23)
myLinkedList.push(7)