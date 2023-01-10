/*

Write a new class , similar to the class from Chapter 6, which stores a set of values. Like , it has , , and methods.PGroupGroupGroupadddeletehas
Its method, however, should return a new instance with the given member added and leave the old one unchanged.
Similarly, creates a new instance without a given member.addPGroupdelete

The class should work for values of any type, not just strings.
It does not have to be efficient when used with large amounts of values.

The constructor shouldn’t be part of the class’s interface (though you’ll definitely want to use it internally).
Instead, there is an empty instance, , that can be used as a starting value.PGroup.empty

*/

class PGroup {
    constructor(inputArray) {
      this.group = inputArray;
    }
    
    add(value) {
      if (this.has(value)) return this;
      return new PGroup([this.group, value]);
    }
    
    delete(value) {
      if (!this.has(value)) return this;
      return new PGroup(this.group.filter(x => x !== value));
    }
    
    has(value) {
      return this.group.includes(value);
    }
    
  }
  
  PGroup.empty = new PGroup([]);
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false