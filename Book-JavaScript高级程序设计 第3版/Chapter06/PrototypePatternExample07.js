function Person() {

}

//  对象字面量
Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayname: function () {
        console.log(this.name);
    }
};

var friend = new Person();
console.log(friend instanceof Object);      //true
console.log(friend instanceof Person);      //true
console.log(friend.constructor == Person);  //false
console.log(friend.constructor == Object);  //true