let prodData = null
let vAddCartData = null
let vGetCartData = null

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

const getCartData = (url,param) => {
    if (vGetCartData === null) {
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
        return Promise.resolve(vGetCartData)
    }
}

const addCartData = (url, param) => {
    if (vAddCartData === null) {
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
        return Promise.resolve(vAddCartData)
    }
}

export {
    getProdData, addCartData, getCartData
};