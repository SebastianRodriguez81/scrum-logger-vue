import http from './http-common'


class DaoService {
    getAll(uri) {
        return new Promise(function (resolve, reject) {
            http.get(uri)
                .then(response => {
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e.data);
                })
        });
    }

    get(uri, id) {
        return new Promise(function (resolve, reject) {
            http.get(`${uri}${id}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e.data);
                })
        });
    }

    create(uri, data) {
        return new Promise(function (resolve, reject) {
            http.post(uri, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e.data);
                })
        });
    }

    update(uri, id, data) {
        return new Promise(function (resolve, reject) {
            http.put(`${uri}${id}`, data)
                .then(response => {
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e.data);
                })
        });
    }

    delete(uri, id) {
        return new Promise(function (resolve, reject) {
            http.delete(`${uri}${id}`)
                .then(response => {
                    resolve(response.data);
                })
                .catch(e => {
                    reject(e.data);
                })
        });
    }
}

export default new DaoService()