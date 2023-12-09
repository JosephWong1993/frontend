(function () {
    // let person: { name: string; age: number; sayHi(): void } = {
    //   name: '刘老师',
    //   age: 18,
    //   sayHi() {}
    // }

    // let person1: { name: string; age: number; sayHi(): void }
    // 接口：
    interface IPerson {
        name: string;
        age: number;

        sayHi(): void;
    }

    let person: IPerson = {
        name: '刘老师',
        age: 18,
        sayHi() {
        }
    };
    console.log(person);
    let person1: IPerson = {
        name: 'jack',
        age: 16,
        sayHi() {
        }
    };
    console.log(person1);

    // 类型别名
    type typePerson = {
        name: string
        age: number
        sayHi(): void
    }

    let person3: IPerson = {
        name: '刘老师',
        age: 18,
        sayHi() {
        }
    };
    console.log(person3);

    // 接口继承
    interface Point2D {
        x: number;
        y: number;
    }

    // interface Point3D { x: number; y: number; z: number }

    // 使用 继承 实现复用：
    interface Point3D extends Point2D {
        z: number;
    }

    let p3: Point3D = {
        x: 1,
        y: 0,
        z: 0
    };
    console.log(p3);
})();