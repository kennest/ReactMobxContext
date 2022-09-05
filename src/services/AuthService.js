const attemptToLogin = async () => {
    let response;
    await fetch('http://127.0.0.1:8000/api/v1/organization/')
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
    await fetch('http://127.0.0.1:8000/api/v1/project/')
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

export default { attemptToLogin, getUserComments }