//four methods .all, .race, .settelled, .any



//creating 4 promises

let P1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("P1 settelded!")
        resolve("P1 settelded!")
    }, 1000)
});

let P2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("P2 settelded!")

        resolve("P2 settelded!")
    }, 1000)
});

let P3 = new Promise((resolve) => {
    setTimeout(() => {
        console.log("P3 settelded!")

        resolve("P3 settelded!")
    }, 1000)
});

let P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("P4 failed!")
        reject("P4 Failed!")
    }, 500)
});

async function promiseMehtods() {
    try {
        let res = await Promise.race([P1, P2, P3, P4]);
        console.log("RESULT ",res)
    } catch (err) {
        console.log("RESULT ERR: ",err)
    }
}

promiseMehtods()

