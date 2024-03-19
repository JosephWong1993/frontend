(function () {
    let str1 = 'Hello TS';
    console.log(str1);
    const str2: 'Hello TS' = 'Hello TS';
    console.log(str2);
    let age: 18 = 18;
    console.log(18);

    // 使用模式：字面量类型配合联合类型一起使用。
    // 使用场景：用来表示一组明确的可选值列表。
    function changeDirection(direction: 'up' | 'down' | 'left' | 'right') {
        console.log(direction);
    }

    changeDirection('left');

})();