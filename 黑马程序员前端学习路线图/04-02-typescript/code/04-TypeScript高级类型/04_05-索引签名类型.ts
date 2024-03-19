(function () {
    interface AnyObject {
        [key: string]: number;
    }

    let obj: AnyObject = {
        a: 1,
        abc: 124,
        abcde: 12345
    };
    console.log(obj);

    const arr = [1, 3, 5];
    arr.forEach(value => {
        console.log(value);
    });

    interface MyArray<Type> {
        [index: number]: Type;
    }

    let arr1: MyArray<number> = [1, 3, 5];
    console.log(arr1[0]);
})();