import DaoService from '../../../services/DaoService'
import LogItemDto from './LogItemDto'

const uri = "/logitems/"

class LogItem {
    async getAll() {
        try {
            let response = await DaoService.getAll(uri)
            let logitems = []
            response.forEach(logItem => {
                logitems.push(new LogItemDto(logItem._id, logItem.fecha, logItem.ayer, logItem.hoy));
            });
            return logitems;
        } catch (error) {
            console.log(error);
            throw new ErrorEvent(error);
        }
    }

    async get(id) {
        try {
            let response = await DaoService.get(uri, id)
            return new LogItemDto(response._id, response.fecha, response.ayer, response.hoy);
        } catch (error) {
            console.log(error);
            throw new ErrorEvent(error);
        }
    }

    async create(data) {
        try {
            await DaoService.create(uri, data)
        } catch (error) {
            console.log(error);
            throw new ErrorEvent(error);
        }
    }

    async update(id, data) {
        try {
            await DaoService.update(uri, id, data)
        } catch (error) {
            console.log(error);
            throw new ErrorEvent(error);
        }
    }

    async delete(id) {
        try {
            await DaoService.delete(uri, id)
        } catch (error) {
            console.log(error);
            throw new ErrorEvent(error);
        }
    }
}

export default new LogItem()