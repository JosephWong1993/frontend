(function () {
    interface Person {
        name: string;

        say(): number;
    }

    interface Contact {
        phone: string;
    }

    type PersonDetail = Person & Contact

    let obj: PersonDetail = {
        name: 'jack',
        phone: '133....',
        say() {
            return 1;
        }
    };
})();

(function () {
    // 对比：
    // interface A {
    //     fn: (value: number) => string;
    // }
    //
    // interface B extends A {
    //     fn: (value: string) => string;
    // }

    interface A {
        fn: (value: number) => string;
    }

    interface B {
        fn: (value: string) => string;
    }

    type C = A & B

    let c: C = {
        fn(value: number | string) {
            return value.toString();
        }
    };
    console.log(c.fn(1));
    console.log(c.fn('a'));
})();