(function () {
    // 使用泛型来创建一个函数：
    function id<Type>(value: Type): Type {
        return value;
    }

    // 调用泛型函数：
    // 1 以 number 类型调用泛型函数
    const num = id<number>(10);

    // 2 以 string 类型调用泛型函数
    const str = id<string>('a');

    // 简化调用泛型函数
    let num1 = id(100);
    let str1 = id('abc');
})();

// 1.添加更加具体的类型
(function () {
    function id<Type>(value: Type[]): Type[] {
        value.length;
        return value;
    }
})();

// 2.添加约束
(function () {
    interface ILength {
        length: number;
    }

    function id<Type extends ILength>(value: Type): Type {
        value.length;
        return value;
    }

    id(['a', 'c']);
    id('abc');
    id({length: 10, name: 'jack'});

    // 错误演示
    // id(123)
})();

// 添加类型约束（使用keyof）
(function () {
    function getProp<Type, Key extends keyof Type>(obj: Type, key: Key) {
        return obj[key];
    }

    getProp({name: 'jack', age: 18}, 'age');
    getProp({name: 'jack', age: 18}, 'name');

    // 错误演示：
    // getProp({name: 'jack', age: 18}, 'name1');

    // 补充：（了解）
    getProp(18, 'toFixed');
    getProp('abc', 'split');
    getProp('abc', 1); // 此处 1 表示索引
    getProp(['a'], 'length');
    getProp(['a'], 1000);

    console.log('object'[1]); // b
})();

// 泛型接口
(function () {
    interface IdFunc<Type> {
        id: (value: Type) => Type;
        ids: () => Type[];
    }

    let obj: IdFunc<number> = {
        id(value) {
            return value;
        },
        ids() {
            return [1, 3, 5];
        }
    };
})();

// 泛型接口-数组
(function () {
    const strs = ['a', 'b', 'c'];
    strs.forEach(item => {
    });

    const nums = [1, 3, 5];
    nums.forEach(item => {
    });
})();

// 泛型类
(function () {
    /*class GenericNumber<NumType> {
        defaultValue: NumType;
        add: (x: NumType, y: NumType) => NumType;

        constructor(value: NumType) {
            this.defaultValue = value;
        }
    }
    // 此时，可以省略 <类型> 不写。因为 TS 可以根据传入的参数自动推导出类型
    const myNum = new GenericNumber(100);
    myNum.defaultValue = 10;*/

    class GenericNumber<NumType> {
        defaultValue: NumType;
        add: (x: NumType, y: NumType) => NumType;
    }

    // 这种情况下，推荐明确指定 <类型>。因为 TS 无法推导出类型
    const myNum = new GenericNumber<Number>();
    myNum.defaultValue = 10;
})();

// 泛型工具类型 - Partial<Type>
(function () {
    interface Props {
        id: string;
        children: number[];
    }

    type PartialProps = Partial<Props>

    let p1: Props = {
        id: '',
        children: [1]
    };
    console.log(p1);
    let p2: PartialProps = {
        // id: '',
        // children: [1, 3]
    };
    console.log(p2);
})();

// 泛型工具类-Readonly<Type>
(function () {
    interface Props {
        id: string;
        children: number[];
    }

    type ReadonlyProps = Readonly<Props>

    let p1: ReadonlyProps = {
        id: '1',
        children: [1, 3]
    };

    // p1.id = '2';
})();

// 泛型工具类-Pick<Type,Keys>
(function () {
    interface Props {
        id: string;
        title: string;
        children: number[];
    }

    type PickProps = Pick<Props, 'id' | 'title'>
    const pickProps: PickProps = {
        id: 'id',
        title: 'title',
    };
    console.log(pickProps);
})();

// 泛型工具类-Record<Keys,Type>
(function () {
    // type RecordObj = {
    //     a: string[]
    //     b: string[]
    //     c: string[]
    // }
    type RecordObj = Record<'a' | 'b' | 'c', string[]>
    let obj: RecordObj = {
        a: ['a'],
        b: ['b'],
        c: ['c']
    };
    console.log(obj);
})();