(function () {
    // 枚举：
    // enum Direction {
    //     Up,
    //     Down,
    //     Left,
    //     Right
    // }
    // 成员设置初始值：
    // enum Direction {
    //     Up = 10,
    //     Down,
    //     Left,
    //     Right
    // }
    // enum Direction {
    //     Up = 2,
    //     Down = 4,
    //     Left = 8,
    //     Right = 16
    // }
    var Direction;
    (function (Direction) {
        Direction["Up"] = "UP";
        Direction["Down"] = "DOWN";
        Direction["Left"] = "LEFT";
        Direction["Right"] = "RIGHT";
    })(Direction || (Direction = {}));
    function changeDirection(direction) {
        console.log(direction);
    }
    changeDirection(Direction.Up);
})();
