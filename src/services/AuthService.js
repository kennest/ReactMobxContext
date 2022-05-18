const attemptToLogin = async () => {
    let response;
    await fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(resp =>
            resp.json()
        )
        .then((json) => {
            response = JSON.stringify(json);
            console.log("RESPONSE", json);
        }).catch((reject) => {
            console.log("ERROR", reject);
        });
    return response;
};

const getUserComments = async () => {
    let response;
    await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp =>
            resp.json()
        )
        .then((json) => {
            response = JSON.stringify(json);
            console.log("RESPONSE", json);
        }).catch((reject) => {
            console.log("ERROR", reject);
        });
    return response;
};

export default {attemptToLogin,getUserComments}