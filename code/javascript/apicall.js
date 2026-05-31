//four methods .all, .race, .settelled, .any





async function getUserList() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let usersList = await response.json();
        return usersList;
    } catch (err) {
        throw err;
    }

}

async function getPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        let postList = await response.json();
         return postList;
    } catch (err) {
        throw err;
    }

}

// getUserList().then((data) => {
//     console.log(data)
// }).catch((err) => { console.log(err) })
// getPost().then((data) => {
//     console.log(data)
// }).catch((err) => { console.log(err) })


async function apicall() {
    try {
        let userP = getUserList();
        let postsP = getPost();
        let [user, posts] = await Promise.all([userP, postsP]);

        console.log(user)
    } catch (err) {
        throw err;
    }
}
apicall()