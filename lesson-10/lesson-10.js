//пишем свой axios

const axios = {
    get: (url, callback) => {
        if (url) {
            callback(null, [])
        } else {
            callback({message: 'Invalid url'}, null)
        }
    }
}

const promise = new Promise((resolve, reject) => {})

console.log(promise)


const axiosWithPromise = {
    get: (url) => {
        return new Promise((resolve, reject) => {
            if (url) {
                resolve('good')
            } else {
                reject('err')
            }
        })
    }
}
axiosWithPromise.get('http/').then()



