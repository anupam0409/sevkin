let prodData = null
let vAddCartData = null
let vGetCartData = null
let vUpdateCartData = null
let vDeleteCartData = null


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
const deleteCartData = (url, param) => {
    if (vDeleteCartData === null) {
        return fetch(url, {
            method: 'DELETE',
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
        return Promise.resolve(vDeleteCartData)
    }
}
const updateCartData = (url, param) => {
    if (vUpdateCartData === null) {
        return fetch(url, {
            method: 'PUT',
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
        return Promise.resolve(vUpdateCartData)
    }
}

export {
    getProdData, addCartData, getCartData, updateCartData,deleteCartData
};