
const todoLists = [
    {
        id: '1',
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: '2',
        title: 'What to buy',
        filter: 'all',
    },
    {
        id: '3',
        title: 'What to buy',
        filter: 'all',
    }
]


const tasks = {
    [todoLists[0].id]: [
        {id: '1', title: 'HTML', isDone: true},
        {id: '2', title: 'CSS', isDone: false},
        {id: '3', title: 'JS', isDone: true}
    ],
    [todoLists[1].id]: [
        {id: '1', title: 'milk', isDone: true},
        {id: '2', title: 'bread', isDone: false},
        {id: '3', title: 'meet', isDone: true}
    ]
}

console.log({...tasks, [todoLists[0].id]: [todoLists[0].id].filter(t => t.id !== '1')})
console.log({...tasks, [todoLists[2].id]: {id: '1', title: 'redux', isDone: true}})

//reduce

const arrayNum = [1, 2, 3, 5, 6]
console.log(arrayNum.reduce((acc, el) => acc + el, 0))


let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        scores: 100
    }
];

console.log(students.reduce((acc, el) => acc += el.scores,0))