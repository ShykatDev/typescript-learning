const myFunc = () => {
    return "Hello TS!";
}

// type ReturnMyFunc = ?
type MyFunc = typeof myFunc;
type MyFuncReturnType = ReturnType<MyFunc> // Make the return type dynamic from the function