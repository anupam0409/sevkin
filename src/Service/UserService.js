let loginData = null

const doLoginData = (url, param) => {
    if (loginData === null) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(param)
        }).then(r => r.json()
            .then(data => ({
                status: r.status, body: data
            })
            ))
            .then(obj => {
                return obj.body
            })
            .catch(err => {
                return err
            });
    }
    else {
        return Promise.resolve(loginData)
    }
}

export {
    doLoginData
};