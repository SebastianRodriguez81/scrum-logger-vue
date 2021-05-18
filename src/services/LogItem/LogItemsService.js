import http from '../http-common'
import LogItemDto from './LogItemDto'

class LogItemsService {
    getAll() {
        return new Promise(function (resolve, reject) {
            http.get("/logitems/")
                .then(response => {
                    let logitems = [];
                    response.data.forEach(logItem => {
                        logitems.push(new LogItemDto(logItem._id, logItem.fecha, logItem.ayer, logItem.hoy));
                        resolve(logitems);
                    });
                })
                .catch(e => {
                    reject(e);
                })
        });
    }

    get(id) {
        return new Promise(function (resolve, reject) {
            http.get(`/logitems/${id}`)
                .then(response => {
                    let logItemDto = new LogItemDto(response.data._id, response.data.fecha, response.data.ayer, response.data.hoy);
                    resolve(logItemDto);
                })
                .catch(e => {
                    reject(e);
                })
        });
    }

    create(data) {
        return new Promise(function (resolve, reject) {
            http.post("/logitems/", data)
                .then(response => {
                    resolve(response);
                })
                .catch(e => {
                    reject(e);
                })
        });
    }

    update(id, data) {
        return new Promise(function (resolve, reject) {
            http.put(`/logitems/${id}`, data)
                .then(response => {
                    resolve(response);
                })
                .catch(e => {
                    reject(e);
                })
        });
    }

    delete(id) {
        return new Promise(function (resolve, reject) {
            http.delete(`/logitems/${id}`)
                .then(response => {
                    resolve(response);
                })
                .catch(e => {
                    reject(e);
                })
        });
    }
}

export default new LogItemsService()