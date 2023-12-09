(function () {
    console.log(typeof 'Hello TS'); // string

    let p = {x: 1, y: 2};

// function formatPoint(point: { x: number; y: number }) {}
    function formatPoint(point: typeof p) {
        console.log(point);
    }

    formatPoint({x: 1, y: 100});

    let num: typeof p.x;

    function add(num1: number, num2: number) {
        return num1 + num2;
    }

    let ret = typeof add;
    console.log(ret);
})();
