// let myPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         alert('Hello')
//         res()
//     }, 2000)
//
// })
//     .then(() => {
//         console.log('resolved')
//     })


let myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        alert(Math.random())
        res()
    }, 3000)

})
    .then(() => {
        console.log('resolved')
    })