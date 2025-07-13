let prodData = null
let cartData = null

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

const addCartData = (url, param) => {
    if (cartData === null) {
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
        return Promise.resolve(getProdData)
    }
}

export {
    getProdData, addCartData
};