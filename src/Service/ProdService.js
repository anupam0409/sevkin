let prodData = null

const getProdData = (url) => {
    if (prodData === null) {
        return fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
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
        return Promise.resolve(getProdData)
    }
}

export {
    getProdData
};