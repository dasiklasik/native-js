const sum = (a, b, c) => {
    return a + c + b
}

const multiply = (a, b, c) => {
    return a * b * c
}

const cur = (fn) => {
    return (...args) => {
        let res = 0;
        for (let i=0; i<args.length; i++) {
            res+=args[i]
        }
        return res
    }
}

const newSum = cur(sum)

console.log(newSum(1))
console.log(newSum(1, 2))