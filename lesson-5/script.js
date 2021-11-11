const arr = [1, 20, 30, 445, 34, 70]

//bubble sort
for (let j = 0; j < arr.length -1 ; j++) {
    for (let i = 0; i < arr.length-1 - j; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        }
    }
}
console.log(arr)


// sort
const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"]

const num = [1, 2, 5, 8, 45, 39, 67, 8897, 65]

// const comFun = (a,b) => {
//     if (a > b) {
//         return 66
//     } else {
//         return -2
//     }
// }

const comFun =(a,b) => b-a

const sortNum = num.sort((a,b) => b-a)
console.log(sortNum === num)



//


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
];

console.log(students.sort((a, b) => a.scores - b.scores))

