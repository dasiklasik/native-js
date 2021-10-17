const yo = 'yo';

const dasha = {
    name: 'dasha',
    age: 23,
    friends: ["anna", 'liza']
}

const anna = Object.keys(dasha);
console.log(anna);

const Alex = {...dasha, friends: [...dasha.friends]};

dasha.friends.push('lesha');

console.log(dasha)
console.log(Alex);


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 85
    },
    {
        name: "Michel",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 90
    }
]

