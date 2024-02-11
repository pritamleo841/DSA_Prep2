
var RandomizedSet = function() {
    //The class RandomizedSet uses a vector v to store the elements 
    //and an unordered map mp to store the mapping of elements to their indices in the vector.
    this.list=[];
    this.map=new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    //The insert function adds a value to the set if it's not already present.
    //It appends the value to the vector and updates the unordered map with its index.
    if(this.map.has(val))return false;
    this.list.push(val);
    this.map.set(val,this.list.length-1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    //The remove function removes a value from the set if it's present.
    //It replaces the value with the last element in the vector, 
    //updates the index in the unordered map, and then removes the last element.
    if(!this.map.has(val))return false;
    const index=this.map.get(val);
    this.list[index]=this.list[this.list.length-1];
    this.map.set(this.list[index],index);
    this.list.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx=Math.floor(Math.random()*this.list.length);
    return this.list[randomIdx];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */