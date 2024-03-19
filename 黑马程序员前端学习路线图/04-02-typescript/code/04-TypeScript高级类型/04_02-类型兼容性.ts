(function () {
    // 两个类的兼容性演示：
    class Point {
        x: number;
        y: number;
    }

    class Point2D {
        x: number;
        y: number;
    }

    const p: Point = new Point2D();
    console.log(p);

    class Point3D {
        x: number;
        y: number;
        z: number;
    }

    const p1: Point = new Point3D();
    console.log(p1);

    // 错误演示
    // const p2: Point3D = new Point();
})();

// 接口兼容性
(function () {
    interface Point {
        x: number;
        y: number;
    }

    interface Point2D {
        x: number;
        y: number;
    }

    interface Point3D {
        x: number;
        y: number;
        z: number;
    }

    let p1: Point;
    let p2: Point2D;
    let p3: Point3D;

    // 正确：
    p1 = p2;
    p2 = p1;
    p1 = p3;

    // 错误演示：
    // p3 = p1;

    // 类和接口之间也是兼容的
    class Point4D {
        x: number;
        y: number;
        z: number;
    }

    p2 = new Point4D();
    console.log(p2);
})();

// 函数兼容性 函数参数个数
(function () {
    // 参数个数： 参数少的可以赋值给参数多的
    type F1 = (a: number) => void
    type F2 = (a: number, b: number) => void

    let f1: F1 = (a) => {
        console.log(a);
    };
    let f2: F2 = (a, b) => {
        console.log(a, b);
    };

    f2 = f1;
    console.log(f2);
    // 错误演示：
    // f1 = f2
})();

// 函数兼容性 函数参数类型
(function () {
    // 参数类型： 相同位置的参数类型要相同或兼容
    interface Point2D {
        x: number;
        y: number;
    }

    interface Point3D {
        x: number;
        y: number;
        z: number;
    }

    type F2 = (p: Point2D) => void // 相当于有 2 个参数
    type F3 = (p: Point3D) => void // 相当于有 3 个参数

    let f2: F2 = (p) => {
        console.log(p);
    };
    let f3: F3 = (p) => {
        console.log(p);
    };

    f3 = f2;
    console.log(f3);
    // f2 = f3;
    // console.log(f2);
})();

// 函数兼容性 返回值类型
(function () {
    // 返回值类型，只需要关注返回值类型本身即可

    // 原始类型：
    type F5 = () => string
    type F6 = () => string

    let f5: F5 = () => {
        return 'f5';
    };
    let f6: F6 = () => {
        return 'f6';
    };
    // f6 = f5;
    // f5 = f6;

    // 对象类型：
    type F7 = () => { name: string }
    type F8 = () => { name: string; age: number }

    let f7: F7 = () => {
        return {name: 'f7'};
    };
    let f8: F8 = () => {
        return {name: 'f8', age: 18};
    };

    f7 = f8;
    // 错误演示;
    // f8 = f7;
    console.log(f7);
})();