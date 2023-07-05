function add(x: number, y: number): number {
    return x + y;
}

const result = add(100, 1000);

console.log(result);

// return 'hello';
// module.exports = 'hello';
// module.exports = 666;
module.exports = function (msg) {
    console.log(msg);
}