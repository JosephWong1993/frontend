(function () {
    type PropKeys = 'x' | 'y' | 'z' | 'a' | 'b'
    type Type1 = { x: number; y: number; z: number; a: number; b: number }
    type Type2 = { [Key in PropKeys]: number }
    const type2Instance: Type2 = {
        x: 1,
        y: 2,
        z: 3,
        a: 4,
        b: 5
    };
    console.log(type2Instance);

    // 错误演示：
    // interface Type3 {
    //     [Key in PropKeys]: number;
    // }
})();

// 映射类型-使用keyof
(function () {
    type Props = { a: number; b: string; c: boolean }
    type Type3 = { [key in keyof Props]: number }
    const type3Instance: Type3 = {
        a: 1,
        b: 2,
        c: 3
    };
    console.log(type3Instance);
})();

// Partial<Type>实现原理
(function () {
    type Props = { a: number; b: string; c: boolean }
    // 模拟 Partial 类型：
    type MyPartial<T> = {
        [P in keyof T]?: T[P]
    }
    type PartialProps = MyPartial<Props>
    const partialPropsInstance: PartialProps = {};
    console.log(partialPropsInstance);
})();

// 索引查询（访问）类型
(function () {
    type Props = { a: number; b: string; c: boolean }
    type TypeA = Props['a']
    const a: TypeA = 1;
    console.log(a);
})();

//
(function () {
    type Props = { a: number; b: number; c: boolean }
    // 其他使用方式：
    type TypeA = Props['a' | 'b']
    type TypeB = Props[keyof Props]
})();