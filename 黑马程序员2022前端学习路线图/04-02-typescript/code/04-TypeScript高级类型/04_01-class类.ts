// 构造函数
(function () {
    class Person {
        age: number;
        gender: string;

        constructor(age: number, gender: string) {
            this.age = age;
            this.gender = gender;
        }
    }

    const person = new Person(18, '男');
    console.log(person.age, person.gender);
})();

// 实例方法
(function () {
    class Point {
        x = 1;
        y = 2;

        scale(n: number): void {
            this.x *= n;
            this.y *= n;
        }
    }

    const point = new Point();

    point.scale(10);

    console.log(point.x, point.y);
})();

// 继承
(function () {
    class Animal {
        move() {
            console.log('走两步');
        }
    }

    class Dog extends Animal {
        name = '二哈';

        bark() {
            console.log('旺旺！');
        }
    }

    const dog = new Dog();
    dog.move();
    dog.bark();
    console.log(dog.name);
})();

// 实现接口
(function () {
    interface Singale {
        sing(): void;

        name: string;
    }

    class Person implements Singale {
        name = 'jack';

        sing() {
            console.log('你是我的小呀小苹果');
        }
    }

    const person: Singale = new Person();
    person.sing();
})();

// 成员可见性 public
(function () {
    // 父类
    class Animal {
        public move() {
            console.log('走两步');
        }
    }

    const a = new Animal();
    a.move();

    // 子类
    class Dog extends Animal {
        bark() {
            console.log('旺旺！');
        }
    }

    const d = new Dog();
    d.move();
})();

// 成员可见性 protected
(function () {
    // 父类
    class Animal {
        // 这个方法是受保护的
        protected move() {
            console.log('走两步');
        }

        run() {
            this.move();
            console.log('跑起来');
        }
    }

    const a = new Animal();
    // a.move()
    a.run();

    // 子类
    class Dog extends Animal {
        bark() {
            this.move();
            console.log('旺旺！');
        }
    }

    const d = new Dog();
    d.bark();
})();

// 成员可见性 private
(function () {
    // 父类
    class Animal {
        private __run__() {
            console.log('Animal 内部辅助函数');
        }

        // 受保护的
        protected move() {
            this.__run__();
            console.log('走两步');
        }

        // 公开的
        run() {
            this.__run__();
            this.move();
            console.log('跑起来');
        }
    }

    const a = new Animal();
    a.run();

    // 子类
    class Dog extends Animal {
        bark() {
            this.move();
            console.log('旺旺！');
        }
    }

    const d = new Dog();
    d.bark();
})();

// readonly修饰符
(function () {
    /*class Person {
        // 只读属性
        readonly age: number = 18;

        constructor(age: number) {
            this.age = age;
        }

        // 错误演示：
        readonly setAge() {
          this.age = 20
        }
    }*/

    class Person {
        // 只读属性
        // 注意：只要是 readonly 来修饰的属性，必须手动提供明确的类型
        readonly age: number = 18;

        constructor(age: number) {
            this.age = age;
        }
    }

    interface IPerson {
        readonly name: string;
    }

    /*let obj: { readonly name: string } = {
        name: 'jack'
    };*/
    let obj: IPerson = {
        name: 'jack'
    };
    // obj.name = 'rose';
    console.log(obj);
})();