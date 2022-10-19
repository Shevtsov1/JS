//  Make the Group class from the previous exercise iterable. 

//  If you used an array to represent the group’s members,
//  don’t just return the iterator created by calling the Symbol.iterator method on the array.
//  That would work, but it defeats the purpose of this exercise.

class Group {

    constructor() {
        this.group = [];
    }
    
    add(value) {
        if(!this.group.includes(value)) {
                this.group.push(value);
        }
    }

    delete(value) {
        if(this.group.includes(value)){
            const removable = this.group.indexOf(value);
            delete this.group[removable];
        }
    }

    has(value) {
        if(this.group.indexOf(value) !== -1) {
            return true;
        }
        return false;
    }

    static from(iterable) {
        let group = new Group();
        for(let element of iterable){
            group.add(element);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    constructor(elements) {
        this.currentIndex = 0;
        this.group = elements.group;
    }

    next() {
        if (this.currentIndex ==  this.group.length) {
            return {done: true};
        } else {
            let value = this.group[this.currentIndex];
            this.currentIndex++;
            return  {value, done: false};
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  // → a
  // → b
  // → c
