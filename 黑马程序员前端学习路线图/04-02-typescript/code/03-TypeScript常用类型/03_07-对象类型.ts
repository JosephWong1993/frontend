(function () {
    let person1: { name: string; age: number; sayHi(): void; greet(name: string): void } = {
        name: '刘老师',
        age: 18,
        sayHi() {
        },
        greet(name) {
        }
    };
    console.log(person1);

    let person2: {
        name: string
        age: number
        // sayHi(): void
        sayHi: () => void
        greet(name: string): void
    } = {
        name: '刘老师',
        age: 18,
        sayHi() {
        },
        greet(name) {
        }
    };
    console.log(person2);

    // 可选属性
    function myAxios(config: { url: string; method?: string }) {
    }

    myAxios({
        url: ''
    });
})();
